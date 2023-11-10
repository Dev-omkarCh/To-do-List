const user = localStorage.getItem("User")||'';
const nameInput = document.querySelector(".nameInput");

if(localStorage.getItem("User") !== null){
    nameInput.value = user;
};

nameInput.addEventListener("blur",()=>{
    let userName = nameInput.value;
    localStorage.setItem("User",userName);
});