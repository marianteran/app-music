import React from "react";

const SongArtist = ({ artista }) => {
  //console.log(artista)
  return (
    <>
      <section className="artist">
        <h2>{artista.strArtist}</h2>
        <img src={artista.strArtistThumb} alt={artista.strArtist} />

        <p>
          {artista.intBornYear} - {artista.intDeadYear || "Presente"}{" "}
        </p>
        <p>{artista.strCountry}</p>
        <p>
          {artista.strGenre} - {artista.strStyle}
        </p>
        <p>{artista.strBiographyEN}</p>

        <div className="linkss"> 
        <a href={artista.strLastFMChart} target="_blank" rel="noreferrer">
          musica
        </a>
        
        <a
          href={`http://${artista.strWebsite}`}
          target="_blank"
          rel="noreferrer"
        >
          web site
        </a>
        </div>
      </section>
    </>
  );
};

export default SongArtist;
