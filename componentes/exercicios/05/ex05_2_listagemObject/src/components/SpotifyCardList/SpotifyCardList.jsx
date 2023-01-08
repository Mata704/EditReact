const SpotifyCardList =(props) =>
{
    const songlist = props.favListObject.map(song => {
        return (
                <div className="music-card" key={song.songId}>
                    <img src="" />
                    <h3 className="title">{song.songName}</h3>
                    <h5 className="artist">{song.singer}</h5>
                </div>               
                )
        })
 
    return(
        <div className="spotify-card-list">
            {songlist} 
        </div>)
}

export default SpotifyCardList;