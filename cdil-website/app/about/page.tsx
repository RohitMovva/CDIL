import Carousel from "@/components/carousel";

export default function Page() {
    return (
      <div>
        <Carousel
          data={[
            { image: "/LafayettePublicLibrary.jpg", alt: "alternate"},
            { image: "/SisterCarmen.jpg", alt: "hello"},
            { image: "/TheArc.webp", alt: "vertical"},
            { image: "/WanekaPark.png", alt: "vertical"}
          ]}
        ></Carousel>
      </div>
    );
}