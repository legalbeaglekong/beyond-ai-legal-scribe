import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// A5 dimensions in mm and pixels (at 96 DPI)
const A5_WIDTH_MM = 148;
const A5_HEIGHT_MM = 210;
const MM_TO_PX = 3.7795275591; // 1mm = 3.7795... pixels at 96 DPI
const A5_WIDTH_PX = Math.round(A5_WIDTH_MM * MM_TO_PX);
const A5_HEIGHT_PX = Math.round(A5_HEIGHT_MM * MM_TO_PX);

/**
 * Waits for all images within a container to be fully loaded
 */
const waitForImages = async (container: HTMLElement): Promise<void> => {
  const images = Array.from(container.querySelectorAll('img'));
  
  await Promise.all(
    images.map(img => {
      if (img.complete && img.naturalHeight !== 0) {
        return Promise.resolve();
      }
      return new Promise<void>(resolve => {
        const handleLoad = () => {
          img.removeEventListener('load', handleLoad);
          img.removeEventListener('error', handleError);
          resolve();
        };
        const handleError = () => {
          img.removeEventListener('load', handleLoad);
          img.removeEventListener('error', handleError);
          console.warn('Image failed to load:', img.src);
          resolve();
        };
        img.addEventListener('load', handleLoad);
        img.addEventListener('error', handleError);
        
        // Force reload if src is set but not loaded
        if (img.src) {
          const currentSrc = img.src;
          img.src = '';
          img.src = currentSrc;
        }
      });
    })
  );
};

/**
 * Clones a page element and forces all styles to be visible
 * This bypasses framer-motion's viewport-based animations
 */
const clonePageForCapture = (page: HTMLElement): HTMLElement => {
  const clone = page.cloneNode(true) as HTMLElement;
  
  const isDarkPage = page.classList.contains('cover-page') || 
                     page.classList.contains('section-title-page');
  
  // Position off-screen with exact pixel dimensions
  Object.assign(clone.style, {
    position: 'absolute',
    left: '-9999px',
    top: '0',
    width: `${A5_WIDTH_PX}px`,
    height: `${A5_HEIGHT_PX}px`,
    minHeight: `${A5_HEIGHT_PX}px`,
    maxHeight: `${A5_HEIGHT_PX}px`,
    opacity: '1',
    transform: 'none',
    visibility: 'visible',
    overflow: 'hidden', // Prevent content overflow causing white lines
    boxSizing: 'border-box',
    margin: '0',
    padding: page.style.padding || '',
    // Set explicit background to prevent white edges
    backgroundColor: isDarkPage ? '#0a0a0a' : '#ffffff',
  });

  // Force all children to be visible and fix any edge issues
  // BUT preserve intentional opacity on SVG elements (they use opacity for design)
  clone.querySelectorAll('*').forEach(el => {
    const htmlEl = el as HTMLElement;
    
    // Skip SVG elements and their children - preserve their intentional opacity
    const isInSvg = el.closest('svg') !== null || el.tagName.toLowerCase() === 'svg';
    
    if (!isInSvg) {
      htmlEl.style.opacity = '1';
    }
    
    htmlEl.style.transform = 'none';
    htmlEl.style.visibility = 'visible';
    htmlEl.style.animation = 'none';
    htmlEl.style.transition = 'none';
    
    // Fix SVG elements that might cause rendering issues
    if (el.tagName.toLowerCase() === 'svg') {
      htmlEl.style.maxWidth = '100%';
      htmlEl.style.overflow = 'hidden';
    }
  });

  // Ensure images have explicit dimensions
  clone.querySelectorAll('img').forEach(img => {
    if (img.naturalWidth && img.naturalHeight) {
      img.style.width = img.style.width || `${img.offsetWidth}px`;
      img.style.height = img.style.height || `${img.offsetHeight}px`;
    }
    img.crossOrigin = 'anonymous';
  });

  return clone;
};

/**
 * Generates a paginated PDF by rendering each page individually
 * This avoids canvas size limits and framer-motion visibility issues
 */
export async function generatePaginatedPDF(
  pages: HTMLElement[],
  filename: string,
  onProgress?: (current: number, total: number) => void
): Promise<void> {
  const pdf = new jsPDF({
    unit: 'mm',
    format: [A5_WIDTH_MM, A5_HEIGHT_MM] as [number, number],
    orientation: 'portrait',
    compress: true,
  });

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    if (!page) continue;
    
    // Report progress
    onProgress?.(i + 1, pages.length);
    
    // Clone the page to avoid modifying the live DOM
    const clone = clonePageForCapture(page);
    document.body.appendChild(clone);

    // Wait for images in the clone
    await waitForImages(clone);
    
    // Longer delay to ensure fonts and styles are applied
    await new Promise(resolve => setTimeout(resolve, 100));

    try {
      const canvas = await html2canvas(clone, {
        scale: 3, // Higher scale for better quality (was 2)
        useCORS: true,
        allowTaint: false, // Stricter CORS handling
        backgroundColor: null,
        logging: false,
        width: A5_WIDTH_PX,
        height: A5_HEIGHT_PX,
        windowWidth: A5_WIDTH_PX,
        windowHeight: A5_HEIGHT_PX,
        x: 0,
        y: 0,
        scrollX: 0,
        scrollY: 0,
        imageTimeout: 15000, // 15 second timeout for images
        removeContainer: false,
        foreignObjectRendering: false, // Disable for better compatibility
      });

      // Use PNG for better quality on graphics and text
      const imgData = canvas.toDataURL('image/png', 1.0);
      
      if (i > 0) {
        pdf.addPage();
      }
      
      // Add image at exact A5 dimensions
      pdf.addImage(imgData, 'PNG', 0, 0, A5_WIDTH_MM, A5_HEIGHT_MM, undefined, 'FAST');
    } finally {
      // Always clean up the clone
      document.body.removeChild(clone);
    }
  }

  pdf.save(filename);
}
