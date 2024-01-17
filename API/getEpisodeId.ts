import { EpisodeAPI } from "../type.ts";

export const GetEpisodeID=async(id:string):Promise<EpisodeAPI>=>{
    const url=`https://rickandmortyapi.com/api/episode/${id}`
    const response=await fetch(url);
    if(response.status!=200)throw new Error("Error al encontrar el id");
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