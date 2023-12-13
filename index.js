let friend = document.querySelector("#p-with-other");
let computer = document.querySelector("#p-with-comp");

friend.addEventListener("click", () => {
    window.location.href = "player.html";
});

computer.addEventListener("click", () => {
    window.location.href = "comp.html";
});