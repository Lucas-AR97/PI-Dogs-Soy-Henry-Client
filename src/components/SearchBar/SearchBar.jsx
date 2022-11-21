import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogsByName } from "../../redux/actions";
import styles from "./SearchBar.module.css";
import MaterialIcon, { colorPalette } from 'material-icons-react';

export default function SearchBar() {
  const [dogState, setDogsState] = useState("");
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    if (dogState.length === 0) {
      return alert("Please input a name to start the search");
    } else {
      dispatch(getDogsByName(dogState));
      setDogsState("");
    }
  }

  return (
    <div className={styles.searchBox} autocomplete="off" spellcheck="false">
      <input
        type="text"
        spellcheck="false"
        autoComplete="off"
        placeholder="Search a dog..."
        className={styles.searchText}
        value={dogState}
        onChange={(e) => setDogsState(e.target.value)}
      />
      <button type="submit" className={styles.searchBtn} onClick={handleClick}>
        <MaterialIcon icon="search" size='14px' color={colorPalette.grey._200}/>
      </button>
    </div>
  );
}
