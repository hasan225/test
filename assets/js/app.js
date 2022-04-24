
const inputField =document.querySelector(".input-field");
const numbers =document.querySelectorAll(".num");


numbers.forEach((num)=>{
  num.addEventListener('click',()=>{
    numValue=num.innerHTML
    inputField=numValue
    console.log(inputField.innerHTML=numValue)
  })
})


