const specialSel=document.getElementById("selectSpecial")
specialSel.addEventListener("change",selectSpecialAction)
viewThree=document.getElementById("app")

function selectSpecialAction(){

switch (specialSel.value) {
    case "search":
        searchPattern()
        break;

    default:
        break;
}

}

const searchPattern=()=>{
    let stringWithPattern="AABAACAADAABAABA"
    let pattern="AABA"
    let posiciones=[]
    for (let i = 0; i < stringWithPattern.length-pattern.length+1; i++) {
        //if (stringWithPattern.substring(i,pattern.length+i)===pattern){
        if(myOwnSubString(stringWithPattern,i,pattern.length+i)===pattern){
            posiciones.push(i)
        }
    }
    viewThree.innerHTML=`Los indices en donde esta el patron son: ${posiciones}`
}

const myOwnSubString=(stringArg,start,end)=>{
    stringArg=stringArg.split("")
    let ans=""
    for (let i = start; i < end; i++) {
        ans+=stringArg[i]
    }
    return ans
}