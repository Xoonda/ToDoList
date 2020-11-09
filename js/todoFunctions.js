let liCollection = 0;
let check = () => {
    liCollection = document.getElementsByTagName('li');
}
// ===> ADD <===
document.getElementById('button').addEventListener('click', () => {
    let txt = document.getElementById('todoText').value;
    if (txt !== '') {
        let newLi = document.createElement('li');
        newLi.className = "rows";
        newLi.innerHTML = txt;
        let cross = document.createElement('span');
        cross.innerHTML = '\u00d7';
        cross.className = "cross";
        newLi.append(cross);
        table.append(newLi);
        document.getElementById('todoText').value = "";
        crossList = document.getElementsByClassName('cross');
        let row = document.getElementsByClassName('rows');
        row[0].style.display = "none";
        check();
    } else {
        alert('Пустое поле!');
    }
})

// ===> DELETE <===

for (let i = 1; i < liCollection.length; i++) {
    
}

// ===> COMPLETE <=== 
// let complRows = document.getElementsByTagName('li');
// console.log(complRows)
// for (let i = 0; i < complRows.length; i++) {
//     complRows[i].
// }
