const buttonHello=document.getElementById('hello')
const buttonCheck=document.getElementById('app2')
const buttonSum=document.getElementById('sum')
const buttonSum3and5=document.getElementById('sum3and5')

const view=document.getElementById('app')

buttonHello.addEventListener("click",sayHello)
buttonCheck.addEventListener("click",checkUser)
buttonSum.addEventListener("click",sumUntilN)
buttonSum3and5.addEventListener("click",sumUntilN3and5)

function sayHello(){
    let message="Hello World"
    view.innerHTML=message
}

function checkUser(){
    console.log("dentre")
	let name=prompt("Write your nanme: ")	
    if (name === "bob" || name === "alice"){
        view.innerHTML=`Hello ${name}`
    }else{
        view.innerHTML="Not allowed user"
    }
}

function getNumberFromUser(){
    let number=prompt("Enter a number")
    return parseInt(number)
    
}

function sumUntilN(){
    number=getNumberFromUser()
    total=sum(number)
    view.innerHTML=`you typed ${number} and the count is: ${total}`
}

function sum(num){
    let res=0
    for(let i=0;i<=num;i++) res+=i
return res
}

function sumUntilN3and5(){
    let number=getNumberFromUser()
    let total=0
    for(let i=0;i<=number;i++){
        if(i%3 === 0 || i%5===0){
          total+=i
      }
    }
    view.innerHTML=`you typed ${number} and the count is: ${total}`
 }
