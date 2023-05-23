import { client } from "~/helpers/requests/client";
import { ClickableLinks } from "./clickable-items";
import { NavbarResponse } from "./entities";
import style from "./style.module.scss";
import { Icon } from "../../desing/font-awnsome-icons";

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
    <nav className={style["navbar"]}>
      <div className={style["logo"]}>CAROLEZ</div>
      <input type="checkbox" id={style["checkbox_toggle"]} />
      <label htmlFor={style["checkbox_toggle"]} className={style["hamburger"]}>
        <Icon use="plus" size="1x" />
      </label>
      <ul className={style["nav-links"]} id={style["menu"]}>
        {navProps.navbar.navItems.map(({ title, id, link, fontAwsomeKey }) => (
          <li key={id}>
            <ClickableLinks
              linkName={title}
              href={link ?? "/"}
              key={id}
              fontAwsomeKey={fontAwsomeKey}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}
