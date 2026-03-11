function fetchData(){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("data fetched");
            resolve("")
            
        }, 2000);
    })
}


fetchData().then( (data) => {
    console.log("promis fullfilled ",data)
}).catch( error => {
    console.log("Error")
})