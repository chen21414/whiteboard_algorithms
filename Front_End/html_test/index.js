
const getP = document.getElementById('1')
const getUpdate = document.getElementById('update')
const studentName = document.getElementById('name')
const studentPhone = document.getElementById('phone')
const plus = document.getElementById('plus')
const part = document.getElementById('part')
let isOktoShow = false

const date = new Date().toLocaleString();

getP.innerHTML = date

getUpdate.addEventListener('click', e => {
    getP.innerHTML = new Date().toLocaleString();
    console.log('updated')
})

const trueFalse = (e) =>{
    if(isOktoShow === false){
        isOktoShow = true;
        part.style.display = 'block'
    } else if (isOktoShow === true){
        isOktoShow = false;
        part.style.display = 'none'
    }

    console.log(isOktoShow)
}

plus.addEventListener('click', trueFalse)

class Student {
    constructor(name, phone){
        this.name = name
        this.phone = phone
    }
}

const student = new Map()

student.set('Mike', new Student('Mike', 123456))
student.set('Michael Jr', new Student('Michael Jr', 123456))

//console.log(student.get('Mike').name)

student.forEach(s => {
    const div = document.createElement("div");
    div.innerHTML = s.name;
    studentName.appendChild(div);
});

student.forEach(s => {
    const div = document.createElement("div");
    div.innerHTML = s.phone
    studentPhone.appendChild(div)
})

//https://stackoverflow.com/questions/68209560/how-to-print-javascript-foreach-values-in-innerhtml
