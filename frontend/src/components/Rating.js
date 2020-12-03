import React from "react";
import PropTypes from "prop-types";

/*
Rating stars:
Each span is an icon for a single star. Hence there are 5 spans for each stars.
In Each span the stars are icons from aesome font which are either fully, half filled or empty.
each star is appropriately chosen based on the props the rating component recieves from the recipe data.
*/

const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                <i
                    style={{ color: color }}
                    className={value >= 1 ? "fas fa-star" : value >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={value >= 2 ? "fas fa-star" : value >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={value >= 3 ? "fas fa-star" : value >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={value >= 4 ? "fas fa-star" : value >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}
                ></i>
            </span>
            <span>
                <i
                    style={{ color: color }}
                    className={value >= 5 ? "fas fa-star" : value >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}
                ></i>
            </span>
            <span className='text-secondary'>{text && text}</span>
        </div>
    );
};

//Setting default Props
Rating.defaultProps = {
    color: "#f8e825",
};
//Setting the propTypes
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Rating;
