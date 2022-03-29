import React from "react"
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
      <div>
        <h1>Welcome</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/App">To the App</Link>
        </nav>
      </div>
    );
  }