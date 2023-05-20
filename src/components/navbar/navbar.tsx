import { client } from "~/helpers/requests/client";
import { ClickableLinks } from "./clicable-items";
import { NavbarResponse } from "./entities";
import style from "./style.module.scss";
import { Icon } from "../desing/font-awnsome-icons";

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
    { title: "ah", id: "1", link: "/" },
  ];

  return (
    // <div className={style["header"]}>
    //   <nav>
    //     <ul>
    //       <li>
    //         {/* {navProps.navbar.navItems.map(({ title, id, link }) => (
    //           <ClickableLinks linkName={title} href={link ?? "#"} key={id} />
    //         ))} */}
    //         {navProps.map(({ title, id, link }) => (
    //           <ClickableLinks linkName={title} href={link ?? "#"} key={id} />
    //         ))}
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
    <nav className={style["navbar"]}>
      <div className={style["logo"]}>MUO</div>
      <input
        type="checkbox"
        id={style["checkbox_toggle"]}
        style={{ display: "none" }}
      />
      <label htmlFor={style["checkbox_toggle"]} className={style["hamburger"]}>
        <Icon use="plusSquare" />
      </label>
      <ul className={style["nav-links"]} id={style["menu"]}>
        {navProps.map(({ title, id, link }) => (
          <li key={id}>
            <ClickableLinks linkName={title} href={link ?? "#"} key={id} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
