let input = document.querySelector("input[type='text']")
let button = document.querySelector("#generate")

let table =document.querySelector("tbody") 


button.addEventListener("click", (e)=>{
    let fav = input.value
    fav = fav.split("',")
    for(let  i=0 ; i<fav.length ; i++){
        let row = document.createElement("tr")
        table.appendChild(row)

        
        let rowArr = fav[i].trim().split(" ") 
        console.log(rowArr)
        
        for(let j = 0; j<6; j++){
            let td= document.createElement("td")

            console.log(rowArr[j])


            if (rowArr[j].length<=1) {
                continue
              } else {
                 


                  td.appendChild(document.createTextNode(rowArr[j].match(/[A-z0-9-]+/gi)));
                 row.appendChild(td);
              }
        }
    }
    

})

input.addEventListener("click",(e)=>{
    input.value = ""
})