let middleButtons = document.querySelectorAll(".middleButton")
for (let i=0; i<middleButtons.length; i++){
    middleButtons[i].addEventListener("click", ()=>{
        const display = document.querySelector(".display")
        if (display.textContent == 0){
            display.textContent = middleButtons[i].textContent
        }
        else{
            display.textContent = display.textContent + middleButtons[i].textContent
        }
        
    })
}

let ac = document.querySelector("#AC")
ac.addEventListener("click",()=>{
    const display = document.querySelector(".display")
    display.textContent = "0"
})
