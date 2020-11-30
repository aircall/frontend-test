import React from "react";

export default function FeedError() {
  return (
    <div className="feed__error">
      There was an error. Please try again!
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
}
