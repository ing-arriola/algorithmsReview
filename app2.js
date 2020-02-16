const buttonLargest=document.getElementById('largest')
const buttonReverse=document.getElementById('reverseArray')
const buttonCheckElement=document.getElementById('checkElement')
const buttonOddPositions=document.getElementById('OddPositions') 
const buttonRunningTotal=document.getElementById('runningTotal')
const buttonPalindrome=document.getElementById('palindrome')
const buttonDecideSum=document.getElementById('decide')
const buttonSquares=document.getElementById('squares')
const buttonConcatenates=document.getElementById('concatenates')
const viewTwo=document.getElementById('app')

buttonLargest.addEventListener("click",largest)
buttonReverse.addEventListener("click",reverseArray)
buttonCheckElement.addEventListener("click",checkElement)
buttonOddPositions.addEventListener("click",OddPositions)
buttonRunningTotal.addEventListener("click",runningTotal)
buttonPalindrome.addEventListener("click",palindrome)
buttonDecideSum.addEventListener("click",decide)
buttonSquares.addEventListener("click",squares)
buttonConcatenates.addEventListener("click",callConcat)


const arrayNumbers=[15,84,97,100,1,4,6,98,900,123,125,36,74,80,11]
const arrayToSum=[1,2,3,4,5,6,7,8,9,10]

function largest(){
    viewTwo.innerHTML=`The largest number in [${arrayNumbers}] is: 
        ${arrayNumbers.reduce( 
        (prevLargest,currentLarger)=>{
        return (currentLarger>prevLargest) ? currentLarger : prevLargest
    },0)}`

}

function reverseArray(){
    array=[1,2,3,4,5,6,7,8,9]
    let ret = new Array;
    for(let i = array.length-1; i >= 0; i--) {
        ret.push(array[i]);
    }
    viewTwo.innerHTML=`Original array:${array} <br><br>Reverse array is:${ret}`
}

function getNumberFromUser(msg){
    let number=prompt(msg)
    return parseInt(number)
}

function checkElement(){
    let search=getNumberFromUser("Ingrese numero a buscar")
    viewTwo.innerHTML=(arrayNumbers.indexOf(search)>-1 ) ? "Valor Existe" : "Valor no existe"  
}

function OddPositions(){
    let oddNumbers=[]
    arrayNumbers.map((element,index)=>{
        if(index%2===0) {
            oddNumbers.push(element)
        }
    })
    viewTwo.innerHTML=oddNumbers
}

function runningTotal(){
    viewTwo.innerHTML=arrayToSum.reduce((sum,actual)=>{
        return sum+=actual
    })
}

function palindrome(){
    let stringFromUser=prompt("Enter a word to check if is a Palindrome").toLowerCase()
    let reverseString=stringFromUser.split("").reverse().join("")
    viewTwo.innerHTML=(stringFromUser===reverseString)?"Palindrome":"No Palindrome"
}
/* With for loop
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');
*/

function decide(){
    let option=getNumberFromUser("Select betweenn: 1. use while, 2. use For 3. Recursion")
    switch (option){
        case 1:
            viewTwo.innerHTML=runningTotalWithWhile()
            break
        case 2:
            viewTwo.innerHTML=runningTotalWithFor()
            break
        case 3:
            viewTwo.innerHTML=runningTotalWithRecursion(arrayToSum)
            break
    }
}

function runningTotalWithWhile(){
    let i=0
    let total=0
    while(i<arrayToSum.length){
        total+=arrayToSum[i]
        i+=1
    }
    return total
}

function runningTotalWithFor(){
    let total=0
    arrayToSum.forEach(element => {
        total+=element
    });
    return total
}

function runningTotalWithRecursion(array){
    if(array.length==1){
        return array[0]
    }else{
        return array[0]+runningTotalWithRecursion(array.slice(1))
    }

}

//perfect squares, callback is a requirement
function squares (){
    let listOfNumbers=[]
    let listOfSquares=[]
    for (let i =1 ; i <= 20; i++) {
        listOfNumbers.push(i)
    }
    listOfNumbers.forEach((element,index) => {
        listOfSquares[index]=element*element
    });
    viewTwo.innerHTML=`The first 20 perfect squares are: ${listOfSquares}`
}

function callConcat(){
    concatenates([1,2,3,4],[5,6,7])
}

function concatenates(array1,array2){
    let arrayResult=array1.concat(array2)//One line solution
    /*let arrayResult=array1 //For each solution
    array2.forEach(element=>{ 
        arrayResult.push(element)
    })*/
    viewTwo.innerHTML=arrayResult
}