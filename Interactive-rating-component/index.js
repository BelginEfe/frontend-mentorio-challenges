const buttons = document.getElementsByTagName('input');
const confirmedValue = document.getElementById('confirmedValue');
const formSubmit = document.getElementById('formSubmit');

const buttonInputs = Array.from(buttons);
let myValue;

buttonInputs.map(input => {
    input.addEventListener('click', () => {
        switch (input.value) {
            case "1":
                myValue = 1;
                break;
            case "2":
                myValue = 2;
                break;
            case "3":
                myValue = 3;
                break;
            case "4":
                myValue = 4;
                break;
            case "5":
                myValue = 5;
                break;
        }
    })
})

formSubmit.addEventListener('submit', (e) => {
    e.preventDefault();
    if (myValue === 1 || myValue === 2 || myValue === 3 || myValue === 4 || myValue === 5) confirmedValue.innerHTML = `You selected ${myValue} out of 5`;
    else confirmedValue.innerHTML = `You didn't make any choise`;;
    document.getElementById('state').style.display = 'none';
    document.getElementById('thanks').style.display = 'grid';
})





