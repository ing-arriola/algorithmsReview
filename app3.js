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
    console.log("i'm here")    

}