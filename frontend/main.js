function convertToDisplayString(items) {
    const itemsArray = items.map(item => `<li id="${item.id}" onclick="showItemDetails('${item.type}', '${item.id}')">${item.name}</li>`);
    const displayString = itemsArray.join("");
    return displayString;
}

function showItems(type) {
    fetch(`http://localhost:3000/${type}`).then((response) => {
        response.json().then(items => {
            console.log("items", items);
            const displayString = convertToDisplayString(items);
            document.getElementById("content").innerHTML = '<ul>' + displayString + '</ul>';
        });
    });
}

function showItemDetails(type, itemId) {
    fetch(`http://localhost:3000/${type}/${itemId}`).then(function (response) {
        response.json().then(function (item) {
            console.log("item", item);
            if (item.varieties.length === 0)
                alert("No verieties found.")
            else
                alert(item.varieties.map(variety => variety.name));
        });
    });
}
