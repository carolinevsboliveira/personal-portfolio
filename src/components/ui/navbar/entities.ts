import type { ListedIcons } from "../../entities/icons";

type NavbarDataAttributes = {
  id: number;
  attributes: {
    language: string;
    navbar: {
      id: number;
      actionButton: {
        id: number;
        type: string | null;
        label: string;
        link: string | null;
        faIcon: string | null;
        theme: string | null;
      };
      logo: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            url: string;
          };
        };
      };

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
  data: Array<NavbarDataAttributes>;
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
