const favorites = localStorage;

const addFavorite = (id, song) => {
    favorites.setItem(id, JSON.stringify(song))
}

const getFavorite = (id) => {
    return favorites.getItem(id) && JSON.parse(favorites.getItem(id))
}

const removeFavorite = (id) => {
    favorites.removeItem(id);
}

const getFavorites = () => {
    const favoritesTab = [];
    for (let i = 0; i < favorites.length; i++) {
        const key = favorites.key(i);
        const value = JSON.parse(favorites.getItem(key));
        favoritesTab.push(value);
    }
    return favoritesTab;
}

export { addFavorite, removeFavorite, getFavorite, getFavorites }