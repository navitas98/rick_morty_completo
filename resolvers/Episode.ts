import { getCharacterURL } from "../API/getCharacterUrl.ts";
import { EpisodeAPI } from "../type.ts";

export const Episode={
    characters:async(parent:EpisodeAPI)=>{
        const characters=parent.characters.map((e:string)=>e)
        
        
        const characterInfo= await Promise.all(
            characters.map(async(e:string)=>{
            return await getCharacterURL(e);
        }))
        return characterInfo
    }
}