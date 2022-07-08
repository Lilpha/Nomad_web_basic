const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";





function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}
const savedUsername = localStorage.getItem(USERNAME_KEY); 

if (savedUsername === null ){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
     loginForm.addEventListener("submit",onLoginSubmit); 
     //초반에 왜 hidden을 remove하고 addEventLisner을 추가하는가?
     //이유는 이미 앞에서 둘다 hidden class를 추가 해 두어서 기본상태에는 form에 hidden이 없어야 한다.
     //또한 아무것도 없을때는 EventListner을 넣어서 이벤트를 준비하고 있어야함
}
else{ 
    paintGreeting(savedUsername);
  
}