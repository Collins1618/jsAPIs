//makes a request and parses the json for us
// axios.get("https://swapi.dev/api/people/1")
// .then(res => {
//     console.log("RESPONSE: ", res);
// })

// //to catch the error that may result from our code
// .catch((e) => {
//     console.log("ERROR! ", e)
// })



//REFACTOR THE ABOVE CODE AS AN ASYNCHRONOUS FUNCTION
const getStarWarsPerson = async (id) => {
    try{
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }
    catch (e){
        console.log("ERROR: ", e)
    }
}

getStarWarsPerson(15);