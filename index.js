const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

let ages = [25, 30, 18, 22, 27];

let students = [
  {
    name: 'Rahul',
    rollNumber: 101,
    marks: 85,
  },
  {
    name: 'Sita',
    rollNumber: 102,
    marks: 95,
  },
  {
    name: 'Amit',
    rollNumber: 103,
    marks: 70,
  },
];

let cars = [
  {
    make: 'Maruti',
    model: 'Swift',
    mileage: 15,
  },
  {
    make: 'Hyundai',
    model: 'i20',
    mileage: 18,
  },
  {
    make: 'Tata',
    model: 'Nexon',
    mileage: 20,
  },
];

function sortAscendingOrder(age1, age2) {
  return age1 - age2;
}

app.get('/ages/sort-ascending', (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortAscendingOrder);
  res.json(agesCopy);
});

function sortDescendingOrder(age1, age2) {
  return age2 - age1;
}

app.get('/ages/sort-descending', (req, res) => {
  let agesCopy = ages.slice();
  agesCopy.sort(sortDescendingOrder);
  res.json(agesCopy);
});

function sortStudentMarksInDescendingOrder(student1, student2) {
  return student2.marks - student1.marks;
}

app.get('/students/sort-by-marks-descending', (req, res) => {
  let studentsCopy = students.slice();
  studentsCopy.sort(sortStudentMarksInDescendingOrder);
  res.json(studentsCopy);
});

function sortMileageInDescendingOrder(car1, car2) {
  return car2.mileage - car1.mileage;
}

app.get('/cars/sort-by-mileage-descending', (req, res) => {
  let carsCopy = cars.slice();
  carsCopy.sort(sortMileageInDescendingOrder);
  res.json(carsCopy);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
