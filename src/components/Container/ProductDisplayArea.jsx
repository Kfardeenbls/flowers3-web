import React from "react";
import data from "../../../src/images.json";
import classes from "./ProductDisplayArea.module.css";

const ProductDisplayArea = () => {
  return (
    <div className={classes.maincontainer}>
      <h1 className={classes.Heading}>Shining Star</h1>
      <h3 className={classes.SubHeading}>Better flowers. Lower prices.</h3>{" "}
      <br />
      <p className={classes.Description}>
        Propelled by our affection for flowers and energy about nature, it is
        our obsession to make creative and noteworthy plant and new flower
        courses of action. We trust that the best, freshest flowers deliver the
        most noteworthy presentations. <br />
        <strong> ‘Shining Star’ </strong>is glad to give quality flowers and
        plants to our customers. Our retail premises opened in 2012 after much
        interest from the London open who respected our orchids at the Chelsea
        Flower Show.
      </p>
      <div className={`${classes.imageContainer} main`}>
        <div className="menu-items container-fluid mt-5">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row my-5">
                {data &&
                  data.map((img1) => {
                    return (
                      <div
                        className="Item1 col-12 col-md-6 col-lg-6 col-xl-3 my-5"
                        key={img1.id}
                      >
                        <a href="./">
                          <img
                            className={classes.images}
                            src={img1.path}
                            alt=""
                          />
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayArea;
