import React from "react";

const Comparison = ({ compareList }) => {
  return (
    <div className="compare-grid">
      {compareList.map((item) => (
        <div key={item.name}>
          <div className="row compare-details">
            <div
              className={
                item.onLeft
                  ? "pull-left col-md-6 col-sm-12 img-left"
                  : "push-right col-md-6 col-sm-12 img-right"
              }
            >
              <a href={item.amazonLink}>
                <img src={item.imageUrl} alt={item.name} className="" />
              </a>
            </div>

            <div
              className={
                item.onLeft
                  ? "push-right col-md-6 col-sm-12 img-right"
                  : "pull-left col-md-6 col-sm-12 img-left"
              }
            >
              <h4>
                {item.name}
                {/* - £{item.price} */}
              </h4>

              <p>{item.description}</p>
              {item.features && (
                <ul>
                  {item.features.map((feature) => (
                    <li key={feature.name}>
                      {feature.name}: {feature.description}
                    </li>
                  ))}
                </ul>
              )}

              <a
                href={item.amazonLink}
                target="_blank"
                className="btn btn-lg btn-primary"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Comparison;
