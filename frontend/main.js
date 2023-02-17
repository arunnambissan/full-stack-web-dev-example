function showItems(type) {
    let list = ``;

    fetch(`http://localhost:3000/${type}`).then(function (res) {
        res.json().then(function (items) {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                console.log(item.name)
                list += `<li 
                onclick="showDetails('${item.type}', '${item.id}')"
                title="${item.description}">
                    ${item.name}
                </li>`;
            }
            document.getElementById("item-list").innerHTML = list;
        });
    })
}

function showDetails(type, id) {
    fetch(`http://localhost:3000/${type}/${id}`).then(function (res) {
        res.json().then(function (item) {
            const varieties = item.varieties.map(variety => variety.name);
            if (varieties.length === 0)
                alert("No varieties found")
            else
                alert(varieties.join(""));
        })
    })
}
