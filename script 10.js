var arr = [
    { name: 'Harsh Sharma', img: 'https://images.unsplash.com/photo-1489980478712-2ab535aa775f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', status: 'stranger' },
    { name: 'Prashik', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', status: 'stranger' },
    { name: 'Rohit', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', status: 'stranger' }

]
function print() {
    var cluster = '';
    arr.forEach(function (val, index) {
        cluster += `  <div class="card">
            <div class="img">
                <img src="${val.img}">
            </div>
            <h4>${val.name}</h4>
            <h5 id='${val.status}'>${val.status}</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit?</p>
            <button class=${val.status==='stranger'?'blue':'red'} id='${index}'>${val.status === 'stranger' ? 'Add Friends' : 'Remove Friends'}</button>
        </div>`
    })
    document.querySelector('#main').innerHTML = cluster;
}
print();


document.querySelector('#main').addEventListener('click', function (detais) {
    arr[detais.target.id].status = 'Friends';
    print()

})