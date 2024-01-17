import { CharacterAPI } from "../type.ts";

export const getCharacterID=async(id:string):Promise<CharacterAPI>=>{
    const url=`https://rickandmortyapi.com/api/character/${id}`;
    const response=await fetch(url);
    if(response.status!==200){throw new Error("no se puede obtener el personaje")};
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