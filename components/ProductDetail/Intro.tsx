import { IntroProps } from "./type";

const Intro = ({ data }: IntroProps) => {
  if (!data?.intro) return null;

  return <div className="w-full">{data.intro}</div>;
};

export default Intro;
