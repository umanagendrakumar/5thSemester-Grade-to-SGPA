
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
    const real = ['a+', 'a', 'b', 'c', 'd', 'e', 'f', 'w', 'ab'];

    // empty array to store grades entered by user.
    const arr = [];

    // selecting input elements.
    const val = document.querySelectorAll('.detail .sub-detail3 input');


    // loop to retreive the value from input.
    for (let v of val) {
        arr.push((v.value).toLowerCase());
    }

    const funAlert = ["-- An Error While Fetching. PLz reCheck Grades : ) --"];
    const funVal = 0

    // if() block is to reset all stylings.
    // when user grades mismatched with our real array.
    if ((!(arr.every(i => real.includes(i))))) {
        alert(`${funAlert[funVal]}`);
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
                case 'w':
                case 'ab':
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
                case 8:
                    total += num * 1.5;
                    break;
                case 9:
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


        document.querySelector('.content2')
            .style
            .display = "none";

        // scroll to End of the page vertically.
        window.scrollTo(0, (document.body.scrollHeight));        
    
    }
}