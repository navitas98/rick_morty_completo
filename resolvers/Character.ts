import { getEpisodeURL } from "../API/getEpisodeUrl.ts";
import { CharacterAPI } from "../type.ts";

export const Character = {
    episode: async (parent: CharacterAPI) => {
        const episode=parent.episode.map((e:string)=>e)
        
        
        const getInfoEpisode = await Promise.all(
            episode.map(async (e: string) => {  
                return await getEpisodeURL(e);               
            })
        );
        return getInfoEpisode;
       
    }
};
