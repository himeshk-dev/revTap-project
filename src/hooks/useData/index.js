// import  from "react";
import DATA from "../../data/db.json";
const useData = () => {
  const { customers, orders } = DATA;
  return { customers, orders };
};

export default useData;
