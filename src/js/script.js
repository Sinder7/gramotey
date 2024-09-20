function openModal(title, description) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        closeModal();
    }
}

