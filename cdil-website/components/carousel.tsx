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
  const [duration, setDuration] = useState("duration-300");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => {
        setDuration("duration-300");
        if (prev === data.length - 1) {
          setCurrentImg(4);
          setTimeout(() => {
            setDuration("duration-0");
            setCurrentImg(0);
            setTimeout(() => {
              setDuration("duration-300");
            }, 50);
          }, 300);
          return prev;
        }
        return prev + 1;
      });
    }, 1250);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="flex w-80 h-80 relative overflow-hidden">
        <div
          className={`flex transition-transform ease-in-out ${duration}`}
          style={{ transform: `translateX(-${currentImg * 320}px)` }}
        >
          {data.map((v, i) => (
            <div className="relative w-80 h-80" key={i}>
              <Image
                src={v.image}
                fill
                alt={v.alt ?? ""}
                className="rounded-2xl object-cover"
              />
            </div>
          ))}

          <div className="relative w-80 h-80">
            <Image
              src={data[0].image}
              fill
              alt={data[0].alt ?? ""}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
