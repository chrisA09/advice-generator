import React from "react";
import Icon from "./Icon";

export default function Button({ loadQuote, isLoading }) {
  return (
    <button disabled={isLoading} onClick={loadQuote}>
      <Icon />
    </button>
  );
}
