import Image from "next/image";
import Socials from "./socials";
import { DisplayL } from "../shared/Type";

export const metadata = {
  title: "Emory Juice Ultimate",
};

export default function HomePage() {
  return (
    <>
      <Image
        src="/images/MainTitleHorizontal.svg"
        width={1}
        height={1}
        alt="Emory Juice Main Title"
        style={{ width: "100%", height: "auto" }}
        priority={true}
      />
      <DisplayL>#FreshSqueezed Ultimate Frisbee</DisplayL>
      <Socials />
    </>
  );
}
