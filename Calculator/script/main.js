const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
let clock = () => {
  hour.innerHTML = new Date().getHours().toString().padStart(2, "0");
  minute.innerHTML = new Date().getMinutes().toString().padStart(2, "0");
};

setInterval(clock, 1000);

//Buttons
let one = document.querySelector(".number1");
let two = document.querySelector(".number2");
let three = document.querySelector(".number3");
let four = document.querySelector(".number4");
let five = document.querySelector(".number5");
let six = document.querySelector(".number6");
let seven = document.querySelector(".number7");
let eight = document.querySelector(".number8");
let nine = document.querySelector(".number9");
let zero = document.querySelector(".number0");
let ac = document.querySelector(".ac");
let pulsub = document.querySelector(".pulsub");
let mod = document.querySelector(".mod");
let divide = document.querySelector(".divide");
let multiple = document.querySelector(".multiple");
let minus = document.querySelector(".minus");
let pulse = document.querySelector(".pulse");
let equal = document.querySelector(".equal");
let dot = document.querySelector(".dot");

// screen
let screen = document.querySelector("#result");
screen.innerHTML = "";

//for assign
let temp1, num1, operand, result, flag,a;

//numbers' events
one.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + one.innerHTML;
    temp1 = Number(screen.innerHTML);
});

two.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + two.innerHTML;
  temp1 = Number(screen.innerHTML);
});

three.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + three.innerHTML;
  temp1 = Number(screen.innerHTML);
});

four.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + four.innerHTML;
  temp1 = Number(screen.innerHTML);
});

five.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + five.innerHTML;
    temp1 = Number(screen.innerHTML);
  });

six.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + six.innerHTML;
  temp1 = Number(screen.innerHTML);
});

seven.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + seven.innerHTML;
    temp1 = Number(screen.innerHTML);
  });

eight.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + eight.innerHTML;
  temp1 = Number(screen.innerHTML);
});

nine.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + nine.innerHTML;
  temp1 = Number(screen.innerHTML);
});

zero.addEventListener("click", () => {
    if(flag){
        screen.innerHTML = ""
    }
    flag = false;
  screen.innerHTML = screen.innerHTML + zero.innerHTML;
  temp1 = Number(screen.innerHTML);
});




pulse.addEventListener("click", () => {
  num1 = screen.innerHTML;
  temp1 = "";
  screen.innerHTML = "";
  operand = "+";
});

minus.addEventListener("click", () => {
    num1 = screen.innerHTML;
    temp1 = "";
    screen.innerHTML = "";
    operand = "-";
  });

multiple.addEventListener("click", () => {
    num1 = screen.innerHTML;
    temp1 = "";
    screen.innerHTML = "";
    operand = "*";
  });

divide.addEventListener("click", () => {
    num1 = screen.innerHTML;
    temp1 = "";
    screen.innerHTML = "";
    operand = "/";
  });

mod.addEventListener("click", () => {
    num1 = screen.innerHTML;
    temp1 = "";
    screen.innerHTML = "";
    operand = "%";
  });



equal.addEventListener("click", () => {
    
  switch (operand) {
    case "+":
        result = Number(num1) + Number(temp1);
        screen.innerHTML = result;
        flag = true;
      break;
    case "-":
        result = Number(num1) - Number(temp1);
        screen.innerHTML = result;
        flag = true;
        break;
    case "*":
        result = Number(num1) * Number(temp1);
        screen.innerHTML = result;
        flag = true;
        break;
    case "/":
        if(Number(temp1) == 0){
            result = "∞"
        }else{
            result = (Number(num1) / Number(temp1)).toFixed(2);
        }      
        screen.innerHTML = result;
        flag = true;
        break;
    case "%":
        result = Number(num1) % Number(temp1);
        screen.innerHTML = result;
        flag = true;
        break;
  }
});

pulsub.addEventListener("click", () => {
    num1 = screen.innerHTML;
    screen.innerHTML = (Number(screen.innerHTML) * -1)
    temp1 = "";
    flag = true;
    
  });

ac.addEventListener("click", () => {
    screen.innerHTML = ""
    temp1 = ""
    num1 = ""
    result = ""
})



