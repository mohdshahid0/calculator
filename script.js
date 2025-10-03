const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let input = "";

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === "C") {
            input = "";
            display.value = "";
        } else if (value === "←") {
            input = input.slice(0, -1);
            display.value = input;
        } else if (value === "=") {
            try {
                let result = input.replace(/×/g, '*').replace(/÷/g, '/');
                input = eval(result).toString();
                display.value = input;
            } catch {
                display.value = "Error";
                input = "";
            }
        } else {
            input += value;
            display.value = input;
        }
    });
});
