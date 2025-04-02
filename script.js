let students = [];
function addStudent() {
    let name = document.getElementById('studentName').value;
    let grades = Array.from(document.getElementsByClassName('grade')).map(input => parseFloat(input.value) || 0);
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    let percentage = total / grades.length;
    let gpa = calculateGPA(percentage);
    let letterGrade = getLetterGrade(percentage);
    let totalGrades = scores.reduce((acc, val) => acc + val, 0);
    students.push({ name, percentage });
    updateTable(name, percentage, gpa, letterGrade);
    updateClassAverage();
}
function calculateGPA(percentage) {
    let gpa = percentage / 25;
    return Math.min(gpa, 4).toFixed(2);
}
function getLetterGrade(percentage) {
    if (percentage >= 90) return 'A';
    if (percentage >= 80) return 'B';
    if (percentage >= 70) return 'C';
    if (percentage >= 60) return 'D';
    return 'F';
}
function updateTable(name, percentage, gpa, letterGrade) {
    let table = document.getElementById('studentTable');
    let row = `<tr><td>${name}</td><td>${percentage.toFixed(2)}%</td><td>${gpa}</td><td>${letterGrade}</td></tr>`;
    table.innerHTML += row;
}
function updateClassAverage() {
    let average = students.reduce((sum, student) => sum + student.percentage, 0) / students.length;
    document.getElementById('classAverage').innerText = average.toFixed(2) + '%';
}
