"use client";
import { Header } from "@/components/custom/Header";
import { Player } from "@/components/custom/Player";
import { PlayerControl } from "@/components/custom/PlayerControl";
import { useLecteur } from "@/stores/useAnime";

export default function Home() {
  const { lecteur } = useLecteur();
  
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
