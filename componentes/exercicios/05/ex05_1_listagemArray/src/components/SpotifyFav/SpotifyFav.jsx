const SpotifyFav =(props) =>
{
    const musicList = props.favList.map((song) => {
        return <li class="song">{song}</li>
        })

    return(
        <div className="spotify-fav">
            <ul className="music-list">
                {musicList}
            </ul>
        </div>)
}

export default SpotifyFav;