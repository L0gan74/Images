import { useParams } from "react-router-dom";
import style from "./style.module.css";
import { useGetCountriesNameQuery } from "../../store/services/api";

const CountrieId = () => {
  const { common } = useParams();
  const { data: country } = useGetCountriesNameQuery(common);
  console.log(country);

  return (
    <div className={style.wrapper}>
      <h1>ID: {common}</h1>
      <h2 className={style.main}>{country?.title}</h2>
      <img src={country?.url} alt="img" />
    </div>
  );
};

export default CountrieId;
