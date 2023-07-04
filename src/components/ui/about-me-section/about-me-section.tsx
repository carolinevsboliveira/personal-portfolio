import { fetchAboutMeSection } from "~/helpers/requests/about-me-section";
import style from "./style.module.scss";
import Image from "next/image";

export async function AboutMeSection() {
  const aboutMeProps = await fetchAboutMeSection();
  const mainTitle = aboutMeProps.aboutMe.mainTitle;
  const personalPhrase = aboutMeProps.aboutMe.mainPhrase;
  const imageAtributtes = aboutMeProps.aboutMe.profilePhoto.data.attributes;
  return (
    <div className={style["main-information"]}>
      <div className={style["presentation-text"]}>
        <p>{mainTitle.title}</p>
        <h2>
          <span>{personalPhrase}</span>
        </h2>
      </div>
      <Image
        src={`${process.env.BASE_API_URL}${imageAtributtes.url}`}
        alt={imageAtributtes.alternativeText ?? "Profile image"}
        width={imageAtributtes.width}
        height={imageAtributtes.height}
      />
    </div>
  );
}
