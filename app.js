//fetch method to fetch information from an api
// fetch("https://swapi.dev/api/people/1")
// .then(res => {
//     console.log("RESOLVED!", res);
//     return res.json();
// })
// .then(data => {
//     console.log(data);
//     return fetch("https://swapi.dev/api/people/5")
// })
// .then(res => {
//     console.log("REQUEST 2");
//     return res.json(); //get the complete response
//     //.json returns a promise so we have to use a .then again
// })
// .then(data => {
//     console.log(data)
// })
// .catch((e) => {
//     console.log("ERROR!, e");
// })

//NB the above requests are in series, the first one needs to be
//resolve for the second to ever be request

//Making requests using asynchronous functions
//with asynchronous fundtion, wrap everything in a try and catch
//block to catch errors
const loadStarWarsPeople = async () => {
    try{
        const res = await fetch("https://swapi.dev/api/people/1")
        const data = await res.json();
        console.log(data);

        const res2 = await fetch("https://swapi.dev/api/people/2")
        const data2 = await res2.json();
        console.log(data2);
    }
    catch (e) {
        console.log("ERROR!!!", e)
    }
    
}
loadStarWarsPeople();