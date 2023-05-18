import { client } from "~/helpers/requests/client";
import { ClickableLinks } from "./clicable-navbar/clicable-navbar";
import { NavbarResponse } from "./entities";
import style from "./style.module.scss";
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
  // const navProps = await fetchNavbarProps();
  const navProps = [
    { title: "ah", id: "1", link: "/" },
    { title: "ahb", id: "2", link: "/contact" },
  ];

  return (
    <div className={style["header"]}>
      <nav>
        <ul>
          <li>
            {/* {navProps.navbar.navItems.map(({ title, id, link }) => (
              <ClickableLinks linkName={title} href={link ?? "#"} key={id} />
            ))} */}
            {navProps.map(({ title, id, link }) => (
              <ClickableLinks linkName={title} href={link ?? "#"} key={id} />
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}
