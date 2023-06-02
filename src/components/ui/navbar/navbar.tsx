import { ClickableLinks } from "./clickable-items";
import style from "./style.module.scss";
import Image from "next/image";
import { Icon } from "../../desing/font-awnsome-icons";
import { fetchNavbarProps } from "~/helpers/requests/navbar";

export async function Navbar() {
  const navProps = await fetchNavbarProps();

  return (
    <nav className={style["navbar"]}>
      <Image
        src={`${process.env.BASE_API_URL}${navProps.navbar.logo.data.attributes.url}`}
        width={90}
        height={90}
        alt={navProps.navbar.logo.data.attributes.alternativeText ?? "logo"}
      />
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
