import { getSongs } from '../api.js'
import { playSong } from '../player.js'
import { addFavorite, removeFavorite, getFavorite, getFavorites } from '../favorites.js'

customElements.define("page-favorites", class extends HTMLElement {
    connectedCallback() {
        const favoritesTab = getFavorites();
        this.innerHTML = `
          <h4>
            Favoris
          </h4>

          <div class="list">
          </div>
        `
        const songList = this.querySelector('.list')
        // Itérer le tableau d'artistes reçus et créer les éléments correspondants
        favoritesTab.forEach((song) => {
            const songItem = document.createElement('song-item')
            songItem.setAttribute('title', song.title)
            songItem.setAttribute('favorite', 'true')
            songList.append(songItem)

            songItem.addEventListener('play_click', () => {
                playSong(song, favoritesTab);
            })

            songItem.addEventListener('favorite_click', () => {
                if (getFavorite(song.id)) {
                    removeFavorite(song.id);
                    window.dispatchEvent(new Event('hashchange'))
                } else {
                    addFavorite(song.id, song);
                    window.dispatchEvent(new Event('hashchange'))
                }
            })
        })

    }
})
