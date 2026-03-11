function getValidMark(subject) {
    let input = Number(window.prompt("Enter your mark for " + subject + " out of 100"));
    while (input < 0 || input > 100) {
        input = Number(window.prompt("Enter your mark for " + subject + " out of 100"));
    }
    return input;
}

function calculateGrade() {
    const name = prompt("Enter your name");
    const mark1 = getValidMark("English") || 0;
    const mark2 = getValidMark("Maths") || 0;
    const mark3 = getValidMark("Science") || 0;
    const mark4 = getValidMark("IT") || 0;
    const mark5 = getValidMark("Hindi") || 0;

    const totalMark = mark1 + mark2 + mark3 + mark4 + mark5;
    const percentage = Math.round((totalMark / 500) * 100);
    let grade = '';
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    console.log({
        name,
        mark1,
        mark2,
        mark3,
        mark4,
        mark5,
        totalMark,
        percentage,
        grade
    })

    const markMsgg = `
    Name: ${name}
    Total Mark: ${totalMark}
    Percentage/Average: ${percentage}%
    Grade: ${grade}
    `

    alert(markMsgg);

}

