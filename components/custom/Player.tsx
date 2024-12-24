import { LoaderCircle } from "lucide-react";

interface PlayerProps {
  url: string;
}

export const Player = ({ url }: PlayerProps) => {
  return (
    <div className="relative aspect-video border-border border rounded-lg my-2">
      {url ? (
        <iframe src={url} className="w-full h-full overflow-hidden" />
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <LoaderCircle className="w-4 h-4 animate-spin text-muted-foreground" />
          <span className="text-sm text-muted-foreground mx-1">
            En Attente de l'épisode
          </span>
        </div>
      )}
    </div>
  );
};
