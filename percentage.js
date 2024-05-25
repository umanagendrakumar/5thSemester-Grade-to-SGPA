
function hello() {
    const arr = [];
    const val = document.querySelectorAll('.detail input');
    for (let v of val) {
        arr.push((v.value));
    }
    if (arr.includes('') || arr.some(i => i > 10.0)) {
        alert("Enter 'Every Semester SGPA' and that to 'Proper SGPA'.");
        let list = document.querySelector('.last').classList;
        if (list.contains('result')) {
            document.querySelector('.result')
                .innerText = '';
            document.querySelector('.last')
                .classList
                .remove('result');
        }
    } else {
        let total = 0;
        for (let val of arr) {
            total = total + parseFloat(val);
        }
        const cgpa = total / 5;
        const percent = (Math.round(((cgpa - 0.5) * 10) * 100)) / 100;
        
        document.querySelector('.last')
            .classList
            .add('result');
        document.querySelector('.result')
            .innerText = percent + '%';
    }
}




