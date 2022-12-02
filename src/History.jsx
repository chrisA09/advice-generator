import React from "react";

export default function History({ advices }) {
  return (
    <ul>
      {advices.map((advice) => {
        <li key={advice.id}>{advice.advice}</li>;
      })}
    </ul>
  );
}
