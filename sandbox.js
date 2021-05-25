const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.username.value);
});

// testing Regex
const username = '123koustu123';
const pattern = /^[a-z]{6,}$/;

//let result = pattern.test(username);
//console.log(result);

let result = username.search(pattern);
console.log(result);