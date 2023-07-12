"use client";
import Link from "next/link";
import { DisplayL } from "../shared/Typography";
import VideoModal from "./VideoModal";
import { useSearchParams } from "next/navigation";
export default function Watch() {
  const query = useSearchParams();
  return (
    <>
      {query.has("video") && <VideoModal />}
      <DisplayL>Videos</DisplayL>
      <section>
        <Link href="/watch?video=1">Justin Burnett for Callahan</Link>
      </section>
    </>
  );
}
