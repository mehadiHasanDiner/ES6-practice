class Student {
    constructor(sId, sName) {
        this.id = sId;
        this.name = sName;
        this.school = "Cosmo School"
    }
}

const student1 = new Student(12, "Shuvo");
const student2 = new Student(22, "Mahi");
const student3 = new Student(29, "kamal");
// console.log(student1, student2);
// console.log(student1.name, student2.name);
console.log(student3.name);