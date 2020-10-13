import React from "react";
import useData from "./hooks/useData";
import LineChart from "./components/LineChart";
import "./App.css";
import BarChart from "./components/BarChart";
import Table from "./components/Table";

function App() {
  const { customers, orders } = useData();
  return (
    <div className="App">
      <div className="box1">
        <div className="heading">
          <p>Orders Count</p>
        </div>
        <div className="chart-container">
          <BarChart customers={customers} />
        </div>
      </div>
      <div className="box2">
        <div className="heading">
          <p>Orders Total Price</p>
        </div>
        <div className="chart-container">
          <LineChart orders={orders} />
        </div>
      </div>
      <div className="box3">
        <div className="heading">
          <p>Customers</p>
        </div>
        <div className="table-container">
          <Table data={customers} />
        </div>
      </div>
    </div>
  );
}

export default App;
