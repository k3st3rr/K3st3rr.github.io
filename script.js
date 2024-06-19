document.getElementById('addButton').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const type = document.getElementById('type').value;

    if (title) {
        addMediaItem(title, type);
        document.getElementById('title').value = '';
    }
});

function addMediaItem(title, type) {
    const mediaList = document.getElementById('mediaList');
    const li = document.createElement('li');
    li.textContent = `${title} (${getTypeName(type)})`;
    mediaList.appendChild(li);
}

function getTypeName(type) {
    switch (type) {
        case 'movie':
            return 'Фильм';
        case 'anime':
            return 'Аниме';
        case 'manga':
            return 'Манга';
        case 'book':
            return 'Книга';
    }
}