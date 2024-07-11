const habitList = document.getElementById("habitList");

function addHabit() {
    const habitInput = document.getElementById("habitInput");
    const habitText = habitInput.value.trim();
    if (habitText) {
        const habitItem = document.createElement("li");
        habitItem.className = "habit-item";
        habitItem.innerHTML = `
            <span>${habitText}</span>
            <button onclick="removeHabit(this)">Remove</button>
            <button onclick="markCompleted(this)">Mark Completed</button>
            <button onclick="editHabit(this)">Edit</button>
        `;
        habitList.appendChild(habitItem);
        habitInput.value = "";
    }
}

function removeHabit(button) {
    const habitItem = button.parentElement;
    habitList.removeChild(habitItem);
}

function markCompleted(button) {
    const habitItem = button.parentElement;
    habitItem.classList.toggle("completed");
}

function editHabit(button) {
    const habitItem = button.parentElement;
    const habitText = habitItem.querySelector("span").textContent;
    const updatedText = prompt("Edit habit:", habitText);
    if (updatedText) {
        habitItem.querySelector("span").textContent = updatedText;
    }
}
