import { numbered } from "@/data";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

const NumberedContent: FC<{ className: string }> = ({ className }) => {
  return (
    <section className={className}>
      {numbered.map((i, k) => {
        return (
          <article key={k}>
            <Image width={110} height={135} alt={i.title} src={`${i.image}`} />
            <div>
              <h2>{`0${k + 1}`}</h2>
              <Link href={"#"}>{i.title}</Link>
              <p>{i.content}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default NumberedContent;
