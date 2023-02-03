const TOKEN = 1283484315564921
const URL = `https://superheroapi.com/api.php/${TOKEN}`
const ID = 245
const search = document.getElementById("search")
const searchButton = document.getElementById("searchButton")
const show_new = document.getElementById("show-new")
const show = document.querySelector("body")
const heroName = document.getElementById("name")
const stats = document.getElementById("stats")
const random = Math.floor(Math.random() * 731) + 1
const getSuperHero = (id, name) => {
    fetch(`${URL}/${ID}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            const stat = getStatHTML(json)
            show.innerHTML = `<img src="${json.image.url}" height="200" width="200"`
        })
}
getSuperHero(random)

show_new.addEventListener("click", () => {
    getSuperHero(random)
})
const getSearchedHero = (name) => {
    const hero = json.result[0]
    fetch(`${URL}/search/${name}`)
        .then(response => response.json())
        .then(json => {
            heroName.innerHTML = `<h2>${json.name}</h2>`
            show.innerHTML = `<img src="${hero.image.url}" height="200" width="200"`
            stats.innerHTML = `<p>Powerstats: ${json.powerstats}</p>`
        })
}
searchButton.addEventListener("click", () => {
    getSearchedHero(search.value)
})

const getStatHTML = (character) =>{
    heroName.innerHTML = `<h2>${character.name}</h2>`
    Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })
    return stats.join(" ")
}