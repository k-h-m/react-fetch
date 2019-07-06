import React from "react";
import { useFetch } from "./hooks";

function Photos() {
  const [data, loading] = useFetch("/api/10?q=1");
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <ul className="book_list">
              {data.map(({ id, title, publisher, year, author, coverurl, language }) => (
		    <li key={`photo-${id}`} className="tile">
		    <div className="descr">
		      <h1>{title}</h1>
		      <ul>
		      <li>{id}</li>
		      <li>{author}</li>
		      <li>{publisher}({year})</li>
		      <li>{language}</li>
		      </ul>
		      <ul className="tags">
		      <li>dd</li>
		      <li>geometry</li>
		      <li>statistics</li>
		      <li>combinatorics</li>
		      <li>physics</li>
		      <li>CS</li>
		      <li>junk</li>
		      </ul>
		</div>
		    <div className="book_img">
		    <img src={coverurl} alt="Book Cover" />
		    </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos;
