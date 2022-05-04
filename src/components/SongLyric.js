import React from "react";

const SongLyric = ({ title, letra }) => {
  return (
    <>
      <section className="lytics">
        <h2>{title}</h2>

        <blockquote style={{ whiteSpace: "pre-wrap" }}>{letra}</blockquote>
      </section>
    </>
  );
};

export default SongLyric;
