const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const list = document.querySelector("ul");

buttonClicked = () => {
    let x = input.value.length;
    if (x > 0) {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value = "";
    }
}

list.onclick = elementClicked = (param1) => {
    const listItem = param1.target;
    listItem.classList.toggle("done");
} 

button.addEventListener("click", buttonClicked);