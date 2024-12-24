import axios from 'axios';

export async function fetchEpisodes(url: string): Promise<Record<number, string[]>> {
    try {
        const response = await axios.get(`https://vox-cors.vercel.app/api?endpoint=${url}/episodes.js`);
        const text = response.data;

        // Extraire les épisodes avec l'expression régulière
        const epsRegex = /var\s+(\w+)\s*=\s*\[([^\]]+)\];/g;
        let match;
        const tempEpisodes: Record<string, string[]> = {};
        
        // Première étape : collecter tous les tableaux d'épisodes
        while ((match = epsRegex.exec(text)) !== null) {
            const variableName = match[1];
            const links = match[2].split(',').map((link: string) => link.replace(/['"\s]/g, ''));
            tempEpisodes[variableName] = links;
        }

        // Deuxième étape : réorganiser par numéro d'épisode
        const episodes: Record<number, string[]> = {};
        const numberOfEpisodes = Object.values(tempEpisodes)[0]?.length || 0;

        for (let i = 0; i < numberOfEpisodes; i++) {
            episodes[i + 1] = Object.values(tempEpisodes)
                .map(lecteur => lecteur[i])
                .filter(url => !url.includes('sendvid'));
        }

        console.log(episodes);
        return episodes;
    } catch (error) {
        console.error("Error fetching or parsing the file:", error);
        return {};
    }
}

export function nameLecteur(url: string): string {
  try {
    const hostname = new URL(url).hostname;
    const domain = hostname.replace(/^(www\.|m\.)/, '');
    
    // Modification du traitement pour sibnet.ru
    if (domain.includes('sibnet.ru')) {
      return 'Sibnet';
    }
    
    // Traitement normal pour les autres domaines
    const mainDomain = domain.split('.')[0];
    return mainDomain.charAt(0).toUpperCase() + mainDomain.slice(1);
  } catch (error) {
    console.error("Error fetching or parsing the file:", error);
    return url;
  }
}