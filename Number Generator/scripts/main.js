let wrapper = document.querySelector(".wrapper");
let generate = document.querySelector('#generate');
let input = document.querySelector("input[type='text']")
let alarm = document.querySelector("#alert")
let temp = ()=>{
    alarm.style.visibility ="hidden"
}

generate.addEventListener('click', (e)=>{
    
    if(input.value ==""){
        alarm.innerHTML = "Enter number value on the input field to generate numbers"
        alarm.style.visibility ="visible"
        
        setTimeout(temp,2000)
        
        return
    }else if(isNaN(input.value)){
        alarm.innerHTML = "Input value must be a number"
        alarm.style.visibility ="visible"
        setTimeout(temp,2000)
    }
        

    for(let i= 0;i<=Number(input.value);i++){
        let number = document.createElement("div")
        number.className = "numberly"
        number.style.width= "60px"
        number.style.height="40px"
        number.textContent = i
        number.style.fontSize = "24px"
        number.style.color = "white"
        number.style.margin= "2px"
        number.style.display= "flex"
        number.style.justifyContent= "center"
        number.style.alignItems= "center"
        number.style.backgroundColor= "green"
        wrapper.appendChild(number)

        if(i % 2 == 0){
            number.style.backgroundColor= "limegreen"
        }else{
            number.style.backgroundColor= "gold"
        }

        
    }


    prime()
    
})

let prime = () => {
    let newArray = document.getElementsByClassName("numberly")

    for(let i = 0 ; i<newArray.length; i++){
        let flag = true

        for(let j = 2; j<i ;j++){
            if(i % j == 0){
                flag = false
                break;
            }
        }
        if(i > 1 && flag == true){
            newArray[i].style.backgroundColor = "red"
        }
    }
}



input.addEventListener('click', (e)=>{
    wrapper.innerHTML =""
    input.value = ""
    
})