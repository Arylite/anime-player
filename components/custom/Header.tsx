"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { fetchEpisodes } from "@/lib/link";
import { LoaderCircle } from "lucide-react";
import { useActiveLink, useAnime, useEpisodes } from "@/stores/useAnime";

export const Header = (props: {activeLink?: string}) => {
    const { animeLink, setAnimeLink } = useAnime();
    const { setActiveLink } = useActiveLink();
    const { setEpisodes } = useEpisodes();

    const [status, setStatus] = useState<
        "loading" | "success" | "error" | "idle"
    >("idle");  

    const updateLink = (link: string) => {
        setAnimeLink(link);
        setActiveLink(link);
    };

    return (
        <section className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 p-8 border-b">
            <h1 className="text-4xl font-bold">Vox Anime</h1>
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-4 items-center">
                <Input
                    value={props.activeLink || animeLink}
                    onChange={(e) => updateLink(e.target.value)}
                    className="w-full md:w-[400px]"
                    placeholder="Lien de l'anime (Anime-Sama)"
                />
                <Button
                    onClick={async () => {
                        setStatus("loading");
                        const episodes = await fetchEpisodes(animeLink);
                        setEpisodes(episodes);
                        console.log(episodes);
                        setStatus("success");
                    }}
                    variant="default"
                    className="w-full md:w-auto transition-all duration-300"
                    disabled={status === "loading"}
                >
                    {status === "loading" ? (
                        <LoaderCircle className="w-4 h-4 mr-2 animate-spin" />
                    ) : null}
                    Rechercher
                </Button> 
            </div>
        </section>
    );
};
