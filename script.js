let form = document.getElementById('form');
let listBtn = document.getElementById('listButton');
let arrList = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Assinging and target the DOM elements using their Id's
    let list = document.getElementById('list');
    let input = document.getElementById('input');
    let span = document.getElementById('span');

    let spanWidth = span.offsetWidth;//offsetWidth: used to get the width of the target element;
    let randomId = Math.random().toString();

    // Creating element
    let li = document.createElement('li');
    let chkbox = document.createElement('input');
    let lbl = document.createElement('label');

    chkbox.type = "checkbox";
    lbl.innerHTML = input.value;
    li.setAttribute('id', randomId);


    if (input.value.length === 0 || arrList.length >= 5) { //Checks whether the length of the input value is =0 OR array list is >=5
        input.style = 'border: 1px solid red; background:salmon';
        listBtn.style.display = 'block';
    } else if (arrList.length < 5) { //Checks whether the length array list is <5
        input.style = 'border: 1px solid #ccc; background: white';
        li.append(chkbox, lbl) // append both the checkbox and label to list at once
        list.appendChild(li); //appends on a single li element
        spanWidth = spanWidth + 53; //adds 64(64px) to span
        span.style.width = `${spanWidth}px`;  //sets the value of new width to the span element
        arrList.push(li);
        console.log(arrList)
    }

    // Changes after the list element is clicked
    li.addEventListener('click', () => {
        if (!chkbox.checked) {
            chkbox.checked = true;
            lbl.style = "text-decoration: line-through; color: #ccc; font-weight: 200";
            li.style.boxShadow = '1px 3px 3px -2px black';
        } else {
            chkbox.checked = false;
            lbl.style = "text-decoration: none; color: white; font-weight: 500";
            li.style.boxShadow = '1px 3px 6px -2px black'
        }
    })

    input.value = '';
})

// // Click event to remove the childrens of List
// listBtn.addEventListener('click', () => {
//     for (let i = 0; i <= arrList.length; i++) { arrList.pop(); }
//     list.remove();
//     input.style = 'border: 1px solid #ccc; background: white';
//     span.style.width = '0';
// })

listBtn.addEventListener('click', () => window.location = 'index.html');