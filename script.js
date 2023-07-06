document.addEventListener("DOMContentLoaded", function () {
    const modalTriggers = document.querySelectorAll(".modal-trigger");
    document.querySelectorAll(".modal");
    const modalCloses = document.querySelectorAll(".modal-close");

    modalTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            const modalId = this.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    modalCloses.forEach(function (close) {
        close.addEventListener("click", function () {
            const modal = this.parentElement;
            modal.style.display = "none";
        });
    });
});