function openTab(tabName) {
    let i;
    let tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

function saveNotes(tabName) {
    let textArea = document.getElementById(tabName + "TextArea");
    let notes = textArea.value;
    localStorage.setItem(tabName + "Notes", notes);
}

function loadNotes() {
    let tabs = ['films', 'books', 'anime', 'manga'];
    tabs.forEach(tab => {
        let notes = localStorage.getItem(tab + "Notes");
        if (notes) {
            document.getElementById(tab + "TextArea").value = notes;
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    loadNotes();
    openTab('films');
});
