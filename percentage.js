alert(`Note :
    Percentage is calculated acc to formula In ANU Syllabus Document.
        Proceed to check :-)`);
function percentage(n) {
    const arr = [];
    const val = document.querySelectorAll('.detail input');
    for (let v of val) {
        arr.push((v.value));
    }

    const funAlert = ["-- An Error While Fetching PLz reCheck Points: ) --"];

    const funVal = 0;

    if (arr.includes('') || arr.some(i => i > 10.0)) {
        alert(`${funAlert[funVal]}`);
        let list = document.querySelector('.last').classList;
        if (list.contains('result')) {
            document.querySelector('.result')
                .innerText = '';
            document.querySelector('.last')
                .classList
                .remove('result');
        }
    } else {
        let sumOfAllSGPAs = 0;

        for (let val of arr) {
            sumOfAllSGPAs = sumOfAllSGPAs + parseFloat(val);
        }


  
        
        const cgpa = sumOfAllSGPAs / arr.length;

        // rounding cgpa to 2 decimal points.
        const cgpaa = (Math.round((cgpa * 100)) / 100);

        // Important Note : 
        //     (cgpa - 0.50) x 10  is taken according to ANU Syllabus Document.
        const percent = (Math.round(((cgpa - 0.50) * 10) * 100)) / 100;




        document.querySelector('.last')
            .classList
            .add('result');
        if (n == 1) {
            document.querySelector('.result')
                .innerText = percent + '%';
        } else {
            document.querySelector('.result')
                .innerText = cgpaa;
        }
    }
}