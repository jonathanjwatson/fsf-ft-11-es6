// syntactic sugar

// .map
// .filter

const arrayOfStudents = [
  {
    name: "Bob",
    age: "15",
    currentGrade: "C",
  },
  {
    name: "Larry",
    age: "18",
    currentGrade: "F",
  },
  {
    name: "Susan",
    age: "14",
    currentGrade: "B",
  },
  {
    name: "Nancy",
    age: "17",
    currentGrade: "C",
  },
];

// SCENARIO 3 - Add `willGraduate` property to object
// const studentsWithGraduation = [];

// for(let i = 0; i < arrayOfStudents.length; i++){
//   const currentStudent = {...arrayOfStudents[i]} // spread operator
//   if(arrayOfStudents[i].currentGrade === "D" || arrayOfStudents[i].currentGrade === "F"){
//     currentStudent.willGraduate = false;
//   }else{
//     currentStudent.willGraduate = true;
//   }
//   studentsWithGraduation.push(currentStudent);
// }
const studentsWithGraduation = arrayOfStudents.map((student) => {
  const currentStudent = { ...student };
  currentStudent.willGraduate =
    currentStudent.currentGrade === "D" || currentStudent.currentGrade === "F"
      ? false
      : true;
  return currentStudent;
});

console.log(arrayOfStudents);
console.log(studentsWithGraduation);

// SCENARIO 2 - Get an array of just student names.

// const studentNames = [];

// for (let i = 0; i < arrayOfStudents.length; i++) {
//   studentNames.push(arrayOfStudents[i].name);
// }

// console.log(studentNames);

// const studentNames = arrayOfStudents.map((student) => student.name);

// console.log(studentNames);

// SCENARIO 1 - Find all the students who are not currently passing.
// const failingStudents = [];

// for (let i = 0; i < arrayOfStudents.length; i++) {
//   if (arrayOfStudents[i].currentGrade === "F") {
//     failingStudents.push(arrayOfStudents[i]);
//   }
// }
// console.log(failingStudents);

// const failingStudents = arrayOfStudents.filter(function(student){
//   return student.currentGrade === "F"
// });

const failingStudents = arrayOfStudents.filter(
  (student) => student.currentGrade === "F"
);

// console.log(failingStudents);
