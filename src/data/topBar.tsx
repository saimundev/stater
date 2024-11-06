import { BsGithub, BsLinkedin } from "react-icons/bs";

export const TOP_BAR = [
  { id: 1, title: "Docs", link: "/doc/installation" },
  { id: 2, title: "Blog", link: "/doc/installation" },
  { id: 3, title: "Showcase", link: "/doc/installation" },
  {
    id: 5,
    icon: <BsGithub />,
    spacing: true,
    link: "https://github.com/saimundev",
  },
  { id: 6, icon: <BsLinkedin />, link: "https://bd.linkedin.com/in/saimundev" },
  {
    id: 4,
    subMenu: [
      { id: 101, title: "Light", value: "light" },
      { id: 102, title: "Dark", value: "dark" },
      { id: 103, title: "System", value: "system" },
    ],
  },
];
