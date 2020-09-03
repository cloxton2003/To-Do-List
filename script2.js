const button = document.getElementById("enter");
const input = document.getElementById("userInput");
const list = document.getElementsByTagName("ul")[0];

button.addEventListener("click", buttonClicked = () => {
    let x = input.value.length;
    if (x > 0) {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        input.value = "";
        createASickBtn(li);
    }
});

createASickBtn = (li) => {
	    let btn = document.createElement("button");
	    btn.classList.add("myButton");
        li.appendChild(btn);
        let btnText = document.createTextNode("Delete");
        btn.appendChild(btnText);
        btn.onclick = delItem;
}

delItem = (y) => {
	y.target.parentNode.remove();
}

list.onclick = elementClicked = (x) => {
   	let y = x.target;
    y.classList.toggle("done");
} 
