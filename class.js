// class Student {
//     constructor(sId, sName) {
//         this.id = sId;
//         this.name = sName;
//         this.school = "Cosmo School"
//     }
// }

// const student1 = new Student(12, "Shuvo");
// const student2 = new Student(22, "Mahi");
// const student3 = new Student(29, "kamal");
// // console.log(student1, student2);
// // console.log(student1.name, student2.name);
// console.log(student3.name);

class Student {
    constructor(sId, SName){
        this.id = sId;
        this.Name = SName;
        this.school = "Cosmo School"

    }
}

const student1 = new Student(2, "Salam");
const student2 = new Student(1, "Kamal");
const student3 = new Student(3, "Samal");
const student4 = new Student(4, "Bamal");
const student5 = new Student(5, "Namal");

console.log(student1, student2, student3, student4, student5);
console.log(student1.Name, student2.Name, student3.Name, student4.Name, student5.Name);
