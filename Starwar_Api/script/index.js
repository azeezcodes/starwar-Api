


function dropdown(name) {
    console.log(name)
}


let nameOfStar = document.querySelector("#name")


const loadDataToPage = (data) => {
    const { results } = data
 
    let pageTemplate = results.map(actor => {

        const { name, height, gender } = actor
       
        return `
                <div id="card-body">
                <img class="card-image" src="/profile.jpg" alt="profile image" width="400px" padding ="40px">
                


                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                ${name}
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li class"p-3"> Name: ${name}</li>
                  <li class"p-3"> Height: ${height}</li>
                  <li class"p-3"> Gender: ${gender}</li>
                </ul>
              </div>





                </div>
                `
    }).join("")

    return nameOfStar.innerHTML = pageTemplate
}


const api_url = "https://swapi.dev/api/people"

const fetchStarWarsStars = async (url) => {
    const data = await fetch(url)
    const response = await data.json()

    console.log(response)

    return response;
}



fetchStarWarsStars(api_url)
    .then(response => loadDataToPage(response))








