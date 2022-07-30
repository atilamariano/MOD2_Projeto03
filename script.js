let page = 1;


async function getAllCharacters(){
    const url = await fetch(`https://api.disneyapi.dev/characters?page=${page}`);

    const info = await url.json();

    info.data.forEach(function (personagens) {
        document.querySelector("#character-list").insertAdjacentHTML('beforeend',
        `
        <div class="card">
            <img class="image-character" src=${personagens.imageUrl}>

            <div>
                <h2 class="name-character">${personagens.name}</h2>
                <h4>Filmes</h4>
                <p class="species-character">${personagens.films}</p>
                <h4>Longas Metragens</h4>
                <p class="species-character">${personagens.shortFilms}</p>
                <h4>Curtas-Metragens</h4>
                <p class="species-character">${personagens.tvShows}</p>
            </div>
        </div>
        `
        );
    });

    
}
getAllCharacters();


function viewMore(){
    page++;
    getAllCharacters();
    console.log(page);
}


