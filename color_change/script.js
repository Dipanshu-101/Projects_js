let buttons = document.querySelectorAll(".button");
var body = document.querySelector("body");

buttons.forEach(function (button) {
console.log("button")
button.addEventListener('click' ,function(e){
console.log(e)

})
}
);

