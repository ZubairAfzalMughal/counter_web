let counter = 0;

let count = document.querySelector("#value");
const btnList = document.querySelectorAll(".btn");
btnList.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const style = e.currentTarget.classList;
        if (style.contains("decrement")) {
            counter--;
        } else if (style.contains("increment")) {
            counter++;
        } else {
            counter = 0;
        }
        if (counter > 0) {
            count.style.color = "green";
        }
        if (counter < 0) {
            count.style.color = "red";

        }
        if (counter === 0) {
            count.style.color = "#222";
        }
        count.textContent = counter;
    });

});