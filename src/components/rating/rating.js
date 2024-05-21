import React from "react";
import "./rating.css";
import img1 from "../../components/assests/p1.png";
import img2 from "../../components/assests/p2.png";
import img3 from "../../components/assests/p3.png";
import img4 from "../../components/assests/p4.png";

const rating = () => {
  return (
    <div className="rating">
      <div className="rating-u">
        <h2>Trusted by thousands of users around the world</h2>
      </div>
      <div className="rating-d">
        <div className="star">
          <img src={img1} alt="" />
          <div>
            <div className="rating-stars">
              <img src={img4} alt="" />
            </div>
            <div>4.5 Score, 9 Reviews</div>
          </div>
        </div>

        <div className="star">
          <img src={img2} alt="" />

          <div>
            <div className="rating-stars">
              <img src={img4} alt="" />
            </div>
            <div>4.5 Score, 9 Reviews</div>
          </div>
        </div>

        <div className="star">
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <div className="rating-stars">
              <img src={img4} alt="" />
            </div>
            <div>4.5 Score, 9 Reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rating;
