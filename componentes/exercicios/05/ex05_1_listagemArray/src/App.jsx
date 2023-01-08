import './App.css'
import SpotifyFav from './components/SpotifyFav/SpotifyFav'

function App() {

  const favList = ["musica 1", "musica 2"];

  // HTML esperado
  /**
   * <div class="spotify-fav">
   *  <ul class="music-list">
   *     <li class="music">*nome-musica*</li>
   *     <li class="music">*nome-musica*</li>
   *     ...
   *  </ul>
   * </div>
   */
  

  return (
    <SpotifyFav favList={favList} />
  )
}

export default App
