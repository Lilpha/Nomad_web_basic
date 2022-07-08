const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function deleteToDo(event){
const li = event.target.parentNode;
li.remove();
toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //기본의 li.id는 string형식이기때문에 parseint 를 해준다. 
//toDos 배열을 새로운 모양으로 다시만듭니다.
//필터 (인수 toDo) =>(조건)) 인수로 들어오는 toDo의 id가 내가 target로 선택한 li의 id가 아닐경우 == false를 반환해서 기존의 toDos에서 제거한다.
saveToDos();//위 목록에서 삭제 후에 다시 원소들을 string형태로 바꾸어줌.
}
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}



function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    li.id = newTodo.id;  //생성될 li의 id는 만들어진 시간의 정보로 합니다.
    span.innerText=newTodo.text;
    toDoList.appendChild(li);
    }


function handleToDoList(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj ={
        text : newTodo, id : Date.now()
    }//기존에는 여기서 그저 newTodo를 입력했지만 시간 값이 필요해서 새로운 object, newTodoObj을 만들어서 text와 time을 가지게 했다.
    toDos.push(newTodoObj);//이제는 newTodoObj을 push해줌
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoList);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    //보통 toDos는 공백으로 시작하게 되는데 만약 savedToDos에 정보가 있을때에는 parsedToDos(savedToDos를 array화 시킨것) 을 toDos에 넣음으로서 
    //다음에 자료를 넣을때 비우고 새로이 넣는 것이 아니라 자료를 추가하는 형식이다,
    parsedToDos.forEach(paintToDo);
    //pardedToDos는  savedToDos의 String을 JSON.parse를 통해 array로 바꾼 배열임.
    //배열의 각 객체(forEach)마다 sayHello라는 함수를 실햄함.
}