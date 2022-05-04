import React, { useState } from "react";

const initialForm = {
  artist: "",
  song: "",
};

const SongForm = ({ handleSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.artist || !form.song) {
      alert("datos incompletos");
      return;
    }

    handleSearch(form);
    setForm(initialForm); //limpiar el input a su valor inicial
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="artist"
          placeholder="Nombre del Intérprete"
          onChange={handleChange}
          value={form.artist}
        />
        <input
          type="text"
          name="song"
          placeholder="Nombre de la Canción"
          onChange={handleChange}
          value={form.song}
        />

        <input type="submit" value="buscar" />
      </form>
    </div>
  );
};

export default SongForm;
