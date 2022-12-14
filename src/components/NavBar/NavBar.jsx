import React, { Fragment } from "react";
import Logo from "../../assets/favicon-32x32.png";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <Fragment>
      <div className={styles.nav}>
      <div className={styles.TitleAndSearchBar}>
        <div className={styles.logoAndTitle}>
          <Link to="/home">
            <img
              id="logoHenry"
              src={Logo}
              alt="a happy dog's logo'"
              className={styles.logo}
            />
          </Link>
          <div>
            <h1>PI Dogs</h1>
            <p>The dog's page</p>
          </div>
        </div>
        <div>
          <SearchBar />
        </div>
      </div>
      </div>
    </Fragment>
  );
}
