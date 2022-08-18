import React from "react";
import "./Modal.css";
import Feature from "./Feature";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Modal = ({ data, close }) => {
  const {
    name,
    species,
    abilities,
    stats,
    base_experience


  } = data;

  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };

  const imageVariants = {
    open: { opacity: 1, y: "0vh" },
    closed: { opacity: 0, y: "-10vh" },
  };

  const modalInfoVariants = {
    open: { opacity: 1, transition: { staggerChildren: 0.2 } },
    closed: { opacity: 0 },
  };

  const modalRowVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  };

  return (
    <motion.div
      className="modal"
      variants={modalVariants}
      onClick={(e) => e.stopPropagation()}
    >
      <motion.img
        className="modal__image"
        alt="real estate mansion"
        src={data.sprites.other.dream_world.front_default}
        variants={imageVariants}
      ></motion.img>
      <motion.div className="modal__info" variants={modalInfoVariants}>
        <motion.div className="modal__row" variants={modalRowVariants}>
          <span className="modal__price">{name}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>        
          <span className="modal__address">base exp:{base_experience}</span>
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>        
        <span className="modal__address">{stats[0].stat.name}:{stats[0].base_stat}</span> 
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>        
        <span className="modal__address">{stats[1].stat.name}:{stats[1].base_stat}</span> 
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>        
        <span className="modal__address">{stats[2].stat.name}:{stats[2].base_stat}</span> 
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>        
        <span className="modal__address">{stats[3].stat.name}:{stats[3].base_stat}</span> 
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>        
        <span className="modal__address">{stats[4].stat.name}:{stats[4].base_stat}</span> 
        </motion.div>
        <motion.div className="modal__row" variants={modalRowVariants}>        
        <span className="modal__address">{stats[5].stat.name}:{stats[5].base_stat}</span> 
        </motion.div>
      
        <motion.div className="modal__row" variants={modalRowVariants}>
       
           </motion.div>
           <motion.div className="modal__row" variants={modalRowVariants}>
        <span className="modal__row">{stats[0].stat.name}:{stats[0].base_stat}</span> 
           </motion.div>
        <motion.div
          className="modal__description-wrapper"
          variants={modalRowVariants}
        >
        
        
        </motion.div>
        <motion.button
          className="modal__close-wrapper"
          whileHover={{ scale: 1.2 }}
          onClick={close}
        >
          <IoCloseCircleOutline className="modal__close-icon" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
