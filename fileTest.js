const btn = document.querySelector('.adder');
const first = document.querySelector('input[name=first]');
const last = document.querySelector('input[name=last]');
const lister = document.querySelector('.lister');
const message = document.querySelector('.message');
lister.addEventListener('click', getter);
btn.addEventListener('click', adder);

function getter() {
    fetch('http://localhost:3000/people').then(function (rep) {
        return rep.json()
    }).then(function (data) {
        output(data);
    })
}

function output(data) {
    message.innerHTML = "";
    data.forEach(function (el, index) {
        console.log(el);
        let div = document.createElement('div');
        div.innerHTML = `${el.id} <input type="text" value="${el.first}">`;
        div.innerHTML += `<input type="text" value="${el.last}"><button>Update</button>`;
        div.addEventListener('click', function () {
            let temps = div.querySelectorAll('input');
            let updater = div.querySelector('button');
            updater.addEventListener('click', function () {
                updateData(el.id, temps[0].value, temps[1].value);
            })
        })
        message.appendChild(div);
    })
}

function updateData(id, first, last) {
    console.log(id, first, last);
    fetch('http://localhost:3000/people/' + id, {
        method: 'put'
        , body: JSON.stringify({
            first: first
            , last: last
        })
        , headers: {
            "Content-Type": "application/json"
        }
    }).then(function (res) {
        return res.text();
    }).then(function (data) {
        console.log(data);
    })
}

function adder() {
    fetch('http://localhost:3000/people/', {
        method: 'POST'
        , body: JSON.stringify({
            first: first.value
            , last: last.value
        })
        , headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        return res.text();
    }).then(function (data) {
        console.log(data);
        getter();
    })