//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    fetchUsers(){
        return $.get(`https://randomuser.me/api/?results=7`)
    }

    fetchQuote(){
        return $.get(`https://api.kanye.rest/`)
    }

    fetchPokemon(){
        const randomId = Math.floor(Math.random() * 949)
        return $.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    }

    fetchMeat(){
        return $.get(`https://baconipsum.com/api/?type=meat-and-filler`)
    }
    getAllData(){
        let usersPromis = this.fetchUsers()
        let QuotePromis = this.fetchQuote()
        let pokemonPromis = this.fetchPokemon()
        let meatPromis = this.fetchMeat()

        return Promise.all([usersPromis,QuotePromis,pokemonPromis,meatPromis])
            .then((promisesResult)=>{
            let [users ,quote, pokemon, meat]= promisesResult
            this.data.user = {name :users.results[0].name.first+ " "+users.results[0].name.last , location : users.results[0].location.state +" - "+users.results[0].location.city, profilePicture:users.results[0].picture.large}
            this.data.friends = users.results.map(friend => {return {name:friend.name.first+" "+friend.name.last}})
            this.data.quote=quote
            this.data.meat={meat:meat[0]}
            this.data.pokemon ={name:pokemon.name, pokemonIMG: pokemon.sprites.front_default}
            })

    }
}
