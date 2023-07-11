"use client";
import VideoModal from "../../watch/VideoModal";
import { useRouter } from "next/router";

export default function Videos() {
  const router = useRouter();
  return (
    <>
      <span onClick={() => router.back()}>Close modal</span>
      <VideoModal url="https://www.youtube.com/embed/6DZXFXTR0F4" />;
    </>
  );
}
