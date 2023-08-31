import React from "react";

import { Link } from "react-router-dom";

import "./style/Navigator.scss";

const Navigator = () => {
  const tagList = ["tag1", "tag2", "tag3"];

  return (
    <nav className="navigator-container">
      <div className="tag-list-box">
        <ul>
          {tagList.map((res) => {
            return (
              <li>
                <Link to={""}>{res}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigator;
