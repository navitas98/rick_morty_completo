import { getCharacterID } from "../API/getCharacterID.ts";
import { GetEpisodeID } from "../API/getEpisodeId.ts";
import { CharacterAPI, EpisodeAPI } from "../type.ts";

export const Mutation={
    getCharacter:async(_:unknown,args:{id:string}):Promise<CharacterAPI>=>{
        const datos_personaje=await getCharacterID(args.id);
        return datos_personaje;
    },
    getEpisode:async(_:unknown,args:{id:string}):Promise<EpisodeAPI>=>{
        const datos_episodio=await GetEpisodeID(args.id);
        return datos_episodio;
    }

}