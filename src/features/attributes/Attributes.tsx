import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  increaseDex,
  decreaseDex,
  increaseStr,
  decreaseStr,
  selectAttribute,
  decreaseChar,
  decreaseConst,
  decreaseInt,
  decreaseWis,
  increaseChar,
  increaseConst,
  increaseInt,
  increaseWis,
} from "./attributeSlice";

import styles from "../counter/Counter.module.css";

interface AttributesProps {}

const Attributes = () => {
  const attCount = useAppSelector(selectAttribute);
  const { dexterity, constitution, intelligence, strength, charisma, wisdom } = attCount;
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <span className={styles.value}>dexterity: {dexterity}</span>
        <button className={styles.button} onClick={() => dispatch(increaseDex(dexterity))}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decreaseDex(dexterity))}>
          -
        </button>
      </div>
      <div>
        <span className={styles.value}>strength: {strength}</span>
        <button className={styles.button} onClick={() => dispatch(increaseStr(strength))}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decreaseStr(strength))}>
          -
        </button>
      </div>
      <div>
        <span className={styles.value}>constitution: {constitution}</span>
        <button className={styles.button} onClick={() => dispatch(increaseConst(constitution))}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decreaseConst(constitution))}>
          -
        </button>
      </div>
      <div>
        <span className={styles.value}>wisdom: {wisdom}</span>
        <button className={styles.button} onClick={() => dispatch(increaseWis(wisdom))}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decreaseWis(wisdom))}>
          -
        </button>
      </div>
      <div>
        <span className={styles.value}>intelligence: {intelligence}</span>
        <button className={styles.button} onClick={() => dispatch(increaseInt(intelligence))}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decreaseInt(intelligence))}>
          -
        </button>
      </div>
      <div>
        <span className={styles.value}>charisma: {charisma}</span>
        <button className={styles.button} onClick={() => dispatch(increaseChar(charisma))}>
          +
        </button>
        <button className={styles.button} onClick={() => dispatch(decreaseChar(charisma))}>
          -
        </button>
      </div>
    </>
  );
};

export default Attributes;
