import { create } from "zustand";

export const useAnime = create<{
  animeLink: string;
  setAnimeLink: (animeLink: string) => void;
}>((set) => ({
  animeLink: "",
  setAnimeLink: (animeLink) => set({ animeLink }),
}));

export const useEpisodes = create<{
  episodes: Record<number, string[]>;
  setEpisodes: (episodes: Record<number, string[]>) => void;
}>((set) => ({
  episodes: {},
  setEpisodes: (episodes) => set({ episodes }),
}));

export const useEpisode = create<{
  episode: string;
  setEpisode: (episode: string) => void;
}>((set) => ({
  episode: "",
  setEpisode: (episode) => set({ episode }),
}));

export const useLecteur = create<{
  lecteur: string;
  setLecteur: (lecteur: string) => void;
}>((set) => ({
  lecteur: "",
  setLecteur: (lecteur) => set({ lecteur }),
}));

export const useActiveLink = create<{
  activeLink: string;
  setActiveLink: (activeLink: string) => void;
}>((set) => ({
  activeLink: "",
  setActiveLink: (activeLink) => set({ activeLink }),
}));

