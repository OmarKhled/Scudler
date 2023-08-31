import React from "react";

const Pagination = ({ length, currentPage, setCurrentPage }) => {
  const previous = (e) => {
    if (
      document.getElementById("pagination").childElementCount * 50 -
        document.getElementById("pagination").offsetWidth ===
      document.getElementById("pagination").scrollLeft
    ) {
      document.querySelector(".pagination").scrollLeft =
        Math.floor(
          (document.getElementById("pagination").childElementCount * 50 -
            document.getElementById("pagination").offsetWidth) /
            50
        ) * 50;
    } else {
      document.querySelector(".pagination").scrollLeft -= 50;
    }
  };
  const after = (e) => {
    if (
      document.getElementById("pagination").scrollLeft === 0 &&
      Math.ceil(document.getElementById("pagination").offsetWidth / 50) * 50 !==
        document.getElementById("pagination").offsetWidth
    ) {
      document.getElementById("pagination").scrollLeft =
        Math.ceil(document.getElementById("pagination").offsetWidth / 50) * 50 -
        document.getElementById("pagination").offsetWidth +
        50;
    } else {
      document.getElementById("pagination").scrollLeft += 50;
    }
  };
  const jumpToStart = () => {
    document.getElementById("pagination").scrollLeft = 0;
  };
  const jumpToEnd = () => {
    document.getElementById("pagination").scrollLeft =
      document.getElementById("pagination").childElementCount * 50 -
      document.getElementById("pagination").offsetWidth;
  };
  const activate = (key) => {
    setCurrentPage(key);
  };
  return (
    <div className="d-flex align-items-center justify-content-center pagination-container">
      <>
        <button onClick={jumpToStart} className="pagination-nav">
          {"‹‹"}
        </button>
        <button onClick={previous} className="pagination-nav">
          {"‹"}
        </button>
      </>

      <div className="pagination my-2" id={"pagination"}>
        {Array.from(Array(length).keys()).map((key) => (
          <button
            id={`${key}`}
            onClick={() => activate(key)}
            className={`pagination-item ${currentPage === key ? "active" : ""}`}
            key={key}
          >
            {key}
          </button>
        ))}
      </div>
      <>
        <button onClick={after} className="pagination-nav">
          {"›"}
        </button>
        <button onClick={jumpToEnd} className="pagination-nav">
          {"››"}
        </button>
      </>
    </div>
  );
};

export default Pagination;
