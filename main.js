/* Method: Loop through all classes
Pros: Allows you to add as many classes as you want
Cons: Fixing bugs was a massive pain
*/

let rowCounter = 1
let totalCredits = 0
let totalGradeProd = 0

// array to store values to repopulate courses
let courseArr = []

// array to store value to repopulate grades
let gradeArr = []

// array to store value to repopulate weight
let creditArr = []

//let clicked = false

// Add a new row of courses
function addNewRow () {
  // Save prev assignments in array
  for (let i = 1; i <= rowCounter; i++) {
    let courseVal = document.getElementById(`course${i}`).value
    courseArr.push(courseVal)
  }

  // Save prev grades in array
  for (let j = 1; j <= rowCounter; j++) {
    let gradeVal = document.getElementById(`grade${j}`).value
    gradeArr.push(gradeVal)
  }

  // Save prev weights in array
  for (let k = 1; k <= rowCounter; k++) {
    let creditVal = document.getElementById(`credits${k}`).value
    creditArr.push(creditVal)
  }

  rowCounter++

  document.getElementById('gpa').innerHTML = ''
  document.getElementById('letter-grade').innerHTML = ''
  document.getElementById('wrapper').innerHTML += `<span>
  <input type="text" id="course${String(rowCounter)}"> 
  <select id="grade${String(
    rowCounter
  )}"><option value="None">-</option><option value="Aplus">A+</option><option value="Areg">A</option><option value="Aminus">A-</option><option value="Bplus">B+</option><option value="Breg">B</option><option value="Bminus">B-</option><option value="Cplus">C+</option><option value="Creg">C</option><option value="Cminus">C-</option><option value="Dplus">D+</option><option value="Dreg">D</option><option value="Dminus">D-</option><option value="Freg">F</option></select>
  
  <input type="number" id="credits${String(rowCounter)}">

  </span>`

  // After new tag has been created, repopulate previous tags
  for (let i = 1; i <= rowCounter - 1; i++) {
    document.getElementById(`course${i}`).value = courseArr[i - 1]
  }

  // After new tag has been created, repopulate previous tags
  for (let j = 1; j <= rowCounter - 1; j++) {
    document.getElementById(`grade${j}`).value = gradeArr[j - 1]
  }

  // After new tag has been created, repopulate previous tags
  for (let k = 1; k <= rowCounter - 1; k++) {
    document.getElementById(`credits${k}`).value = creditArr[k - 1]
  }

  // Empty ass array
  while (courseArr.length > 0) {
    courseArr.pop()
  }

  // Empty grade array
  while (gradeArr.length > 0) {
    gradeArr.pop()
  }

  // Empty weight array
  while (creditArr.length > 0) {
    creditArr.pop()
  }
}

// Calculates GPA and letter grade
function calculateGPA () {
  totalCredits = 0
  totalGradeProd = 0
  gpa = 0
  // No courses added
  if (
    document.getElementById('credits1').value == '' &&
    document.getElementById('grade1').value == '' &&
    document.getElementById('weight1').value == ''
  ) {
    alert('Please add at least one course')
  } else if (
    document.getElementById('grade1').value == '' &&
    document.getElementById('weight1').value == ''
  ) {
    alert('Please fill in the grade and credit fields')
  } else {
    /*
  // Fields are blank
  else if (
    document.getElementById('credits1').value == '' ||
    document.getElementById('grade1').value == ''
  ) {
    alert('Please fill in the grade and credits fields')
  }*/
    //if (!clicked) {
    //clicked = true
    var i = 1

    // Credits
    while (i <= rowCounter) {
      var gradeProd = 0
      var credits = document.getElementById('credits' + i).value
      var grade = document.getElementById('grade' + i).value

      if (grade == 'Aplus' || grade == 'Areg') {
        gradeProd = 4 * credits
      } else if (grade == 'Aminus') {
        gradeProd = 3.7 * credits
      } else if (grade == 'Bplus') {
        gradeProd = 3.3 * credits
      } else if (grade == 'Breg') {
        gradeProd = 3 * credits
      } else if (grade == 'Bminus') {
        gradeProd = 2.7 * credits
      } else if (grade == 'Cplus') {
        gradeProd = 2.3 * credits
      } else if (grade == 'Creg') {
        gradeProd = 2 * credits
      } else if (grade == 'Cminus') {
        gradeProd = 1.7 * credits
      } else if (grade == 'Dplus') {
        gradeProd = 1.3 * credits
      } else if (grade == 'Dreg') {
        gradeProd = 1 * credits
      } else if (grade == 'Dminus') {
        gradeProd = 0.7 * credits
      } else {
        gradeProd = 0 * credits
      }

      // Add to total number of credits
      totalCredits += Number(credits)

      // Add to total grade product
      totalGradeProd += gradeProd

      i++
    }
  }

  // Calculate gpa
  var gpa = totalGradeProd / totalCredits
  document.getElementById('gpa').innerHTML = gpa.toFixed(2)

  // Convert gpa into letter grade
  var letterGrade = ''
  if (gpa >= 4.0) {
    letterGrade = 'A'
  } else if (gpa >= 3.7 && gpa < 4.0) {
    letterGrade = 'A-'
  } else if (gpa >= 3.3 && gpa < 3.7) {
    letterGrade = 'B+'
  } else if (gpa >= 3.0 && gpa < 3.3) {
    letterGrade = 'B'
  } else if (gpa >= 2.7 && gpa < 3.0) {
    letterGrade = 'B-'
  } else if (gpa >= 2.3 && gpa < 2.7) {
    letterGrade = 'C+'
  } else if (gpa >= 2.0 && gpa < 2.3) {
    letterGrade = 'C'
  } else if (gpa >= 1.7 && gpa < 2.0) {
    letterGrade = 'C-'
  } else if (gpa >= 1.3 && gpa < 1.7) {
    letterGrade = 'D+'
  } else if (gpa >= 1.0 && gpa < 1.3) {
    letterGrade = 'D'
  } else if (gpa >= 0.7 && gpa < 1.0) {
    letterGrade = 'D-'
  } else if (gpa >= 0.3 && gpa < 0.7) {
    letterGrade = 'D-'
  } else {
    letterGrade = 'F'
  }
  console.log(letterGrade)
  document.getElementById('letter-grade').innerHTML = letterGrade
}
//}

// Clear all entries in table
function reset () {
  location.reload()

  /*
  totalCredits = 0
  totalGradedProd = 0
  gpa = 0
  var i = rowCounter

  while (i > 0) {
    document.getElementById('course' + i).value = ''
    document.getElementById('grade' + i).value = ''
    document.getElementById('credits' + i).value = ''
    i--
  }
  totalWeight = 0
  gpaProd = 0
  document.getElementById('gpa').innerHTML = ''
  document.getElementById('letter-grade').innerHTML = ''
  */
}

// KEYBOARD FUNCTIONALITY
document.addEventListener('keyup', e => {
  // If plus, call addNewRow
  if (e.key === 'Control') {
    addNewRow()
  }

  // If enter, call calculateGrade
  if (e.key === 'Enter') {
    calculateGPA()
  }

  // If esc, call reset
  if (e.key === 'Escape') {
    reset()
  }
})

/* Alternative Method: Hardcode number of classes (Up to 4)
 - Pros: Easy to implement
 - Cons: Not clean and scalable

function calculateGPA () {
  // Credits
  var credits1 = Number(document.getElementById('credits1').value)
  var credits2 = Number(document.getElementById('credits2').value)
  var credits3 = Number(document.getElementById('credits3').value)
  var credits4 = Number(document.getElementById('credits4').value)
  //var creditsRand = Number(document.getElementById(`credits${rowCounter}`).value)

  // Grade 1
  var gradeProd1 = 0
  var grade1 = document.getElementById('grade1').value
  if (grade1 == 'Aplus' || grade1 == 'Areg') {
    gradeProd1 = 4 * credits1
  } else if (grade1 == 'Aminus') {
    gradeProd1 = 3.7 * credits1
  } else if (grade1 == 'Bplus') {
    gradeProd1 = 3.3 * credits1
  } else if (grade1 == 'Breg') {
    gradeProd1 = 3 * credits1
  } else if (grade1 == 'Bminus') {
    gradeProd1 = 2.7 * credits1
  } else if (grade1 == 'Cplus') {
    gradeProd1 = 2.3 * credits1
  } else if (grade1 == 'Creg') {
    gradeProd1 = 2 * credits1
  } else if (grade1 == 'Cminus') {
    gradeProd1 = 1.7 * credits1
  } else if (grade1 == 'Dplus') {
    gradeProd1 = 1.3 * credits1
  } else if (grade1 == 'Dreg') {
    gradeProd1 = 1 * credits1
  } else if (grade1 == 'Dminus') {
    gradeProd1 = 0.7 * credits1
  } else {
    gradeProd1 = 0 * credits1
  }
  console.log(gradeProd1)

  // Grade 2
  var gradeProd2 = 0
  var grade2 = document.getElementById('grade2').value
  if (grade2 == 'Aplus' || grade2 == 'Areg') {
    gradeProd2 = 4 * credits2
  } else if (grade2 == 'Aminus') {
    gradeProd2 = 3.7 * credits2
  } else if (grade2 == 'Bplus') {
    gradeProd2 = 3.3 * credits2
  } else if (grade2 == 'Breg') {
    gradeProd2 = 3 * credits2
  } else if (grade2 == 'Bminus') {
    gradeProd2 = 2.7 * credits2
  } else if (grade2 == 'Cplus') {
    gradeProd2 = 2.3 * credits2
  } else if (grade2 == 'Creg') {
    gradeProd2 = 2 * credits2
  } else if (grade2 == 'Cminus') {
    gradeProd2 = 1.7 * credits2
  } else if (grade2 == 'Dplus') {
    gradeProd2 = 1.3 * credits2
  } else if (grade2 == 'Dreg') {
    gradeProd2 = 1 * credits2
  } else if (grade2 == 'Dminus') {
    gradeProd2 = 0.7 * credits2
  } else {
    gradeProd2 = 0 * credits2
  }
  console.log(gradeProd2)

  // Grade 3
  var gradeProd3 = 0
  var grade3 = document.getElementById('grade3').value
  if (grade3 == 'Aplus' || grade3 == 'Areg') {
    gradeProd3 = 4 * credits1
  } else if (grade3 == 'Aminus') {
    gradeProd3 = 3.7 * credits3
  } else if (grade3 == 'Bplus') {
    gradeProd3 = 3.3 * credits3
  } else if (grade3 == 'Breg') {
    gradeProd3 = 3 * credits3
  } else if (grade3 == 'Bminus') {
    gradeProd3 = 2.7 * credits3
  } else if (grade3 == 'Cplus') {
    gradeProd3 = 2.3 * credits3
  } else if (grade3 == 'Creg') {
    gradeProd3 = 2 * credits3
  } else if (grade3 == 'Cminus') {
    gradeProd3 = 1.7 * credits3
  } else if (grade3 == 'Dplus') {
    gradeProd3 = 1.3 * credits3
  } else if (grade3 == 'Dreg') {
    gradeProd3 = 1 * credits3
  } else if (grade3 == 'Dminus') {
    gradeProd3 = 0.7 * credits3
  } else {
    gradeProd3 = 0 * credits3
  }
  console.log(gradeProd3)

  // Grade 4
  var gradeProd4 = 0
  var grade4 = document.getElementById('grade4').value
  if (grade4 == 'Aplus' || grade4 == 'Areg') {
    gradeProd4 = 4 * credits4
  } else if (grade4 == 'Aminus') {
    gradeProd4 = 3.7 * credits4
  } else if (grade4 == 'Bplus') {
    gradeProd4 = 3.3 * credits4
  } else if (grade4 == 'Breg') {
    gradeProd4 = 3 * credits4
  } else if (grade4 == 'Bminus') {
    gradeProd4 = 2.7 * credits4
  } else if (grade4 == 'Cplus') {
    gradeProd4 = 2.3 * credits4
  } else if (grade4 == 'Creg') {
    gradeProd4 = 2 * credits4
  } else if (grade4 == 'Cminus') {
    gradeProd4 = 1.7 * credits4
  } else if (grade4 == 'Dplus') {
    gradeProd4 = 1.3 * credits4
  } else if (grade4 == 'Dreg') {
    gradeProd4 = 1 * credits4
  } else if (grade4 == 'Dminus') {
    gradeProd4 = 0.7 * credits4
  } else {
    gradeProd4 = 0 * credits4
  }
  console.log(gradeProd4)

  var totalCredits = credits1 + credits2 + credits3 + credits4
  console.log(totalCredits)
  var gpaProd = gradeProd1 + gradeProd2 + gradeProd3 + gradeProd4
  console.log(gpaProd)
  var gpa = gpaProd / totalCredits

  document.getElementById('gpa').innerHTML = gpa.toFixed(2)
}
*/
