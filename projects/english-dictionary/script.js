const wrapper = document.querySelector(".wrapper"),
searchInput = wrapper.querySelector("input"),
synonyms = wrapper.querySelector(".synonyms .list"),
infoText = wrapper.querySelector(".info-text"),
volumeIcon = wrapper.querySelector(".word i"),
removeIcon = wrapper.querySelector(".search span");
let audio;


function data(result, word) {
    if (result.title){
        infoText.innerHTML = `Can't find the meaning of <span>"${word}"</span>.Please try to search for another
        word`;
    }
    else {
        console.log(result);
        wrapper.classList.add("active");
        let definitions = result[0].meanings[0].definitions[0],
        phonetics = `${result[0].meanings[0].partOfSpeech} / ${result[0].phonetics[0].text} / `;
        
        document.querySelector('.word p').innerText = result[0].word;
        document.querySelector('.word span').innerText = phonetics;
        document.querySelector('.meaning span').innerText = definitions.definition;
        document.querySelector('.example span').innerText = definitions.example;
        audio = new Audio('https:' + result[0].phonetics[0].audio);
        
        if(definitions.synonyms[0] == undefined){
            synonyms.parentElement.style.display = 'none';
        }
        else {
            synonyms.parentElement.style.display = 'block';
            synonyms.innerHTML = "";
            for( let i =0; i < 5; i++) {
                let tag = `<span onclick = search('${definitions.synonyms[i]}')>${definitions.synonyms[i]},</span>`;
                synonyms.insertAdjacentHTML('beforeend', tag);
            }
        }
    }
}

function search (word){
    searchInput.value = word;
    fetchApi(word);
}

function fetchApi(word) {
    wrapper.classList.remove('active');
    infoText.style.color = '#000';
    infoText.innerHTML = `Searching the meaning of<span>"${word}"</span>`;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    // fetching api response and returning it with parsing into js obj
    //method calling data with passing api response
    fetch(url).then(res => res.json()).then(result => data(result, word));
}


searchInput.addEventListener('keyup', e => {
    if(e.key === 'Enter' && e.target.value){
        fetchApi(e.target.value);
    }
});

volumeIcon.addEventListener('click', () => {
    audio.play();
});

removeIcon.addEventListener('click', () => {
    searchInput.value = "";
    searchInput.focus();
    wrapper.classList.remove("active");
    infoText.style.color = '#9a9a9a';
    infoText.innerHTML= "Type a word and press enter";
});