import React, { ReactNode } from "react";
import styles from "./Card.module.css";

const Card = ({ children }: React.PropsWithChildren<ReactNode>) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
