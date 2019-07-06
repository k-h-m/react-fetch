import React from "react";
import { useFetch } from "./hooks";
import "./Photos.css"

function Photos() {
  const [data, loading] = useFetch(
    "/api/10?q=1"
  );
  var cardStyle = {
   height: 800,
   width: 400,
   padding: 0,
   backgroundColor: "#FFF",
   WebkitFilter: "drop-shadow(0px 0px 5px #666)",
   filter: "drop-shadow(0px 0px 5px #666)"
  };
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
		    <img src={coverurl} />
		    </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos;
