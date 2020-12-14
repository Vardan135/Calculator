const screen = document.querySelector("#screen");
const clear = document.querySelector("#clear");

document.querySelectorAll(".box").forEach(e => {
    e.addEventListener("click", () => {
        screen.textContent.length < 23 ? screen.textContent += e.textContent : screen.textContent = "Max Value";
    })
});

document.querySelector("#result").addEventListener("click", () => {
    let result = screen.textContent.replaceAll("x", "*").replaceAll("÷", "/").replaceAll("√", "Math.sqrt").replaceAll("a,y", "Math.pow").replaceAll("sin", "Math.sin").replaceAll("cos", "Math.cos").replaceAll("tan", "Math.tan").replaceAll("π", "Math.PI");
    try { screen.textContent = eval(result) } catch { screen.textContent = "Wrong operation" };
});

clear.addEventListener("click", () => { screen.textContent = screen.textContent.substring(0, screen.textContent.length - 1) });
clear.addEventListener("dblclick", () => { screen.textContent = "" });
