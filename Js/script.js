const students = ["Guest Student"];
const rollNO = ["1"];
const attendance = ["Present"];

loadStudents();

function loadStudents() {
  const studentsContainer = document.getElementById("students-container");

  studentsContainer.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    studentsContainer.innerHTML += `
          <div class="student-row">
            <span class="span">${i + 1})  ${students[i]}</span>
            <span>Roll No: ${rollNO[i]}</span>
            <span class="span">${attendance[i]}</span>
             <button onclick="removeStudent(${i})">Remove</button>
          </div>`;
  }
}

function addStudent() {
  const studentName = document.getElementById("studentName").value;
  const rollNo = document.getElementById("rollNo").value;
  const attendanceStatus = document.getElementById("attendance").value;

  if (studentName && rollNo && attendanceStatus) {
    students.push(studentName);
    rollNO.push(rollNo);
    attendance.push(attendanceStatus);

    loadStudents();

    document.getElementById("studentName").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("attendance").value = "";
  }
}

function removeStudent(index) {
  students.splice(index, 1);
  rollNO.splice(index, 1);
  attendance.splice(index, 1);
  loadStudents();
}
