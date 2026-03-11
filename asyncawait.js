async function fetchData(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        console.log(" response ",response);
        if(!response.ok) throw new Error(`HTTP error !status : ${response.status}`);
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.log("Error ", error);
        
    }
}

async function fetchPost(){
    let postData = await fetchData()
    console.log(postData)
}
fetchPost();