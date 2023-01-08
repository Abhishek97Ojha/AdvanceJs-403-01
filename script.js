document.addEventListener("keypress",(event)=>{
    let keyName = document.getElementById("keyName");
    console.log(event);
    let key = document.createElement("span");
    keyName.innerHTML = `You pressed ` ;
    keyName.appendChild(key);
    key.innerHTML =  event.key;
    key.style.color = "green";
    key.style.marginLeft = "5px";
    // console.log(event.key);
    let code = document.getElementById("code");
    code.innerText =event.charCode;
    code.style.color = "green";
    code.style.boxShadow = "0px 5px 10px 0px rgb(0,0,0,0.3)";
});