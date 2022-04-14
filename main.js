const btn = document.querySelector('button');
const section = document.querySelector('section');

let codesNumber
charsNumber
chars;


btn.textContent = 'Generate codes';

btn.addEventListener('mouseenter', () => {
    btn.classList.add('active');
});

btn.addEventListener('mouseleave', () => {
    btn.classList.remove('active');
});

const codeGenerator = () => {
    // console.log('klik'); // check
    codesNumber = document.querySelector('#codesNumber').value;
    charsNumber = document.querySelector('#charsNumber').value;
    chars = document.querySelector('#chars').value;
    Array.from(chars);

    section.innerHTML = ''; // clean

    for (let i = 0; i < codesNumber; i++) {
        let code = '';
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
};

btn.addEventListener('click', codeGenerator);