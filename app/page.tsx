"use client";
import { Header } from "@/components/custom/Header";
import { Player } from "@/components/custom/Player";
import { useAnime } from "@/stores/useAnime";
import { PlayerControl } from "@/components/custom/PlayerControl";
import { useActiveLink, useLecteur } from "@/stores/useAnime";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { lecteur } = useLecteur();
  const { activeLink } = useActiveLink();
  
  return (
    <>
      <Header />
      <section className="mx-20 my-4">
        <PlayerControl />
        <Player url={lecteur} />
      </section>
    </>
  );
}
