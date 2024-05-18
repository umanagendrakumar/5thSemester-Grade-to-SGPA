function hello() {
    const arr = [];
    const val = document.querySelectorAll('input');
    for (let v of val) {
        arr.push((v.value));
    }
    let total = 0;
    for(let val of arr) {
        total = total+parseFloat(val);
    }
    const cgpa = total/5;
    const percent = ( cgpa - 0.5 )*10;
    document.querySelector('.last').classList.add('result');
    document.querySelector('.result').innerText = percent+'%';
}



