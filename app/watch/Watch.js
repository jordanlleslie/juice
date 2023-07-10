"use client";
import VideoModal from "./VideoModal";
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
        <button onClick={handleModal}>Justin Burnett For Callahan</button>
      </section>
      {show && (
        <VideoModal
          url="https://www.youtube.com/embed/6DZXFXTR0F4"
          onClickout={handleModal}
        />
      )}
    </>
  );
}
