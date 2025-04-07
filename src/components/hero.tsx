import { useMediaQuery } from "@/hook";
import { hero } from "@/data";
import { FC } from "react";
import Image from "next/image";

interface HeroProps {
  className: string;
}

const Hero: FC<HeroProps> = ({ className }) => {
  const isMobile = useMediaQuery("(max-width: 425px)");
  const imageURL = isMobile ? hero.image.mobile : hero.image.desktop;

  return (
    <section className={className}>
      <Image
        src={imageURL}
        alt={hero.title}
        width={800}
        height={400}
        sizes="100vw"
        priority
      />
      <div>
        <h1>{hero.title}</h1>
        <p>{hero.content}</p>
        <button type="button">Read More</button>
      </div>
    </section>
  );
};

export default Hero;
