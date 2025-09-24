let input = document.getElementById("input");
let btn = document.getElementById("btn");

let minus = document.getElementById("minus");
let counter = document.getElementById("counter");
let plus = document.getElementById("plus");

let col = document.getElementById("col");


btn.addEventListener("click", () => {
     counter.textContent = input.value
    if(input.value > 0 ){
           counter.textContent = input.value

    } else{
        alert("Inputga yoz");
    }
});

col.addEventListener("input", (e) => {
         console.log(e.target.value);

         counter.style.color = e.target.value;
});



plus.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent) + 1;
})


minus.addEventListener("click", () => {
    counter.textContent = parseInt(counter.textContent) - 1;
})