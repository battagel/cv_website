declare module "myTypes" {
  type ProjectType = {
    name: string;
    description: string;
    language: string;
    html_url: string;
    homepage: string;
  };

  interface ProjectInt {
    projectList: ProjectType[];
  };

  interface MenuOpenedProps {
    menuOpened: boolean;
    setMenuOpened: Dispatch<SetStateAction<boolean>>;
  };

  type MessageType = {
    sender: string;
    message: string;
    timestamp: string;
  };

  interface MessageInt {
    MessageHistory: MessageType[];
  };
}

module.exports = {
  ProjectType,
  ProjectProps,
  MessageType,
  MessageInt
};
