import "./App.css";
import QuoteGenerator from "./components/quoteGenerator";
import React, { useState, useEffect } from "react";
import { createClient } from "pexels";

const client = createClient(
  "563492ad6f91700001000001cf31ce9b0032436f89fdb1a94fdcf5d3"
);

let queryIndex = 0;
const query = ["Nature", "Ocean", "Animal", "Tiger", "Human"],
  orientation = "landscape";

function App() {
  const [quote, changeQuote] = useState(""),
    [author, changeAuthor] = useState(""),
    [tags, changeTags] = useState([]),
    [bg, setBg] = useState("");

    function incrementIndex () {
      if(queryIndex>=query.length-1){
        return queryIndex=0;
      }else return queryIndex++;
    }    

    
    function fetchRndBg() {
      client.photos
      .search({ query: query[queryIndex], orientation, per_page: 1 })
      .then((photos) => {
        setBg("url(" + photos.photos[0].src.original + ")");
      });
    }
    
    function getQuote() {
      fetch("http://api.quotable.io/random").then((res) =>
        res.json().then((data) => {
          changeQuote(data.content);
          changeAuthor(data.author);
          changeTags(data.tags);
        })
        );
        incrementIndex();
        fetchRndBg();
      }
      
    useEffect(() => {
    getQuote();
  }, []);

  return (
    <div style={{backgroundImage: bg}} className="App">
      <QuoteGenerator
        quote={quote}
        author={author}
        tags={tags}
        getQuote={getQuote}
      />
    </div>
  );
}

export default App;
