import React from "react";

const SongArtist = ({ artist }) => {
  //console.log(artist)
  return (
    <>
      <section className="artist">
      <h3>{artist.strArtist}</h3>
      <img src={artist.strArtistThumb} alt={artist.strArtist} />

        <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
        </p>
        <p>{artist.strCountry}</p>
        <p>
        {artist.strGenre} - {artist.strStyle}
        </p>
        <p className="biografy">{artist.strBiographyEN}</p>

        <div className="linkss"> 
        <a href={artist.strLastFMChart} target="_blank" rel="noreferrer">
          🎶música
        </a>
        
        <a
          href={`http://${artist.strWebsite}`}
          target="_blank"
          rel="noreferrer"
        >
          🌐website
        </a>
        </div>
      </section>
    </>
  );
};

export default SongArtist;
