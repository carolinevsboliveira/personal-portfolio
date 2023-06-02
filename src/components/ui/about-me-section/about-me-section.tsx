import { fetchAboutMeSection } from "~/helpers/requests/about-me-section";
import style from "./style.module.scss";
import Image from "next/image";

export async function AboutMeSection() {
  const aboutMeProps = await fetchAboutMeSection();
  const imageAtributtes = aboutMeProps.aboutMe.profilePhoto.data.attributes;
  return (
    <div className={style["main-information"]}>
      <div className={style["presentation-text"]}>Ahh</div>
      <Image
        src={`${process.env.BASE_API_URL}${imageAtributtes.url}`}
        alt={imageAtributtes.alternativeText ?? "Profile image"}
        width={imageAtributtes.width}
        height={imageAtributtes.height}
      />
    </div>
  );
}
