import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/30dbeb52-50dc-4b0e-9abb-806c94f01a04/files/564801ad-56de-4d39-a5d1-73b9a9337ff1.jpg",
    "/abstract-blue-gradient.webp",
    "https://cdn.poehali.dev/projects/30dbeb52-50dc-4b0e-9abb-806c94f01a04/files/b2c2e4f0-68ce-4fe2-8f4c-1193b5d66e7e.jpg",
    "/freepik__enhance__98192.png",
    "https://cdn.poehali.dev/projects/30dbeb52-50dc-4b0e-9abb-806c94f01a04/files/2083620e-4b0d-443e-87f5-7b5e5215c565.jpg",
    "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
    "/slide.png",
    "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
    "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
    "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
    "/LS.png",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;