import React from "react";
import {useState} from 'react';
import useInfiniteScroll from "./InfiniteScroll";


function Photos() {
  const limit = 500;
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchUrl);

  async function fetchUrl() {
    const  url = `/api/10?offset=${listItems.length}&limit=${limit}`;
    const response = await fetch(url);
    const data = await response.json();
    setListItems(listItems.concat(data));
    setIsFetching(false);
  }

  return (
    <>
          <ul className="book_list">
	  
              {listItems.map(({ id, title, publisher, year, author, coverurl, language }) => (
		    <li key={id} className="tile">
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
		    <img src={coverurl} alt="Book Cover is unavailable" />
		    </div>
            </li>
          ))}
        </ul>
        {isFetching && 'Fetching more list items...'}
    </>
  );
}
export default Photos;
