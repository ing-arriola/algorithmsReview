const buttonHello=document.getElementById('hello')
const buttonCheck=document.getElementById('app2')
const buttonSum=document.getElementById('sum')
const buttonSum3and5=document.getElementById('sum3and5')
const buttonSumOrMul=document.getElementById('sumOrMul')
const buttonTables=document.getElementById('tables')
const buttonGuess=document.getElementById('guess')

const view=document.getElementById('app')

buttonHello.addEventListener("click",sayHello)
buttonCheck.addEventListener("click",checkUser)
buttonSum.addEventListener("click",sumUntilN)
buttonSum3and5.addEventListener("click",sumUntilN3and5)
buttonSumOrMul.addEventListener("click",sumOrMul)
buttonTables.addEventListener("click",tables)
buttonGuess.addEventListener("click",guessGame)

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

function getNumberFromUser(msg){
    let number=prompt(msg)
    return parseInt(number)
    
}

function sumUntilN(){
    number=getNumberFromUser("Enter a number")
    total=sum(number)
    view.innerHTML=`you typed ${number} and the count is: ${total}`
}

function sum(num){
    let res=0
    for(let i=0;i<=num;i++) res+=i
return res
}

function sumUntilN3and5(){
    let number=getNumberFromUser("Enter a number")
    let total=0
    for(let i=0;i<=number;i++){
        if(i%3 === 0 || i%5===0){
          total+=i
      }
    }
    view.innerHTML=`you typed ${number} and the count is: ${total}`
 }

 function sumOrMul(){
    let number3,option
    number3=getNumberFromUser("Enter a number")
    option=getNumberFromUser("Enter 1 for SUM and 2 for PRODUCT")
    let ans
    if (option===1){
        ans=`El resultado de la suma es: ${sum(number3)}`
    }else if(option===2){
        ans=`El resultado del producto es: ${product(number3)}`
    }else{
        ans="Opcion no valida"
    }
    view.innerHTML=ans
 }

 function product(num){
    let res=1
        for(let i=1;i<=num;i++) res*=i
   return res
}

function tables(){
    let numbers=[1,2,3,4,5,6,7,8,9,10,11,12]
    for(let i=0;i<numbers.length;i++){
        let table=document.createElement("ul")    
    for(let j=1;j<=10;j++){
        let elementOfTable=document.createElement("li")
        elementOfTable.innerHTML=`${numbers[i]} * ${j}= ${numbers[i]*j}`
        table.appendChild(elementOfTable) 
    }
        view.appendChild(table)
    }
}

function guessGame(){
    let repeat=true
    let trying
    let secret=65
    let attempts=0
    while(repeat){
        trying=getNumberFromUser("Guess the secret number")
        attempts+=1
        if(trying===secret){
            alert(`You guessed the number in ${attempts} attempts`)
            repeat=false
        }else if(trying>secret){
            alert("Too High")
        }else{
            alert("Too Small")
        }

    }
}