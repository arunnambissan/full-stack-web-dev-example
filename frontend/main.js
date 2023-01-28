
function fetchData(key) {
    fetch(`http://localhost:3000/${key}`).then((response) => {
        response.json().then(data => {
            console.log(data);
            document.getElementById("content").innerHTML = data.join(", ");
        });
    });
}
