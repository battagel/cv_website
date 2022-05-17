declare module "myTypes" {
  type ProjectType = {
    title: string;
    desc: string;
    badge: string;
    badge_colour: string;
    image_caption: string;
    image_link: string;
    button_text: string;
    button_colour: string;
    date: string;
  };

  interface ProjectInt {
    projectList: ProjectType[];
  }

  interface MenuOpenedProps {
    menuOpened: boolean;
    setMenuOpened: Dispatch<SetStateAction<boolean>>;
  }
}

module.exports = {
  ProjectType,
  ProjectProps,
};