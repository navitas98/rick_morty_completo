export const typeDefs = `#graphql
type Character{
    id:ID!
    name:String!
    status:Status!
    species:String!
    type:String!
    gender:Gender!
    origin:Location!
    location:Location!
    image:String!
    episode:[Episode!]!
    url:String!
    created:String!
}
type Episode{
    id:ID!
    name:String!
    air_date:String!
    characters:[Character!]!
    url:String!
    created:String!
}
enum Gender{
    Female,
    Male,
    Genderless,
    unknown
}
type Location{
    name:String!
    url:String!
}
enum Status {
    Dead
    Alive
    unknown
}
type Mutation{
    test:String!
    getCharacter(id:ID!):Character!
    getEpisode(id:ID!):Episode!

}
type Query{
    test:String!
}

`