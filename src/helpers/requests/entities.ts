import type { ListedIcons } from "~/components/entities/icons";

type DefaultImageAttributes = {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      url: string;
      width: number;
      height: number;
    };
  };
};
type DefaultActionButton = {
  type: string | null;
  label: string;
  link: string | null;
  faIcon: ListedIcons | null;
  theme: string | null;
};

type Metadata = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};
type NavbarDataAttributes = {
  id: number;
  attributes: {
    language: "english" | "portuguese";
    navbar: {
      id: number;
      actionButton: DefaultActionButton;
      logo: DefaultImageAttributes;

      navItems: Array<{
        id: number;
        title: string;
        path: string | null;
        link: string | null;
        fontAwsomeKey?: ListedIcons;
      }>;
    };
  };
};

export type NavbarResponse = {
  data: NavbarDataAttributes[];
  meta: Metadata;
};

export type AboutMeDataAttributes = {
  id: number;
  attributes: {
    language: "english" | "portuguese";
    aboutMe: {
      mainPhrase: string;
      description: string;
      mainTitle: {
        title: string;
        icon: ListedIcons;
      };
      profilePhoto: DefaultImageAttributes;
      actionButtons: DefaultActionButton[];
    };
  };
};

export type AboutMeResponse = {
  data: AboutMeDataAttributes[];
  meta: Metadata;
};
