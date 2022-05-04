import React from "react";

const SongLyric = ({ title, letra }) => {
  return (
    <>
      <section className="lytics">
        <h3>{title}</h3>

        <blockquote style={{ whiteSpace: "pre-wrap" }}>{letra}</blockquote>
      </section>
    </>
  );
};

export default SongLyric;
