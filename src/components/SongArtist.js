import React from "react";

const SongArtist = ({ artista }) => {
  //console.log(artista)
  return (
    <>
      <section className="artist">
        <h3>{artista.strArtist}</h3>
        <img src={artista.strArtistThumb} alt={artista.strArtist} />

        <p>
          {artista.intBornYear} - {artista.intDeadYear || "Presente"}{" "}
        </p>
        <p>{artista.strCountry}</p>
        <p>
          {artista.strGenre} - {artista.strStyle}
        </p>
        <p className="biografy">{artista.strBiographyES}</p>

        <div className="linkss"> 
        <a href={artista.strLastFMChart} target="_blank" rel="noreferrer">
          🎶música
        </a>
        
        <a
          href={`http://${artista.strWebsite}`}
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
