document.querySelector("#countdown").style.visibility ="hidden"
document.querySelector("#countdown").style.display ="flex"


let ageCalculator = () => {
  
  
    
    let time = new Date()
    let birthday = document.querySelector('input[type="date"]')
    let DoB = new Date(birthday.value)
    let years = document.querySelector("#years")
    let months = document.querySelector("#months")
    let days = document.querySelector("#days")
    let hours = document.querySelector("#hours")
    let minutes = document.querySelector("#minutes")
    let seconds = document.querySelector("#seconds")
    
    
    yearsNumber = (time.getFullYear()) - (DoB.getFullYear())
    monthsNumber = (time.getMonth()) - (DoB.getMonth())
    daysNumber = (time.getDate()) - (DoB.getDate())
    hoursNumber = (time.getHours()) - (DoB.getHours())
    minutesNumber = (time.getMinutes()) - (DoB.getMinutes())
    secondsNumber = (time.getSeconds()) - (DoB.getSeconds())
    
    
    if(daysNumber < 0){daysNumber += 31, monthsNumber -= 1 }
    if(monthsNumber<0){monthsNumber += 12, yearsNumber -=1}
    if(yearsNumber<0 ){
        
        alert("Wrong Date")
        birthday.value = ""
        
    }else if(isNaN(yearsNumber)){
        document.querySelector("#countdown").style.visibility ="hidden"
    }
    else{
        years.innerText = yearsNumber
        months.innerText = monthsNumber
        days.innerText = daysNumber
        hours.innerText = hoursNumber
        minutes.innerText = minutesNumber
        seconds.innerText = secondsNumber
        document.querySelector("#countdown").style.visibility ="visible"
    }
    
    
    setInterval(ageCalculator,1000)
    }

let snip = document.querySelector("#loading")
snip.style.display = "none"



document.body.style.backgroundImage = "url('https://picsum.photos/680')"

let image = () => {
    
    document.body.style.backgroundImage = "url('https://picsum.photos/1080')"
    
    
}




