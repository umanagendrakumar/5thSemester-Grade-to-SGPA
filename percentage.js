
function percentage(n) {
    const arr = [];
    const val = document.querySelectorAll('.detail input');
    for (let v of val) {
        arr.push((v.value));
    }

    const funAlert = [
        "-- Your BRAIN is at Your KNEES, Please Bring It Back : ) --",
        "-- Braineless Fellow, Go and Search Your Brain : ) --",
        "-- Consume Tablets First, ComeOn Hurry Up : ) --",
        "-- Are You a Donkey, Check Ones : ) --"
    ];
    const funVal = Math.floor(Math.random() * 4);

    if (arr.includes('') || arr.some(i => i > 10.0)) {
        alert(`${funAlert[funVal]}
        and then, 
        Enter SGPA's Properly.`);
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

        const cgpa = sumOfAllSGPAs / 5;
        const cgpaa = (Math.round(((sumOfAllSGPAs / 5) * 100)) / 100);
        const percent = (Math.round(((cgpa - 0.5) * 10) * 100)) / 100;


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