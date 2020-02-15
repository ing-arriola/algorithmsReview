const buttonHello=document.getElementById('hello')
const buttonCheck=document.getElementById('app2')
const buttonSum=document.getElementById('sum')
const view=document.getElementById('app')

buttonHello.addEventListener("click",sayHello)
buttonCheck.addEventListener("click",checkUser)
buttonSum.addEventListener("click",sumUntilN)

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

function sumUntilN(){
    let number=prompt("Enter a number")
    number=parseInt(number)
    var total=0
    total=sum(number)
    view.innerHTML=`you typed ${number} and the count is: ${total}`
}

function sum(num){
    let res=0
    for(let i=0;i<=num;i++) res+=i
return res
}

