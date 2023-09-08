"use client";
import React from "react";

function CensoredButton({ value }) {
  const [isCensored, setIsCensored] = React.useState(false);

  return (
    <button
      className={isCensored ? "censored" : undefined}
      onClick={() => {
        setIsCensored(!isCensored);
      }}
    >
      {value}
    </button>
  );
}

export default CensoredButton;
