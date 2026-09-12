
interface SectionTitlePageProps {
  sectionNumber: string;
  title: string;
}

const SectionTitlePage = ({ sectionNumber, title }: SectionTitlePageProps) => {
  return (
    <div data-pdf-page className="ebook-page section-title-page flex flex-col justify-center items-center text-center p-10 md:p-16 box-border overflow-hidden bg-foreground">
      <div
      >
        <div className="text-sage font-sans tracking-[2px] uppercase text-xs mb-3">
          {sectionNumber}
        </div>
        <h2 className="font-display text-3xl md:text-4xl leading-tight text-white">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitlePage;
