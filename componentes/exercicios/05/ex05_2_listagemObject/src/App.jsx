import SpotifyCardList from './components/SpotifyCardList/SpotifyCardList'
import './App.css'

function App() {
  // Estrutura do Array
  const favListObject = [ {songId: 0, songName: "Dialetos de Ternura",singer: "Maria Leal"},
                          {songId: 1, songName: "Eu levo no pacote",singer: "Rosinha"},
                          {songId: 2, songName: "Pito Mau",singer: "Quim Barreiros"},
                        ];

  // HTML esperado
  /**
  * <div class="spotify-card-list">
  *  <div class="music-card">
  *      <img src="" />
  *      <h3 class="title">*nome musica*</div>
  *      <h5 class="artist">*nome do artista</div>
  *  </div>
  * *  <div class="music-card">
  *      <img src="" />
  *      <h3 class="title">*nome musica*</div>
  *      <h5 class="artist">*nome do artista</div>
  *  </div>
  *  ...
  * </div>
  */

  return ( 
    <SpotifyCardList favListObject={favListObject} />
  )
}
export default App
