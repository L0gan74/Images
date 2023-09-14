import React from "react";
import styles from "./main.module.css";
import { useGetCountriesAllQuery } from "../../store/services/api";
import Pagination from "../components/pagination/pagination";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const { data: countries, isLoading, error } = useGetCountriesAllQuery(" ");

  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        {error ? (
          <h2>Ошибка</h2>
        ) : isLoading ? (
          <h2>Загрузка...</h2>
        ) : countries ? (
          <>
            {countries?.map((country) => (
              <Link to={`/${country.id}`} key={country.id}>
                <div className={styles.item}>
                  <img src={country.url} alt="img" />
                  <h3>{country.title}</h3>
                </div>
              </Link>
            ))}
          </>
        ) : null}
      </div>
      {/* <Pagination data={data} /> */}
    </div>
  );
};

export default Main;
