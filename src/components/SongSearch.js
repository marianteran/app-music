import React, { useEffect, useState } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    //console.log(data)
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) {
      return;
    }

    const fetchData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      //console.log(artistUrl)
      //console.log(songUrl)
      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);
      //console.log(artistRes)
      //console.log(songRes)
      setBio(artistRes)
      setLyric(songRes)
      setLoading(false);
    };

    fetchData();
  }, [search]);

  return (
    <div >
      <h2 >Buscador de Canciones</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}

        {/* si search tiene algo y loading sea false quiero q muestres SongDetails */}
        {search && !loading && (<SongDetails search={search} lyric={lyric} bio={bio} />)}
      </article>

    </div>
  );
};

export default SongSearch;
