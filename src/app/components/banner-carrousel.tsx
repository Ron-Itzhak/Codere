"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import banner1desktop from "./../../lib/assets/CO-SegmentedInicio-XSELL-Desktop.jpg";
import banner1mobile from "./../../lib/assets/CO-SegmentedInicio-XSELL-Mobile.jpg";
import banner2desktop from "./../../lib/assets/CO-SegmentedInicio-Casino-Desktop.jpg";
import banner2mobile from "./../../lib/assets/CO-SegmentedInicio-Casino-Mobile.jpg";

const BannerCarrousel = () => {
  return (
    <div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3250,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <Image
              className="hidden lg:flex"
              src={banner1desktop}
              alt="Picture of the author"
            />
            <Image
              className="lg:hidden"
              src={banner1mobile}
              alt="Picture of the author"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="hidden lg:flex"
              src={banner2desktop}
              alt="Picture of the author"
            />
            <Image
              className="lg:hidden"
              src={banner2mobile}
              alt="Picture of the author"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default BannerCarrousel;
