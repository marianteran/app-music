import React from "react";
import SongLyric from "./SongLyric";
import SongArtist from "./SongArtist";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  /* miestras lyric o bio no tengan valor return null para evitar renderizados innecesarios */
  if (!lyric || !bio) return null;

  return (
    <div className="details">
    
        {lyric.error || lyric.err || lyric.name === "AbortError" ? (
          <Message
            msg={`Error: no existe la canción "<em>${search.song}</em>"`}
            bgColor={"#dc3545"}
          />
        ) : (
          <SongLyric title={search.song} letra={lyric.lyrics} />
        )}
    
        {/* cuando artists tenga info muestra el componente SongArtis en caso contrario muestra el mensaje error */}
        {bio.artists ? (
          <SongArtist artista={bio.artists[0]} />
        ) : (
          <Message
            msg={`Error: no existe el intérprete "<em>${search.artist}</em>"`}
            bgColor={"#dc3545"}
          />
        )}
    
    </div>
  );
};

export default SongDetails;
