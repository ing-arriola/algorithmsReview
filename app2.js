const buttonlargest=document.getElementById('largest')


const viewTwo=document.getElementById('app')

buttonlargest.addEventListener("click",largest)

function largest(){
    let arrayNumbers=[15,84,97,100,1,4,6,98,900,123,125,36,74,80,11]

    viewTwo.innerHTML=arrayNumbers.reduce(function (prevLargest,currentLarger){
        return (currentLarger>prevLargest) ? currentLarger : prevLargest
    },0)

}