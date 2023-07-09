import Image from "next/image";
import styles from "../../styles/styles.module.css";

const iconSize = 32;

const SocialLink = ({ href, fileName }) => {
  return (
    <a href={href} target="_blank" className={styles.socialsIcon}>
      <Image src={"images/" + fileName} width={iconSize} height={iconSize} />
    </a>
  );
};

export default function Socials() {
  return (
    <div className={styles.socialsContainer}>
      <SocialLink
        href="https://www.instagram.com/emoryjuiceultimate/"
        fileName="Instagram.svg"
      />
      <SocialLink
        href="https://twitter.com/EmoryJuice"
        fileName="Twitter.svg"
      />
      <SocialLink href="mailto: emoryultimate@gmail.com" fileName="Email.svg" />
    </div>
  );
}
