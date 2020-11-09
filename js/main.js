//container
const container = document.createElement('div');
container.className = "container";
document.body.append(container);
//====> HEADER <====
//header
const header = document.createElement('div');
header.className = "header";
container.append(header);
// header -> h1
const headerText = document.createElement('h1');
headerText.innerHTML = "Мой список дел:";
header.append(headerText);
//header -> input
const headerInput = document.createElement('input');
headerInput.className = "todoText";
headerInput.id = "todoText";
headerInput.type = "Text";
headerInput.placeholder = "Добавить планирование..."
header.append(headerInput);
//header -> button
const headerButton = document.createElement('input');
headerButton.className = "button";
headerButton.id = "button";
headerButton.type = "submit";
headerButton.value = "Добавить";
header.append(headerButton);
//====> Content <====
// content 
const content = document.createElement('div');
content.className = "content";
container.append(content);
//content -> ul
const table = document.createElement('ul');
content.append(table);
//content -> ul -> li
const row = document.createElement('li');
row.className = "rows";
row.innerHTML = "Создать список дел...";
table.append(row);
