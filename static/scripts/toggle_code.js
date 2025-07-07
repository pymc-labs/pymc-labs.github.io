const toggle_buttons = document.getElementsByClassName('btn-code-toggle')

Array.from(toggle_buttons).forEach(
    el => {
        el.innerText = '+ Show code';
        el.addEventListener('click', () => {
            if (el.classList.contains("collapsed")) {
                el.innerText = '- Hide code';
            } else {
                el.innerText = '+ Show code';
            }
        });
    }
)
