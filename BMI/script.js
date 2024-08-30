var form = document.querySelector('form');
form.addEventListener('submit' , function(e){
e.preventDefault()
let height = parseInt(document.querySelector('#height').value);
let weight = parseInt(document.querySelector('#weight').value);
let results = document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height) ){
    results.innerHTML = `Please give a valid height ${height}`}

else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`
}
else{ const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;
}
}
)


// var form = document.querySelector('form');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     let height = parseInt(document.querySelector('#height').value);
//     let weight = parseInt(document.querySelector('#weight').value);
//     let results = document.querySelector('#results');

//     if (isNaN(height) || height <= 0) {
//         results.innerHTML = `Please give a valid height: ${height}`;
//     } else if (isNaN(weight) || weight <= 0) {
//         results.innerHTML = `Please give a valid weight: ${weight}`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         results.innerHTML = `<span>${bmi}</span>`;
//     }
// });
