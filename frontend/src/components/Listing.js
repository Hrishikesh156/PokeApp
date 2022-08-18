import React from "react";
import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Listing = ({ data, open }) => {
  const { name,types} =
    data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img
            className="listing__image"
            alt="real estate mansion"
            src={data.sprites.other.dream_world.front_default}
          />
        </div>
        <div className="listing__details">
        
          <div className="listing__row">
            <span className="listing__price">{name}</span>
          </div>
          <div className="listing__row">
            <span className="listing__address">type:{types[0].type.name}</span>
          </div>
          <div className="listing__row">
        
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
