
// tags
let guess = document.querySelector("input[type='number']")
let button = document.querySelector(".check")
let larger = document.querySelector(".larger")
let smaller = document.querySelector(".smaller")
let result = document.querySelector("#result")
let congra = document.querySelectorAll(".cong")
larger.lastElementChild.style.visibility = "hidden";
larger.firstElementChild.style.visibility = "hidden";
smaller.lastElementChild.style.visibility = "hidden";
smaller.firstElementChild.style.visibility = "hidden";


console.log(congra[0]);

//
let randomNum = (Math.trunc(Math.random()*100+1))
console.log(randomNum);

button.addEventListener("click", ()=>{
    

   if(Number(guess.value) > randomNum){
        console.log(randomNum , ">");
        console.log(guess.value, ">");

        larger.lastElementChild.style.visibility = "hidden";
        larger.firstElementChild.style.visibility = "hidden";
        smaller.lastElementChild.style.visibility = "visible";
        smaller.firstElementChild.style.visibility = "visible";
        result.innerHTML = +result.innerHTML + 1
        guess.value = ""

    }else if(Number(guess.value) < randomNum){
    
        console.log(randomNum, "<");
        console.log(guess.value, "<");

        larger.lastElementChild.style.visibility = "visible";
        larger.firstElementChild.style.visibility = "visible";
        smaller.lastElementChild.style.visibility = "hidden";
        smaller.firstElementChild.style.visibility = "hidden";
        result.innerHTML = +result.innerHTML + 1
        guess.value = ""

    }else if(guess.value == randomNum ){

        console.log(randomNum , "=")
        console.log(guess.value);


        larger.lastElementChild.style.visibility = "hidden";
        larger.firstElementChild.style.visibility = "hidden";
        smaller.lastElementChild.style.visibility = "hidden";
        smaller.firstElementChild.style.visibility = "hidden";
        congra[0].style.visibility = "visible"
        congra[1].style.visibility = "visible"
        result.innerHTML = +result.innerHTML + 1
        guess.value = ""
        randomNum = (Math.trunc(Math.random()*100+1))
    }
    
    
})