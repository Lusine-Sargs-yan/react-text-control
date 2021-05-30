import { useState } from "react";

export default function LessOrMoreText({text, max = 55}){ 
  const [showLess, setShowLess] = useState(true);
  //const text = props.text;
  //const max = 55; //max count of letters
  // let max = props.max;
  // if(max === undefined) {
  //   max = 55;
  // }
  //or destructuring syntax
  //const {text, max = 55} = props;


  if(text.length <= max) {
    return <span>{text}</span>
  }

  const handleOnClick = (event) => {
    event.preventDefault();
    setShowLess(!showLess);

  };

  return (
    <span>
      {showLess ? `${text.substring(0, max)}...` : text}
      <a href="#" onClick={(event) => handleOnClick(event)}>{showLess ? "more" : "less"}</a>
    </span>
  )
};