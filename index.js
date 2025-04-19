function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    updateDigit('hour-tens', hours[0]);
    updateDigit('hour-ones', hours[1]);
    updateDigit('minute-tens', minutes[0]);
    updateDigit('minute-ones', minutes[1]);
    updateDigit('second-tens', seconds[0]);
    updateDigit('second-ones', seconds[1]);
}

function updateDigit(id, newDigit) {
    const digitElement = document.getElementById(id);
    const currentDigit = digitElement.querySelector('span').textContent;

    if (currentDigit !== newDigit) {
        const newSpan = document.createElement('span');
        newSpan.textContent = newDigit;

    
        newSpan.classList.add('flip');
        digitElement.appendChild(newSpan);

        setTimeout(() => {
            digitElement.querySelector('span').remove();
        }, 500); 
    }
}

setInterval(updateClock, 1000);
updateClock();
