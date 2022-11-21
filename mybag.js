item = JSON.parse(sessionStorage.item);
const itemsListContainer = document.getElementById("items-list-container");
const addedToCardItem = document.createElement("div");
addedToCardItem.innerHTML = item.name;
itemsListContainer.appendChild(addedToCardItem);
document.getElementById("announcement").innerText = "";
