function open() {
    var btnMore = document.getElementById('#hiddenResume');

    if (btnMore.style.display === "none") {
        btnMore.style.display = "block";
    } else {
        btnMore.display = "none";
    }
};
