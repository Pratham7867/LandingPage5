let stop = document.querySelector('#stop')
let start = document.querySelector('#start')

const randomcolor = () => {
    let hax = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hax[Math.floor(Math.random() * 16)];
    }
    return color;
}
let interval;
start.addEventListener('click', () => {
    if (!interval) {  
        interval= setInterval(changecolor, 1000)
    }
    function changecolor() {
        document.body.style.backgroundColor = randomcolor();
    }
})

stop.addEventListener('click', () => {
    clearInterval(interval)
    interval=null;
})
