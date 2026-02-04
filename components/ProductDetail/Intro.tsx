import { IntroProps } from "./type";

const Intro = ({ data }: IntroProps) => {
  if (!data?.tagline) return null;

  return (
    <aside className=" text-white font-bold py-4 px-8 backdrop-blur">
      <div
        className="w-full "
        dangerouslySetInnerHTML={{ __html: data.tagline }}
      />
    </aside>
  );
};

export default Intro;
