
const real = ['a+', 'a', 'b', 'c', 'd', 'e', 'f'];
function hello() {
    const arr = [];
    const val = document.querySelectorAll('input');
    for (let v of val) {
        arr.push((v.value).toLowerCase());
    }
    if ((!(arr.every(i => real.includes(i))))) {
        alert("Enter 'Every Grade' and that to 'Proper Grades'");
    }
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
    const sgpa = total/21.5;
    document.querySelector('.last').classList.add('result');
    document.querySelector('.result').innerText = sgpa;
}




