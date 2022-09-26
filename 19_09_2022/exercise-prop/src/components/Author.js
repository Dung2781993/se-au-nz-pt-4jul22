import React from "react";

class Author extends React.Component {
  render() {
    function sum(a, b) {
      return a + b;
    }
    return (
      <div>
        <h3>Author: {sum(3, 4)}</h3>
      </div>
    );
  }
}

export default Author;
