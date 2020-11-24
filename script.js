const screen = document.querySelector("#screen");
const result = document.querySelector("#result");
const clear = document.querySelector("#clear");
const box = document.querySelectorAll(".box");
screen.textContent = "";
box.forEach(element => {
    element.addEventListener("click", () => {
        if (screen.textContent.length < 25) {
            screen.textContent += element.textContent
        }
    })
});
result.addEventListener("click", () => {
    let x = screen.textContent.replaceAll("x", "*").replaceAll("÷", "/").replaceAll("√", "Math.sqrt").replaceAll("a,y", "Math.pow").replaceAll("sin", "Math.sin").replaceAll("cos", "Math.cos").replaceAll("tan", "Math.tan").replaceAll("π", "Math.PI");
    try { screen.textContent = eval(x) } catch { screen.textContent = "Wrong operation" }
})
clear.addEventListener("click", () => { screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1) })
clear.addEventListener("dblclick", () => { screen.textContent = "" })