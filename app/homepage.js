import Image from "next/image";

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
      />
      <p>Home Page Coming Soon!</p>
    </>
  );
}
