
// creating an element to store sgpa.
const gpaSpace = document.createElement('span');
// adding classname 
gpaSpace.className = 'sgpa';


// selecting div.content1.
const secContent = document.querySelector('.content1');
// adding sgpa element to div.content1.
secContent.appendChild(gpaSpace);


// creating an element to store greeting para.
const innerButton = document.createElement('p');
// adding classname 
innerButton.className = "greet-para";


//  selecting div.content2.
const content2 = document.querySelector('.content2');
// adding greeting para element to div.content2.
content2.appendChild(innerButton);


// sgpa calculation processes here.
function calculate(key) {
    // comparing user entered grades with following array.
    const real = ['a+', 'a', 'b', 'c', 'd', 'e', 'f'];

    // empty array to store grades entered by user.
    const arr = [];

    // selecting input elements.
    const val = document.querySelectorAll('.detail .sub-detail3 input');


    // loop to retreive the value from input.
    for (let v of val) {
        arr.push((v.value).toLowerCase());
    }

    // if() block is to reset all stylings.
    // when user grades mismatched with our real array.
    if ((!(arr.every(i => real.includes(i))))) {
        alert("Enter 'Every Grade' and that to 'Proper Grades'");
        document.querySelector('.sgpa')
            .style
            .display = "none";
        document.querySelector('.content2')
            .style
            .display = "none";
        document.querySelector('.content3')
            .style
            .display = "none";

    }

    // else() block is to calculate SGPA.
    else {
        // Below for() loop is to convert GRADE to GRADE POINTS.
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

        // Below for() loop is to calculate sum with corresponding CREDITS.
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

        // SGPA is rounded to 2 DECIMAL DIGITS.
        const sgpa = (Math.round((total / 21.5) * 100)) / 100;

        // selecting span.sgpa
        // changing display:none to display:block.
        document.querySelector('.sgpa')
            .style
            .display = "block";

        // setting innertext as SGPA result. 
        document.querySelector('.sgpa')
            .innerText = sgpa;

        // selecting div.content3
        // changing display:none to display:block.
        document.querySelector('.content3')
            .style
            .display = "block";

        //It will execute when greeting button is clicked.
        if (key === "greet") {

            // selecting div.content2
            // changing display:none to display:block.
            document.querySelector('.content2')
                .style
                .display = "block";

            // selecting p.greet-para
            const greetPara = document.querySelector('.greet-para')

            // Asking user to enter name.
            let name = prompt("Enter Your Name ");

            // Below if() is to check whether the name is EMPTY or NULL.
            // and looping till name is not EMPTY or NULL.
            if (name === '' || name === null) {
                do {
                    name = prompt("You Can't Escape from Entering Your Name.");
                } while (name === '' || name === null)
            }

            // Below if() is to check whether the name is exceeding length 10.
            // and Looping till name length is in range.
            if (name.length > 10) {
                do {
                    name = prompt("Max Length Allowed for Name is 10.");
                } while (name.length > 10)
            }

            name = name.toUpperCase();

            // Greeting users according to their result(SGPA).
            if (sgpa >= 8.5) {
                document.querySelector('.greet-para').style.backgroundColor = "green";
                greetPara.innerText = `Hii ${name}, Congrats. You are at Top level, Nobody Can Stop You.`;
            } else if (sgpa >= 8.0) {
                document.querySelector('.greet-para').style.backgroundColor = "green";
                greetPara.innerText = `Hii ${name}, Congrats. But You have Capability to Beat 8.5 SGPA, So Try for it.`;
            } else if (sgpa >= 7.5) {
                document.querySelector('.greet-para').style.backgroundColor = "yellowgreen";
                greetPara.innerText = `Hii ${name}, Congrats. But You have Capability to Beat 8.0 SGPA, So try for it.`;
            } else if (sgpa >= 7.0) {
                document.querySelector('.greet-para').style.backgroundColor = "tomato";
                greetPara.innerText = `Hii ${name}, Congrats. But You have Capability to Beat 7.5 SGPA, So try for it.`;
            } else if (sgpa >= 6.5) {
                document.querySelector('.greet-para').style.backgroundColor = "red";
                greetPara.innerText = `Hii ${name}, Congrats. But You have Capability to Beat 7.0 SGPA, So try for it.`;
            } else {
                document.querySelector('.greet-para').style.backgroundColor = "red";
                greetPara.innerText = `Hii ${name}, Congrats. But Sorry To say You are at Low level, Try to Cross 6.5`;
            }
        }
    }
}