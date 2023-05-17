import { client } from "~/helpers/requests/default-request-config";
import { ClickableLinks } from "./clicable-navbar";
import { NavbarResponse } from "./entities";

export const fetchNavbarProps = async () => {
  const result = await client.get<NavbarResponse>("api/homes", {
    params: {
      populate: {
        navbar: {
          populate: "*",
        },
      },
    },
  });

  return result.data.data[0].attributes;
};

export async function Navbar() {
  const navProps = await fetchNavbarProps();

  return (
    <>
      {navProps.navbar.navItems.map(({ title, id, link }) => (
        <ClickableLinks linkName={title} href={link ?? "#"} key={id} />
      ))}
    </>
  );
}
