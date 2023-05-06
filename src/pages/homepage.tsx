import React from "react";
import "./homepage.scss";
class HomePage extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <a href="/account" className="item">
          <img src="a.png" width={18} height={18} />
          <span className="text">Account</span>
        </a>
        <a href="/List" className="item">
          <img src="b.png" width={18} height={18} />
          <span className="text">List</span>
        </a>
      </nav>
    );
  }
}

export default HomePage;
