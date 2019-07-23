fetch('https://randomuser.me/api/')
.then(function(response){
    return response.json()
})
.then(function(myJson){
    console.log(JSON.stringify(myJson));
});

