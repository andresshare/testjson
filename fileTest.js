const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const url = 'https://randomuser.me/api/?results=10';
fetchData();

function fetchData() {
    fetch(url).then(function (rep) {
        return rep.json()
    }).then(function (data) {
        console.log(data.results);
        let people = data.results.map(function(el){
            console.log(el);
            return el.name.first + ' ' + el.name.last;
        })
        console.log(people);
        people.forEach(function(person){
            console.log(person);
            output1.innerHTML += `${person}<br>`;
        })
    })
}