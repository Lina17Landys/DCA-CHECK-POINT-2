export const getCatFact = fetch('https://catfact.ninja/fact');
getCatFact
.then((res) => {
    res.json()
})
.then((data) => {
    console.log(data);
});


export const getCat = fetch('https://cataas.com/#/');
getCat
.then((res) => {
    res.json()
})
.then((data) => {
    console.log(data);
});
