var searchAlbums = function(term) {
    let url = `https://api.spotify.com/v1/search?q=album:${term}&type=album`;

    return fetch(url).then(response => response.json());
};

var searchTrack = function(id) {
    let url = `https://api.spotify.com/v1/albums/${id}`;

    return fetch(url).then(response => response.json());
};

export { searchAlbums, searchTrack };

