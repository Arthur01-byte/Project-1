const students = [ {
        name: "simeon",
        sex: "M",
        age: 22
    }, 
    {
        name: "Emmanuel",
        sex: "M",
        age: 26
    
    },
    {
        name: "Precious",
        sex: "M",
        age: 23
    },
    {
        name: "Mark",
        sex: "M",
        age: 25
    },
    {
        name: "James",
        sex: "M",
        age: 22
    },
    {
        name: "Loveness",
        sex: "F",
        age: 21
    },
    {
        name: "Felix",
        age: 22,
        sex: "M"
    }
] ;

//display first 3 students
for (let i = 0; i < 3; i++) {
    const element = students[i];

    document.getElementById('question_1').innerHTML += `
        <div class="basis-[250px] h-fit p-6 bg-blue-200">
            <h4 class="font-semibold text-2xl">${element.name}</h4>
            <p class="text-gray-400">Age: ${element.age}  Sex: ${element.sex}</p>
        </div>
    `;    
}

//display the oldest student
let oldestStudent = students[0];

for (let j = 1; j < students.length; j++) {
    const student = students[j];
    if (student.age > oldestStudent.age) {
        oldestStudent = student;
    }
}

document.getElementById('question_2').innerHTML = `
    <div class="basis-[250px] h-fit p-6 bg-blue-200">
        <h4 class="font-semibold text-2xl">${oldestStudent.name}</h4>
        <p class="text-gray-400">Age: ${oldestStudent.age}  Sex: ${oldestStudent.sex}</p>
    </div>
`;

//display the youngest student
let youngestStudent = students[0];

for (let j = 1; j < students.length; j++) {
    const student = students[j];
    if (student.age < youngestStudent.age) {
        youngestStudent = student;
    }
}

document.getElementById('question_3').innerHTML = `
    <div class="basis-[250px] h-fit p-6 bg-blue-200">
        <h4 class="font-semibold text-2xl">${youngestStudent.name}</h4>
        <p class="text-gray-400">Age: ${youngestStudent.age}  Sex: ${youngestStudent.sex}</p>
    </div>
`;

//append a student
students.push({
    name: "Brown",
    sex: "M",
    age: 25
});

