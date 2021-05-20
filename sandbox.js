const article = document.querySelector('article');
console.log(article.children);

console.log(Array.from(article.children));

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const title = document.querySelector('h2');

console.log(title.parentElement.parentElement);

console.log(title.nextElementSibling);

console.log(title.previousElementSibling);

/* const ul = document.querySelector(".people");

const people = ["SMCP Education", "Vedantu", "ByJUs", "Toppr"];

let html = ``;

people.forEach(person => {
    html += `<li style='color: green; font-size: 2.4rem'>${person}</li>`;
})

ul.innerHTML = html;

const para = document.querySelector('p');
para.innerText = "Koustubh is an entreprenuer";

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText += ' Wow!!';
})

const content = document.querySelector('.content');
const educators = ['koustubh', 'Luigi', 'Takasho'];
educators.forEach(educator => {
    content.innerHTML += `<h2>${educator}</h2>`;
})

const groupParas = document.querySelectorAll('p');
groupParas.forEach(para => {
    console.log(para.innerText);
    if (para.textContent.includes('error')) {
        para.classList.add('error');
    } else if (para.textContent.includes('success')) {
        para.classList.add('success');
    }
});
*/

