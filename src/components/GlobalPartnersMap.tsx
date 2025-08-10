import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const GlobalPartnersMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  // Partner locations with details
  const partners = [
    { name: "Magic Circle Partner - London", lat: 51.5074, lng: -0.1278, region: "Europe" },
    { name: "White Shoe Firm - New York", lat: 40.7128, lng: -74.0060, region: "North America" },
    { name: "Leading Firm - Singapore", lat: 1.3521, lng: 103.8198, region: "Asia-Pacific" },
    { name: "Top Tier Firm - Hong Kong", lat: 22.3193, lng: 114.1694, region: "Asia-Pacific" },
    { name: "Premier Firm - Tokyo", lat: 35.6762, lng: 139.6503, region: "Asia-Pacific" },
    { name: "Elite Firm - Sydney", lat: -33.8688, lng: 151.2093, region: "Asia-Pacific" },
    { name: "Leading Practice - Frankfurt", lat: 50.1109, lng: 8.6821, region: "Europe" },
    { name: "Top Firm - Dubai", lat: 25.2048, lng: 55.2708, region: "Middle East" },
    { name: "Premier Practice - Los Angeles", lat: 34.0522, lng: -118.2437, region: "North America" },
    { name: "Elite Firm - Toronto", lat: 43.6532, lng: -79.3832, region: "North America" }
  ];

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'globe',
        zoom: 1.5,
        center: [30, 15],
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: false,
        }),
        'top-right'
      );

      // Add atmosphere and fog effects
      map.current.on('style.load', () => {
        map.current?.setFog({
          color: 'rgb(220, 220, 235)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.1,
        });

        // Add partner markers with blinking animation
        partners.forEach((partner, index) => {
          // Create a custom marker element
          const markerElement = document.createElement('div');
          markerElement.className = 'partner-marker';
          markerElement.style.cssText = `
            width: 20px;
            height: 20px;
            background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--primary-glow)));
            border: 3px solid white;
            border-radius: 50%;
            cursor: pointer;
            animation: pulse 2s infinite;
            animation-delay: ${index * 0.2}s;
            box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
          `;

          // Add CSS animation
          if (!document.querySelector('#partner-marker-styles')) {
            const style = document.createElement('style');
            style.id = 'partner-marker-styles';
            style.textContent = `
              @keyframes pulse {
                0% {
                  transform: scale(1);
                  box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
                }
                50% {
                  transform: scale(1.2);
                  box-shadow: 0 0 30px hsl(var(--primary) / 0.8);
                }
                100% {
                  transform: scale(1);
                  box-shadow: 0 0 20px hsl(var(--primary) / 0.5);
                }
              }
            `;
            document.head.appendChild(style);
          }

          // Create marker and popup
          const popup = new mapboxgl.Popup({
            offset: 25,
            closeButton: false
          }).setHTML(`
            <div class="p-3 min-w-[200px]">
              <h4 class="font-semibold text-sm mb-1">${partner.name}</h4>
              <p class="text-xs text-gray-600">${partner.region}</p>
            </div>
          `);

          const marker = new mapboxgl.Marker(markerElement)
            .setLngLat([partner.lng, partner.lat])
            .setPopup(popup)
            .addTo(map.current!);

          // Show popup on hover
          markerElement.addEventListener('mouseenter', () => {
            popup.addTo(map.current!);
          });
          
          markerElement.addEventListener('mouseleave', () => {
            popup.remove();
          });
        });
      });

      // Rotation animation settings
      const secondsPerRevolution = 300;
      const maxSpinZoom = 4;
      const slowSpinZoom = 2;
      let userInteracting = false;
      let spinEnabled = true;

      // Spin globe function
      function spinGlobe() {
        if (!map.current) return;
        
        const zoom = map.current.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution;
          if (zoom > slowSpinZoom) {
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
          }
          const center = map.current.getCenter();
          center.lng -= distancePerSecond;
          map.current.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      }

      // Event listeners for interaction
      map.current.on('mousedown', () => {
        userInteracting = true;
      });
      
      map.current.on('dragstart', () => {
        userInteracting = true;
      });
      
      map.current.on('mouseup', () => {
        userInteracting = false;
        spinGlobe();
      });
      
      map.current.on('touchend', () => {
        userInteracting = false;
        spinGlobe();
      });

      map.current.on('moveend', () => {
        spinGlobe();
      });

      // Start the globe spinning
      spinGlobe();

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  if (!mapboxToken) {
    return (
      <Card className="bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border-0 shadow-elegant">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Configure Map</h3>
          <p className="text-muted-foreground mb-6">
            Enter your Mapbox public token to display the global partners map.
            <br />
            <span className="text-sm">Get your token from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a></span>
          </p>
          <div className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Enter Mapbox public token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground"
            />
            <p className="text-xs text-muted-foreground">
              For production use, add your Mapbox token to Supabase Edge Function Secrets
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/5 rounded-lg" />
      
      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/50">
        <h4 className="font-semibold text-sm mb-2 text-foreground">Global Network</h4>
        <div className="space-y-1 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-primary to-primary-glow rounded-full"></div>
            <span>Partner Law Firms</span>
          </div>
          <p className="text-xs mt-2">
            {partners.length} partner firms across {new Set(partners.map(p => p.region)).size} regions
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlobalPartnersMap;