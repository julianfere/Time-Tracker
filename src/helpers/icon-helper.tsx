import { ReactComponent as Work } from "../assets/icon-work.svg";
import { ReactComponent as Play } from "../assets/icon-play.svg";
import { ReactComponent as Study } from "../assets/icon-study.svg";
import { ReactComponent as Exercise } from "../assets/icon-exercise.svg";
import { ReactComponent as Social } from "../assets/icon-social.svg";
import { ReactComponent as SelfCare } from "../assets/icon-self-care.svg";
import { FunctionComponent, SVGProps } from "react";

const icons: {
  [key: string]: FunctionComponent<SVGProps<SVGSVGElement>>;
} = {
  work: Work,
  play: Play,
  study: Study,
  exercise: Exercise,
  social: Social,
  self: SelfCare,
};

const blankSvg = () => {
  return <svg />;
};

const IconHelper = (type: string) => {
  return icons[type] ?? blankSvg;
};

export { IconHelper };
