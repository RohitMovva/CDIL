import Image from "next/image";
import Button from "../components/button";
import Carousel from "@/components/carousel";

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-2 place-items-center gap-20">
        <div className="grid gap-10">
          <h1 className="text-7xl">
            Students working to close the digital divide
          </h1>
          <h2 className="text-xl">
            Elevating our communities through digital literacy and inclusion
            completely for free.
          </h2>
        </div>
        {/* <div className="grid place-items-end w-full h-auto object-contain max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            width={650}
            height={650}
            alt="Placeholder Parrot"
            className="rounded-2xl"
          />
        </div> */}
        <div className="grid relative place-items-end w-full h-120 max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            fill
            alt="Placeholder Parrot"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
      <div className="grid gap-10 place-content-center place-items-center">
        <h1 className="text-5xl">Our work matters</h1>
        <h2 className="text-xl">
          Millions of people are being left behind in the modern digital age. We
          teach tech skills to help close the digital divide.
        </h2>
        <div className="flex gap-10">
          <Button text="See our impact" href="/impact"></Button>
          <Button text="Learn with us" href="/events"></Button>
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-20">
        <Carousel
          data={[
            { image: "/LafayettePublicLibrary.jpg", alt: "alternate" },
            { image: "/SisterCarmen.jpg", alt: "hello" },
            { image: "/TheArc.webp", alt: "vertical" },
            { image: "/WanekaPark.png", alt: "vertical" },
          ]}
        ></Carousel>
        <div className="grid gap-10">
          <h1 className="text-5xl">Meet our partners</h1>
          <h2 className="text-xl">
            We partner with community organizations to offer our services to
            those who need them most.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-2 place-items-center gap-20">
        <div className="grid gap-10">
          <h1 className="text-5xl">Support our mission</h1>
          <h2 className="text-xl">
            Your support allows us to continue our free services. All donations
            are tax deductible.
          </h2>
          <div>
            <Button text="Donate Now"></Button>
          </div>
        </div>
        <div className="grid relative place-items-end w-full h-120 max-w-full">
          <Image
            src="/placeholder-parrot-2.webp"
            fill
            alt="Placeholder Parrot"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </>
  );
}
