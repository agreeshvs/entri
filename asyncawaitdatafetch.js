console.log("Start fetching data...");

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`);
  }
  return res.json();
}
async function getAllData() {
  try {
    // Fetch post
    const post = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log("Post fetched:", post);

    // Fetch user
    const user = await fetchData(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
    console.log("User fetched:", user);

    // Fetch comments
    const comments = await fetchData(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
    console.log("Comments fetched:", comments);

    console.log("All data fetched successfully!");
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}
getAllData();