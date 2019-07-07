import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  function handleScroll() {
    console.log("scroll_event", isFetching);
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching)
	  return;
    console.log("need_fetch");  
    setIsFetching(true);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
	console.log("removvve");
	window.removeEventListener('scroll', handleScroll);
    }
  }, []);

 
  useEffect(() => {
    if (!isFetching)
	  return;
    callback();
  }, [isFetching]);
 

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
