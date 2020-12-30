import React from "react";
import styles from "./quoteGenerator.module.css";


const QuoteGenerator = (props) => {
    
    let tagsArray = props.tags.map((tag, i) => (
        <span key={i} className={styles.tags}>{tag}</span>
        ));

      
        
       let twitterUrl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + encodeURIComponent(props.quote);
        
  return (
    <main id="quote-box" className={styles.container}>
      <h1 id="text">{props.quote}</h1>
      <h1 id="author" style={{textAlign: "right"}}>- {props.author}</h1>
      <div>
          <div style={{columnGap:".5rem"}}>
          {tagsArray}
          </div>
      </div>
      <div style={{width:"100%", display:"flex",alignItems:"center"}}>
      <a className="twitter-share-button"
  href={twitterUrl} data-size="large">
Tweet</a>
        <button id="new-quote" className={styles.btm} onClick={props.getQuote}>New Quote</button>
        </div>
    </main>
  );
};

export default QuoteGenerator;
