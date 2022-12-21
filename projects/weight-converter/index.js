const form = document.querySelector('form');


//add an event listener to the form

form.addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.querySelector('input');
    let results = document.querySelector('span');
    let poundsToKG;

    if ((input.value <= 0) || (isNaN(input.value))){
        results.classList.add('error');
        results.innerHTML = "<p>Please enter a value number!</p>"
        setTimeout(function(){
            results.innerHTML = '';
            
            results.classList.remove('error');
        }, 2000)
        input.value = '';
    } else {
        poundsToKG = Number(input.value) / 2.2;
        results.classList.add('no-error');
        results.innerHTML = `${poundsToKG.toFixed(2)}`;
        setTimeout(function(){
            results.innerHTML = '';
            input.value = '';
            results.classList.remove('no-error');
        }, 10000)
        
    }
    
    
})
