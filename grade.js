document.body.addEventListener('keydown', (eve) => {
    if (eve.code === "Enter") {
        hello();
    }
});

const gpaSpace = document.createElement('span');
gpaSpace.className = 'sgpa';
const secContent = document.querySelector('.content1');
secContent.appendChild(gpaSpace);


const outerButton = document.createElement('button');
outerButton.className = "greet-btn";
outerButton.append('G r e e t i n g');
const section = document.querySelector('.section');
section.appendChild(outerButton);


const innerButton = document.createElement('div');
innerButton.className = "greet-para";
section.appendChild(innerButton);


const real = ['a+', 'a', 'b', 'c', 'd', 'e', 'f'];

function hello() {
    const arr = [];
    const val = document.querySelectorAll('input');
    for (let v of val) {
        arr.push((v.value).toLowerCase());
    }
    if ((!(arr.every(i => real.includes(i))))) {
        alert("Enter 'Every Grade' and that to 'Proper Grades'");
        document.querySelector('.sgpa')
            .style
            .display = "none";
        document.querySelector('.greet-btn')
            .style
            .display = "none";
    } else {
        for (let i = 0; i < 10; i++) {
            let grade = arr[i];
            switch (grade) {
                case 'a+':
                    arr[i] = 10;
                    break;

                case 'a':
                    arr[i] = 9;
                    break;

                case 'b':
                    arr[i] = 8;
                    break;

                case 'c':
                    arr[i] = 7;
                    break;

                case 'd':
                    arr[i] = 6;
                    break;
                case 'e':
                    arr[i] = 5;
                    break;
                case 'f':
                    arr[i] = 0;
                    break;
            }
        }

        let total = 0;
        for (let i = 0; i < 10; i++) {
            let num = arr[i];
            switch (i) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    total += num * 3;
                    break;
                case 5:
                    total += num * 0;
                    break;
                case 6:
                case 7:
                case 9:
                    total += num * 1.5;
                    break;
                case 8:
                    total += num * 2;
                    break;
            }
        }
        const sgpa = (Math.round((total / 21.5) * 100)) / 100;

        const sgpaButton = document.querySelector('.sgpa');
        sgpaButton.style.display = "inline";
        sgpaButton.innerText = sgpa;
        const greetButton = document.querySelector('.greet-btn')
        greetButton.style.display = "block";

    }
}

// click to add paragraph by replacing greeting button.
const greetButton = document.querySelector('.greet-btn')
greetButton.addEventListener('click', function () {
    let name = prompt('Enter Your name')
    if (name === null || name === '') {
        do {
            name = prompt('You Cannot Escape from Entering "Your Name" or "Atleast One Letter"');
        } while (name === null || name === '')
    }
    const para = document.querySelector('.greet-para')
    para.style.display = "block";
    para.append(`Hii ${name}, 
    You Need More Improvement.`)
    const greet = document.querySelector('.greet-btn');
    document.querySelector('.section').replaceChild(para, greet);
});

