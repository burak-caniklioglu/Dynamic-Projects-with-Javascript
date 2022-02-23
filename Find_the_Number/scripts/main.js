
// tags
let guess = document.querySelector("input[type='number']")
let button = document.querySelector(".check")
let larger = document.querySelector(".larger")
let smaller = document.querySelector(".smaller")
let result = document.querySelector("#result")
let congra = document.querySelectorAll(".cong")
let again = document.querySelector(".again")
let tried = document.querySelector(".tried")
larger.lastElementChild.style.visibility = "hidden";
larger.firstElementChild.style.visibility = "hidden";
smaller.lastElementChild.style.visibility = "hidden";
smaller.firstElementChild.style.visibility = "hidden";



//
let randomNum = (Math.trunc(Math.random()*100+1))
console.log(randomNum);

button.addEventListener("click", ()=>{
    tried.style.visibility = "visible"

   if(Number(guess.value) > randomNum){
        console.log(randomNum , ">");
        console.log(guess.value, ">");

        larger.lastElementChild.style.visibility = "hidden";
        larger.firstElementChild.style.visibility = "hidden";
        smaller.lastElementChild.style.visibility = "visible";
        smaller.firstElementChild.style.visibility = "visible";
        let number = document.createElement("div")
        number.style.paddingRight = "1rem"
        number.innerHTML = guess.value
        tried.appendChild(number)
        result.innerHTML = +result.innerHTML + 1
        guess.value = ""

    }else if(Number(guess.value) < randomNum && (guess.value)){
    
        console.log(randomNum, "<");
        console.log(guess.value, "<");
        
        larger.lastElementChild.style.visibility = "visible";
        larger.firstElementChild.style.visibility = "visible";
        smaller.lastElementChild.style.visibility = "hidden";
        smaller.firstElementChild.style.visibility = "hidden";
        let number = document.createElement("div")
        number.style.paddingRight = "1rem"
        number.innerHTML = guess.value
        tried.appendChild(number)
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
        again.style.visibility = "visible"
        let number = document.createElement("div")
        number.innerHTML = guess.value
        tried.appendChild(number)
        button.disabled = true
        result.innerHTML = +result.innerHTML + 1
        guess.value = ""
        randomNum = (Math.trunc(Math.random()*100+1))
    }
    
    
})


again.addEventListener("click", ()=>{
    result.innerHTML = "0"
    congra[0].style.visibility = "hidden"
    congra[1].style.visibility = "hidden"
    again.style.visibility = "hidden"
    button.disabled = false
    tried.innerHTML =""
    tried.style.visibility = "hidden"

})

