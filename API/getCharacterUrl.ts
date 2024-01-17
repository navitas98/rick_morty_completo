import { CharacterAPI } from "../type.ts";

export const getCharacterURL=async(url:string):Promise<CharacterAPI>=>{
    const response=await fetch(url);
    if(response.status!==200){throw new Error("Error al encontrar el personaje")}
    const data=await response.json();
    return{
        id:data.id,
        name:data.name,
        status:data.status,
        species:data.species,
        type:data.type,
        gender:data.gender,
        origin:{
            name:data.origin.name,
            url:data.origin.url
        },
        location:{
            name:data.location.name,
            url:data.location.url
        },
        image:data.image,
        episode:data.episode.map((e:string)=>e),
        created:data.created,
        url:data.url
    }
}