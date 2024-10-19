// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Countdown Timer Function
function updateCountdowns() {
    const exams = [
        { name: "Maths", date: new Date("2024-11-23T09:00:00") }, // 23 Nov
        { name: "LSD", date: new Date("2024-11-30T09:00:00") },  // 30 Nov
        { name: "OOPS", date: new Date("2024-12-04T09:00:00") }, // 4 Dec
        { name: "DS", date: new Date("2024-12-11T09:00:00") },   // 11 Dec
    ];

    exams.forEach(exam => {
        const now = new Date();
        const timeRemaining = exam.date - now;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById(`${exam.name.toLowerCase()}-countdown`).innerHTML = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
}

setInterval(updateCountdowns, 1000);
updateCountdowns(); // Initial call
