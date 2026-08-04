const container  = document.querySelector(".container")


function createGrid(size) {
    // Clear container
    container.innerHTML = "";
    // Loop size * size times
    for(let i =0 ;i<size *size; i++){
        const div = document.createElement("div");
        div.classList.add("box");
        div.addEventListener("mouseenter",()=>{
            div.style.backgroundColor ="red";
        })
        div.style.height = `${960/size}px`;
        div.style.width  =`${960/size}px`;
        container.append(div);
    }
    
}
const input = document.querySelector("#gridBtn");
input.addEventListener("click",function(){
    let x = prompt("enter the size");
    if(x>100){
        alert("input cant be greater than 100");
    }
    else{
        createGrid(x);
    }
})

createGrid(16);

