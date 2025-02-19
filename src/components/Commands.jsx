import About from "./commands/About";
import Banner from "./commands/Banner";
import Experiences from "./commands/Exps";
import Help from "./commands/Help";
import Certs from "./commands/Certs"
import Edu from "./commands/Edu"

export const commands = [
  {
    command: "help",
    component: <Help key={`help-${Date.now()}`} />,
  },
  {
    command: "banner",
    component: <Banner key={`banner-${Date.now()}`} />,
  },
  {
    command: "clear",
    component: null,
  },
  {
    command: "about",
    component: <About key={`about-${Date.now()}`} />,
  },
  {
    command: "exps",
    component: <Experiences key={`exp-${Date.now()}`} />,
  },
  {
    command: "certs",
    component: <Certs key={`certs-${Date.now()}`} />,
  },
  {
    command: "edu",
    component: <Edu key={`edu-${Date.now()}`} />,
  },
];
