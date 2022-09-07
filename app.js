//fetch method to fetch information from an api
fetch("https://swapi.dev/api/people/1")
.then(res => {
    console.log("RESOLVED!", res);
    return res.json();
})
.then(data => {
    console.log(data);
    return fetch("https://swapi.dev/api/people/5")
})
.then(res => {
    console.log("REQUEST 2");
    return res.json(); //get the complete response
    //.json returns a promise so we have to use a .then again
})
.then(data => {
    console.log(data)
})
.catch((e) => {
    console.log("ERROR!, e");
})