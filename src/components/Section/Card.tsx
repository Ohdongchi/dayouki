import React from "react";

import "./style/Card.scss";

const Card = () => {
  const data = [
    { title: "안녕하세요 ! 1", content: "가입인사 드립니다 !", iamges: [] },
    { title: "안녕하세요 ! 2", content: "가입인사 드립니다 !", iamges: [] },
    { title: "안녕하세요 ! 3", content: "가입인사 드립니다 !", iamges: [] },
  ];

  return (
    <div className="card-container">
      {data.map((element) => {
        return (
          <div className="card-box">
            <div className="card-profile">제목: {element.title} </div>
            <div className="card-contents">
              <div className="card-text"></div>
              <div className="card-images"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
