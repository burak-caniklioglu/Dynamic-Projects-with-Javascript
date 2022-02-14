let loading = document.querySelector(".loading");
let container = document.querySelector(".container")

window.addEventListener("load", () => {
    loading.style.display = "block";
    document.body.style.backgroundSize = "35rem";
    document.body.style.backgroundImage = "url(../images/lootery.png)"
    container.style.display = "none"
    
    setTimeout(() => {
    loading.style.display = "none";
    document.body.style.backgroundImage = "none"
    document.body.style.background = "linear-gradient(to right, rgb(247, 236, 230),#fefefe  ,rgb(247, 236, 230) )"
    document.body.style.backgroundSize = "cover"
    container.style.display = "block"},1500)
})


let circles = document.querySelectorAll(".circle")
let circle1 = document.querySelector(".circle1")
let circle2 = document.querySelector(".circle2")
let circle3 = document.querySelector(".circle3")
let circle4 = document.querySelector(".circle4")
let circle5 = document.querySelector(".circle5")
let circle6 = document.querySelector(".circle6")
let circle7 = document.querySelector(".circle7")
let circle8 = document.querySelector(".circle8")
let inputs = document.querySelectorAll(".input")
let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let input3 = document.querySelector(".input3")
let input4 = document.querySelector(".input4")
let input5 = document.querySelector(".input5")
let input6 = document.querySelector(".input6")
let input7 = document.querySelector(".input7")
let input8 = document.querySelector(".input8")

let run = document.querySelector("#run")
let again = document.querySelector("#again")




let nums = [];

let luckyNumbers = ()=>{
    
    i = 0
    
    while(i<7){
        let num = Math.floor(Math.random() * 90) + 1
        if (nums.includes(num)){
            continue
        }else{
            nums.push(num)
            i++
        } 
        
    }
    let num = Math.floor(Math.random() * 90) + 1
    nums.push(num)
    console.log(nums);
    return nums
}
luckyNumbers()

let counter = 0;
let score = document.querySelector("#score")
let congra = document.querySelector("#congra")
let sorry =document.querySelector("#sorry")

run.addEventListener("click", (e) =>{
    // console.log(nums);
    
    for(let i = 0; i< 8; i++){
        circles[i].innerHTML = nums[i]
    }
    
    if(nums.includes(Number(input1.value))){
        input1.style.backgroundColor = "limegreen"
        counter++
    }
    if(nums.includes(Number(input2.value))){
        input2.style.backgroundColor = "limegreen"
        counter++
    }
    if(nums.includes(Number(input3.value))){
        input3.style.backgroundColor = "limegreen"
        counter++
    }
    if(nums.includes(Number(input4.value))){
        input4.style.backgroundColor = "limegreen"
        counter++
    }
    if(nums.includes(Number(input5.value))){
        input5.style.backgroundColor = "limegreen"
        counter++
    }
    if(nums.includes(Number(input6.value))){
        input6.style.backgroundColor = "limegreen"
        counter++
    }
    if(nums.includes(Number(input7.value))){
        input7.style.backgroundColor = "limegreen"
        counter++
    }
    if(nums.includes(Number(input8.value))){
        input8.style.backgroundColor = "limegreen"
        counter++
    }
    nums = []
    score.innerHTML = counter

    if(counter>0){
        congra.style.visibility = "visible"
    }else{
        sorry.style.visibility = "visible"
    }
    e.target.disabled = true
})

again.addEventListener("click",()=>{
    counter = 0
    score.innerHTML = counter
    sorry.style.visibility = "hidden"
    congra.style.visibility = "hidden"
    circle1.innerHTML = "1"
    circle2.innerHTML = "2"
    circle3.innerHTML = "3"
    circle4.innerHTML = "4"
    circle5.innerHTML = "5"
    circle6.innerHTML = "6"
    circle7.innerHTML = ""
    circle8.innerHTML = ""
    let image1 = document.createElement("img")
    image1.setAttribute("src", './images/joker.png')
    circle7.appendChild(image1)
    let image2 = document.createElement("img")
    image2.setAttribute("src", './images/superstar.png')
    circle8.appendChild(image2)
    run.disabled = false
    // nums = []
    input1.value = ""
    input2.value = ""
    input3.value = ""
    input4.value = ""
    input5.value = ""
    input6.value = ""
    input7.value = ""
    input8.value = ""
    input1.style.backgroundColor = "white"
    input2.style.backgroundColor = "white"
    input3.style.backgroundColor = "white"
    input4.style.backgroundColor = "white"
    input5.style.backgroundColor = "white"
    input6.style.backgroundColor = "white"
    input7.style.backgroundColor = "white"
    input8.style.backgroundColor = "white"
    luckyNumbers()
    
    
})


