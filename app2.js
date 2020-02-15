const buttonLargest=document.getElementById('largest')
const buttonReverse=document.getElementById('reverseArray')


const viewTwo=document.getElementById('app')

buttonLargest.addEventListener("click",largest)

buttonReverse.addEventListener("click",reverseArray)

function largest(){
    let arrayNumbers=[15,84,97,100,1,4,6,98,900,123,125,36,74,80,11]

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
    
    