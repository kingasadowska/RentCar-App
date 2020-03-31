import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from '../Button/Button';
import Title from '../Title/Title';

const ListItem = ({ image, name, description, link }) => {
  const ImageTag = image ? "img" : "div";

  return (
    <li className={styles.wrapper}>
       {image && 
       <ImageTag
        src={image} 
        className={image ? styles.image : styles.imageNone} 
        alt={name}
      />}
      <div>
        <Title>{name}</Title>
        <p className={styles.description}>{description}</p>
        <Button
          href={link}
        >
          rent now
        </Button>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string
};

ListItem.defaultProps = {
  image: null,
  link: null,
};

export default ListItem;
