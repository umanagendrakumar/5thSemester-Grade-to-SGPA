document.body.addEventListener('keydown', (eve) => {
    if (eve.code === "Enter") {
        hello();
    }
});

const gpaSpace = document.createElement('span');
gpaSpace.className = 'sgpa';
const secContent = document.querySelector('.content1');
secContent.appendChild(gpaSpace);


// const outerButton = document.createElement('button');
// outerButton.className = "greet-btn";
// outerButton.append('G r e e t i n g');

const content2 = document.querySelector('.content2');
// section.appendChild(outerButton);


const innerButton = document.createElement('p');
innerButton.className = "greet-para";
content2.appendChild(innerButton);




function hello() {
    const real = ['a+', 'a', 'b', 'c', 'd', 'e', 'f'];
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
        document.querySelector('.content2')
            .style
            .display = "none";
        // document.querySelector('.greet-btn')
        //     .style
        //     .display = "none";
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
        sgpaButton.style.display = "block";
        sgpaButton.innerText = sgpa;

        document.querySelector('.content2').style.display = "block";

        // const greetButton = document.querySelector('.greet-btn')
        // greetButton.style.display = "block";
        const greetPara = document.querySelector('.greet-para')
        greetPara.style.display = "block";

        // let name = prompt('Enter Your name')
        // if (name === null || name === '') {
        //     do {
        //         name = prompt('You Cannot Escape from Entering "Your Name" or "Atleast One Letter"');
        //     } while (name === null || name === '')
        // }
        // if (name.length > 20) {
        //     do {
        //         name = prompt('Max Length Allowed for Name is 20 ')
        //     } while (name.length > 20)
        // }

        if (sgpa >= 8.5) {
            document.querySelector('.greet-para').style.backgroundColor = "green";
            greetPara.innerText = `You are at Top level, Nobody Can Stop You.`;
        } else if (sgpa >= 8.0) {
            document.querySelector('.greet-para').style.backgroundColor = "green";
            greetPara.innerText = `You have Capability to Beat 8.5 SGPA, So Try for it.`;
        } else if (sgpa >= 7.5) {
            document.querySelector('.greet-para').style.backgroundColor = "yellowgreen";
            greetPara.innerText = `You have Capability to Beat 8.0 SGPA, So try for it.`;
        } else if (sgpa >= 7.0) {
            document.querySelector('.greet-para').style.backgroundColor = "tomato";
            greetPara.innerText = `You have Capability to Beat 7.5 SGPA, So try for it.`;
        } else if (sgpa >= 6.5) {
            document.querySelector('.greet-para').style.backgroundColor = "red";
            greetPara.innerText = `You have Capability to Beat 7.0 SGPA, So try for it.`;
        } else {
            document.querySelector('.greet-para').style.backgroundColor = "red";
            greetPara.innerText = `Sorry To say You are at Low level, Try to Cross 6.5`;
        }

        window.scrollTo(0, 70);

    }
}

// click to add paragraph by replacing greeting button.
// const greetButton = document.querySelector('.greet-btn')
// // var name;
// greetButton.addEventListener('click', function () {
//     let name = prompt('Enter Your name')
//     if (name === null || name === '') {
//         do {
//             name = prompt('You Cannot Escape from Entering "Your Name" or "Atleast One Letter"');
//         } while (name === null || name === '')
//     }
//     if (name.length > 20) {
//         do {
//             name = prompt('Max Length Allowed for Name is 20 ')
//         } while (name.length > 20)
//     }
//     const para = document.querySelector('.greet-para')
//     para.style.display = "block";

//     const greet = document.querySelector('.greet-btn');
//     document.querySelector('.content2').replaceChild(para, greet);



//     const sgpa = document.querySelector('.sgpa').innerText;
//     console.log(sgpa)
//     // if (sgpa >= 8.5) {
//     //     document.querySelector('.greet-para').style.backgroundColor = "green";
//     //     para.innerText = `Hii ${name}, You are at Top level, Nobody Can Stop You.`;
//     // } else if (sgpa >= 8.0) {
//     //     document.querySelector('.greet-para').style.backgroundColor = "green";
//     //     para.innerText = `Hii ${name}, You have Capability to Beat 8.5 SGPA, So Try for it.`;
//     // } else if (sgpa >= 7.5) {
//     //     document.querySelector('.greet-para').style.backgroundColor = "yellowgreen";
//     //     para.innerText = `Hii ${name}, You have Capability to Beat 8.0 SGPA, So try for it.`;
//     // } else if (sgpa >= 7.0) {
//     //     document.querySelector('.greet-para').style.backgroundColor = "tomato";
//     //     para.innerText = `Hii ${name}, You have Capability to Beat 7.5 SGPA, So try for it.`;
//     // } else if (sgpa >= 6.5) {
//     //     document.querySelector('.greet-para').style.backgroundColor = "red";
//     //     para.innerText = `Hii ${name}, You have Capability to Beat 7.0 SGPA, So try for it.`;
//     // } else {
//     //     document.querySelector('.greet-para').style.backgroundColor = "red";
//     //     para.innerText = `Hii ${name}, Sorry To say You are at Low level, Try to Cross 6.5`;
//     // }

// });

