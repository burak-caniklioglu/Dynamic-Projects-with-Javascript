
let proPainel = document.querySelector(".products")


let subTotal = document.querySelector("#cart-subtotal").lastElementChild
let tax = document.querySelector("#cart-tax p:nth-child(2)")
let ship = document.querySelector("#cart-shipping").children[1]
let total = document.querySelector("#cart-total p:nth-child(2)")
let form = document.querySelector("#customer-form")
let button = document.querySelector("button[type='submit']")
let namePro = document.querySelector("#name")
let price = document.querySelector("#price")
let proNumber = document.querySelector("#quantity")


const createProduct = (proName, proPrice, proQuantity) => {
    return `<div class="product">
    <img src="img/photo1.png" alt="">
    <div class="product-info">
        <h2>${proName}</h2>
        <div class="product-price">
            <p><strong>${proPrice}</strong> </p>
        </div>
        <div class="quantity-controller">
            <button>
                <i class="fas fa-minus"></i>
            </button>
            <p id="product-quantity">${proQuantity}</p> 
            <button>
                <i class="fas fa-plus"></i>
            </button>
        </div>
        <div class="product-removal">
            <button class="remove-product">
                Remove
            </button>
        </div>
        <div class="product-line-price">${proPrice * proQuantity}</div>
    </div>
</div>    
    `
} 


button.addEventListener("click", (e)=>{
    e.preventDefault()
    

    if(namePro.value && !isNaN(price.value) && !isNaN(proNumber.value)){
        proPainel.innerHTML += createProduct(namePro.value,price.value, proNumber.value)
        form.reset();
        productsFunc()
        allTotal()
    }else{
        alert("Please enter a product")
    }
    

})


let allTotal = () => {
    let single = document.querySelectorAll(".product-line-price")
    let sum = 0
    single.forEach(item => sum += +item.innerText)
    subTotal.innerText= sum.toFixed(2)
    tax.innerText = (sum * 0.18).toFixed(2)
    ship.innerText = subTotal.innerText == 0 || subTotal.innerText > 299 ? 0 : "15.00";
    total.innerText = (+ship.innerText + sum * 1.18).toFixed(2) 
    
}
allTotal()

let productsFunc = () =>{
    let products = document.querySelectorAll(".product")
    products.forEach(product => {
        product.addEventListener("click", (e) => {
            let quantity = product.querySelector("#product-quantity")
            let amountOnes = product.querySelector("strong").innerText
            let proTotalAmount = product.querySelector(".product-line-price")
            if( e.target.classList.contains("fa-plus")){
                 quantity.innerText++
                 
            }
            if(e.target.classList.contains("fa-minus")){
                 if(quantity.innerText > 1){
                     quantity.innerText--
                     
                  }else{
                     product.remove()
                     
                  }
            }
            proTotalAmount.innerText = (amountOnes * quantity.innerText).toFixed(2) 
            if(e.target.classList.contains("remove-product")){
                product.remove()
            }
            allTotal()
         })
         
    })
}

productsFunc()




// let products = document.querySelector(".products");
// let quantity = document.querySelector(".quantity-controller");
// let removeBtn = document.querySelectorAll(".remove-product");
// let plus = document.querySelectorAll(".fa-plus")
// let minus = document.querySelectorAll(".fa-minus")
// let subTotalAmount = document.querySelector("#cart-subtotal")
// let tax = document.querySelector("#cart-tax")
// let ship = document.querySelector("#cart-shipping")
// ship.innerText = 15

// let total = document.querySelector("#cart-total")
// //functions

// let increaseAmount = (num) =>{
//     console.log((num))
//     let newAmount = num.parentElement.previousElementSibling;
//     console.log(newAmount)
//     newAmount.innerText = (Number(newAmount.innerText) + 1)
    
//     let productTotal = num.parentElement.parentElement.parentElement.querySelector(".product-line-price")
//     let temp1 =  num.parentElement.parentElement.parentElement.querySelector("strong").innerText
//     console.log(temp1)
//     productTotal.innerText = (temp1 * Number(newAmount.innerText)).toFixed(2)
// }   
// let decreaseAmount = (num) =>{
//     let newAmount = num.parentElement.parentElement.querySelector("#product-quantity")
//     newAmount.innerText = (Number(newAmount.innerText) -1)
//     if(Number(newAmount.innerText) == 0){
//         let removeAmount = num.parentElement.parentElement.parentElement.parentElement
//         removeAmount.parentElement.removeChild(removeAmount)
//     }
//     let productTotal = num.parentElement.parentElement.parentElement.querySelector(".product-line-price")
//     let temp1 =  num.parentElement.parentElement.parentElement.querySelector("strong").innerText
    
//     productTotal.innerText = (temp1 * Number(newAmount.innerText)).toFixed(2)
    
    
// }

// let removeItem = (num) => {
//     let removeAmount = num.parentElement.parentElement.parentElement
//     removeAmount.parentNode.removeChild(removeAmount)
// }

// let checkOut = ()=> {
    

//     let subTotal = document.querySelectorAll(".product-line-price")
//     let sum = 0
//     subTotal.forEach(amount => sum += Number(amount.innerText))
//     subTotalAmount.innerText = sum.toFixed(2)
//     tax.innerText = (sum * 0.18).toFixed(2)
//     if(subTotalAmount.innerText == 0){
//         ship.innerText = 0
//     }
//     total.innerText = (sum + Number(tax.innerText) + Number(ship.innerText)).toFixed(2)
    
    
// }
// checkOut()
// //events

// plus.forEach(item => {
//     item.parentElement.addEventListener("click", (e)=> {
//         console.log(item.parentElement)
//         increaseAmount(e.target)
//         checkOut()
    
//     })
// })

// minus.forEach(item => {
//     item.parentElement.addEventListener("click", (e)=> {
        
//         decreaseAmount(e.target)
//         checkOut()
    
//     })
// })


// removeBtn.forEach(item => {
//     item.addEventListener("click", (e)=> {
//         removeItem(e.target)
//         checkOut()
    
//     })
// }) 
