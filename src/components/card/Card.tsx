import React from "react";

import "./style/Card.scss";
import { Link } from "react-router-dom";

const Card = () => {
  const data = [
    {
      id: 1,
      title: "안녕하세요 ! 반갑습니다 ! 정말루요 ~ 안녕하세요 ! 반갑습니다 ! 정말루요 ~",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. !",
      iamges: [
        "http://via.placeholder.com/100",
        "http://via.placeholder.com/100",
        "http://via.placeholder.com/100",
      ],
    },
    {
      id: 2,
      title: "안녕하세요 ! 2",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. !",
      iamges: [
        "http://via.placeholder.com/150",
        "http://via.placeholder.com/150",
        "http://via.placeholder.com/150",
      ],
    },
    {
      id: 3,
      title: "안녕하세요 ! 3",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. !",
      iamges: [
        "http://via.placeholder.com/200",
        "http://via.placeholder.com/200",
        "http://via.placeholder.com/200",
      ],
    },
  ];

  return (
    <div className="card-container">
      {data.map((element, index) => {
        return (
          <>
            <div className="card-box">
              <div className="card-header">
                <span className="card-profile">
                  <Link to={`/detail/${element.id}`}>{element.title}</Link>{" "}
                </span>
                <span>
                  <Link to=""> 자유게시판 </Link>
                </span>
              </div>
              <div className="card-contents">
                <div className="card-text">{element.content}</div>
                <div className="card-images">
                  {element.iamges.length > 0
                    ? element.iamges.map((s) => (
                        <span>
                          <img src={s} />
                        </span>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
