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
      logo: Array<any>;
      navItems: Array<{
        id: number;
        title: string;
        path: string | null;
        link: string | null;
        fontAwsomeKey: string | null;
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
