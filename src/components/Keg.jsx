import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <div>
      <h3>{props.name} - {props.type}</h3>
      <p><em>{props.abv}</em></p>
      <h3>Juice Smoothie ipa</h3>
      <hr/>
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.string
};

export default Keg;
