document.addEventListener('DOMContentLoaded', (event) => {
    loadMediaList('books');
    loadMediaList('movies');
    loadMediaList('anime');
    loadMediaList('manga');
});

function addMedia(type) {
    const input = document.getElementById(`${type}-title`);
    const title = input.value.trim();
    if (title) {
        const mediaList = JSON.parse(localStorage.getItem(type)) || [];
        mediaList.push(title);
        localStorage.setItem(type, JSON.stringify(mediaList));
        loadMediaList(type);
        input.value = '';
    }
}

function loadMediaList(type) {
    const mediaList = JSON.parse(localStorage.getItem(type)) || [];
    const listElement = document.getElementById(`${type}-list`);
    listElement.innerHTML = '';
    mediaList.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = item;
        listElement.appendChild(li);
    });
}
