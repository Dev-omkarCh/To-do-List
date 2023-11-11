const user = localStorage.getItem("User")||'';
const nameInput = document.querySelector(".nameInput");

if(localStorage.getItem("User") !== null){
    nameInput.value = user;
};

nameInput.addEventListener("blur",()=>{
    let userName = nameInput.value;
    localStorage.setItem("User",userName);
});

const themeop = document.querySelector("#tri1");
const themeDiv = document.querySelector(".theme-bar");
const mode = document.querySelector(".mode");
themeop.addEventListener("click",()=>{
    if(themeDiv.classList.contains("show")){
        themeDiv.classList.remove("show");
    }
    else{
        themeDiv.classList.add("show");        
    }
})