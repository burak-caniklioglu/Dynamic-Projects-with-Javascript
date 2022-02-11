// Button objects
let firstBtn = document.querySelector(".first-btn")
let reset = document.querySelector(".reset")
let secondBtn =document.querySelector(".second-btn")

// input Area
let input = document.querySelector("input[type='number']")

// Score Area Objects
let first = document.querySelector(".first")
let second = document.querySelector(".second")


// first button event
firstBtn.addEventListener('click', (e)=>{
    if(Number(first.innerText)<Number(input.value)){
        first.innerText = Number(first.innerText)+1
    }

    if(Number(first.innerText)==Number(input.value) && Number(first.innerText)>=1){
        first.style.color = "green"
        second.style.color = "red"
        firstBtn.disabled = true
        secondBtn.disabled =true
    }
})


// second button event
secondBtn.addEventListener('click', (e)=>{    
    if(Number(second.innerText)<Number(input.value)){
        second.innerText = Number(second.innerText)+1
    }
    if(Number(second.innerText)==Number(input.value) && Number(second.innerText)>=1){
        second.style.color = "green"
        first.style.color = "red"
        firstBtn.disabled = true
        secondBtn.disabled =true
    }
    
})

// reset button event
reset.addEventListener("click", (e) => {
    input.value = ""
    first.innerText = "0"
    second.innerText = "0"
    first.style.color = "black"
    second.style.color = "black"
    firstBtn.disabled = false
    secondBtn.disabled =false
})




