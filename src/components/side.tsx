import { FC, Fragment } from "react";
import { sidebar } from "@/data";

const SideContent: FC<{ className: string }> = ({ className }) => {
  return (
    <section className={className}>
      <h1>New</h1>
      {sidebar.map((i, k) => (
        <Fragment key={k}>
          <article>
            <h2>{i.title}</h2>
            <p>{i.content}</p>
          </article>
          {k !== sidebar.length - 1 && <hr />}
        </Fragment>
      ))}
    </section>
  );
};

export default SideContent;
