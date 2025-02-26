var arr = [
    { dp: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { dp: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1515734674582-29010bb37906?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { dp: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: 'https://images.unsplash.com/photo-1529230815964-592d9b61876f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

var cluster = '';
arr.forEach(function (elem, idx) {
    cluster += `<div class="Story">
                    <img id="${idx}" src="${elem.dp}" alt="">
                </div>`;
});

document.querySelector('#bar').innerHTML = cluster;
var grow=0;

document.querySelector('#bar').addEventListener('click', function (det) {
    document.querySelector('#full').style.display = 'block';
    var b = document.querySelector('#full').style.backgroundImage = `url(${arr[det.target.id].img})`;
    var a = document.querySelector('#bar')
    a.style.display="none"
    
    setTimeout(function () {
        document.querySelector('#full').style.display = 'none';
        a.style.display =  "block"
    }, 3000)
    
    if(grow<100){
        setInterval(function () {
            document.querySelector('#growth').style.width=`${grow++}%`
        },30)
    }
    else{
        grow=0;
    }
});
