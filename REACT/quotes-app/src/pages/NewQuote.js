import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  // useHistory Hook allows us to change the browser history.
  // The history page we visited.
  // useHistory gives us history object

  const history = useHistory();

  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    // Push - It pushes a new page on the state of pages.
    // Replace - It replaces the current page

    // Difference betweem push and replace -
    // With push we can go back with the back button to the page we're comming from, with replace we can't
    // So replace is like a redirect where we change a current page, push adds a new page

    history.push("/quotes");
    // history.replace("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
