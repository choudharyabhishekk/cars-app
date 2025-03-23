"use client";

import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex-1 pt-36 p-8">
        <h1 className="text-5xl my-2">
          Find, book, rent a car: quick and super easy!
        </h1>

        <p className="text-xl text-slate-200">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <Button title="Explore Cars" handleClick={handleScroll} />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            width={600}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
