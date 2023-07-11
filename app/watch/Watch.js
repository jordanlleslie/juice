"use client";
import Link from "next/link";
import { useState } from "react";
import { DisplayL } from "../shared/Typography";
export default function Watch() {
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  };
  return (
    <>
      <DisplayL>Videos</DisplayL>
      <section>
        <Link href="/videos">Justin Burnett for Callahan</Link>
      </section>
    </>
  );
}
