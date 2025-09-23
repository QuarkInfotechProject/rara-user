import { IntroProps } from "./type";

const Intro = ({ data }: IntroProps) => {
  if (!data?.tagline) return null;

  return (
    <div className="w-full" dangerouslySetInnerHTML={{ __html: data.tagline }} />
  );
};

export default Intro;
