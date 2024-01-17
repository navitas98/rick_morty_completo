export type CharacterAPI={
    id:string,
    name:string,
    status:"Alive"|"Dead"|"unknown",
    species:string,
    type:string,
    gender:"Female"|"Male"|"Genderless"|"unknown",
    origin:Location,
    location:Location,
    image:string,
    episode:string[],
    url:string,
    created:string
}
type Location={
    name:string,
    url:string
}
export type EpisodeAPI={
    id:string,
    name:string,
    air_date:string,
    episode:string,
    characters:string[],
    url:string,
    created:string
}