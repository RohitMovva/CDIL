"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type CarouselProps = {
  data: {
    image: string;
    alt?: string;
  }[];
};

export default function Carousel(props: CarouselProps) {
  const { data } = props;
  const [currentImg, setCurrentImg] = useState(0);
  const [duration, setDuration] = useState("duration-600");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => {
        setDuration("duration-600");
        if (prev === data.length - 1) {
          setCurrentImg(4);
          setTimeout(() => {
            setDuration("duration-0");
            setCurrentImg(0);
            setTimeout(() => {
              setDuration("duration-600");
            }, 50);
          }, 600);
          return prev;
        }
        return prev + 1;
      });
    }, 1750);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex w-[500px] h-80 relative overflow-hidden">
        <div
          className={`flex transition-transform ease-in-out ${duration}`}
          style={{ transform: `translateX(-${currentImg * 500}px)` }}
        >
          {data.map((v, i) => (
            <div className="relative w-[500px] h-80 flex items-center justify-center rounded-2xl" key={i}>
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={v.image}
                  width={500}
                  height={320}
                  alt={v.alt ?? ""}
                  className="rounded-2xl object-contain"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </div>
          ))}

          <div className="relative w-[500px] h-80 flex items-center justify-center rounded-2xl">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={data[0].image}
                width={500}
                height={320}
                alt={data[0].alt ?? ""}
                className="rounded-2xl object-contain"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}