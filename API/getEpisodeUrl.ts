import { EpisodeAPI } from "../type.ts";

export const getEpisodeURL=async(url:string):Promise<EpisodeAPI>=>{
    const response=await fetch(url);
    if(response.status!==200)throw new Error("error al buscar el episodio");
    const data=await response.json();
    return{
        id:data.id,
        name:data.name,
        air_date:data.air_date,
        episode:data.episode,
        characters:data.characters.map((e:string)=>e),
        url:data.url,
        created:data.created
    }
}