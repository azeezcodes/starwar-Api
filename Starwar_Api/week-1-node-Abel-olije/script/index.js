const api_url = "https://swapi.dev/api/people";

const get_api = async (url) => {
    const response = await fetch(url)

    const data = await response.json();
    console.log(data)
    return data

}
// get_api(api_url)

// render api
 const render_api = async () => {
     const data = await get_api(api_url);
     const {results} =data
     let html = '';

     results.forEach((result, index) => {
         let htmlCont = `<div id="card-body">
                          <img class="card-image" src="/acewars.png" alt="profile image" width="400px">
                          <h2 class="name" data-index="${index}">${result.name}</h2>
                        </div>
                        `;
        
       html += htmlCont;
     });

     html += `
        <div id="modal" class="modal">
        
            <div class="modal-content">
                <span class="close">&times;</span>
                <p class="character-name"></p>
                <p class="character-gender"></p>
                <p class="character-height"></p>
            </div>
        
        </div>
    `;

     let container = document.querySelector('.my_SAP');
     container.innerHTML = html;
     setModal(results)
 }

 render_api()

 function setModal(results) {
    document.querySelectorAll(".name").forEach(element => {

        element.addEventListener("click", (e) => {
            let index = element.dataset.index;
            let data = results[index];
            
            let name = document.querySelector(`.character-name`);
            let gender = document.querySelector(`.character-gender`);
            let height = document.querySelector(`.character-height`);

            name.innerHTML = `Name: ${data.name}`;
            gender.innerHTML = `Gender: ${data.gender}`;
            height.innerHTML = `Height: ${data.height}`;

            var modal = document.querySelector(`#modal`);
            modal.style.display = "block";
            document.querySelector(`#modal .close`).addEventListener('click', () => {
                modal.style.display = "none";
            });
        });
    })
 }

// module.exports = { main }
