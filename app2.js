const buttonLargest=document.getElementById('largest')
const buttonReverse=document.getElementById('reverseArray')
const buttonCheckElement=document.getElementById('checkElement')
const buttonOddPositions=document.getElementById('OddPositions') 
const viewTwo=document.getElementById('app')

buttonLargest.addEventListener("click",largest)
buttonReverse.addEventListener("click",reverseArray)
buttonCheckElement.addEventListener("click",checkElement)
buttonOddPositions.addEventListener("click",OddPositions)

const arrayNumbers=[15,84,97,100,1,4,6,98,900,123,125,36,74,80,11]

function largest(){
    viewTwo.innerHTML=`The largest number in [${arrayNumbers}] is: ${arrayNumbers.reduce(function (prevLargest,currentLarger){
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
    arrayNumbers.map(function(element,index){
        if(index%2===0) {
            oddNumbers.push(element)
        }
    })
    viewTwo.innerHTML=oddNumbers

}
    