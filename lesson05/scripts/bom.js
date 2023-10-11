const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('#list');

btn.addEventListener('click', () => {
    if (input.value != '') {
        const li = document.createElement('li');
        list.append(li);
        li.textContent = input.value;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.focus();
        input.value = ''
    }
    else {
        alert('Please enter a favorite book and chapter.')
        input.focus();
    }
})