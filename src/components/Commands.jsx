import About from "./commands/About";
import Banner from "./commands/Banner";
import Experiences from "./commands/Experiences";
import Help from "./commands/Help";

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
    command: "experiences",
    component: <Experiences key={`experiences-${Date.now()}`} />,
  },
];
