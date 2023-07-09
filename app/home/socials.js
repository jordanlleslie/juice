import Image from "next/image";
import styles from "../../styles/styles.module.css";

const iconSize = 48;

const SocialLink = ({ href, handle, fileName }) => {
  return (
    <a href={href} target="_blank">
      <Image src={"images/" + fileName} width={iconSize} height={iconSize} />
      {handle}
    </a>
  );
};

export default function Socials() {
  return (
    <div className={styles.socialsContainer}>
      <SocialLink
        href="https://www.instagram.com/emoryjuiceultimate/"
        handle="@EmoryJuiceUltimate"
        fileName="Instagram.svg"
      />
      <SocialLink
        href="https://twitter.com/EmoryJuice"
        handle="@EmoryJuice"
        fileName="Twitter.svg"
      />
      <SocialLink
        href="mailto: emoryultimate@gmail.com"
        handle="emoryultimate@gmail.com"
        fileName="Email.svg"
      />
    </div>
  );
}
