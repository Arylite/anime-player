import { useEpisode, useEpisodes, useLecteur } from "@/stores/useAnime";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { nameLecteur } from "@/lib/link";

export const PlayerControl = () => {
  const { setLecteur } = useLecteur();
  const { episodes } = useEpisodes();
  const { episode, setEpisode } = useEpisode();
  return (
    <div className="flex gap-2">
      <Select onValueChange={(value) => setEpisode(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Sélectionner un épisode" />
        </SelectTrigger>
        {Object.keys(episodes).length > 0 && (
          <SelectContent>
            {Object.keys(episodes).map((episode) => (
              <SelectItem key={episode} value={episode}>
                Episode {episode}
              </SelectItem>
            ))}
          </SelectContent>
        )}
        {Object.keys(episodes).length === 0 && (
          <SelectContent>
            <SelectItem value="0">Aucun épisode trouvé</SelectItem>
          </SelectContent>
        )}
      </Select>
      {episode && (
        <Select onValueChange={(value) => setLecteur(value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un lecteur" />
          </SelectTrigger>
          <SelectContent>
            {episodes[Number(episode)].map((lecteur: string) => (
              <SelectItem key={lecteur} value={lecteur}>
                {nameLecteur(lecteur)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};
