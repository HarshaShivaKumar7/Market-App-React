import React, { useState, useEffect } from "react";
import "./MarketData.css";

const MarketData = ({ currentPage }) => {
  const [marketData, setMarketData] = useState([]);
  const itemsPerPage = 7;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://f68370a9-1a80-4b78-b83c-8cb61539ecd6.mock.pstmn.io/api/v1/get_market_data/"
        );
        const data = await response.json();
        setMarketData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getColor = (open, close) => {
    if (open === close) return "black";
    if (open < close) return "green";
    return "red";
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return marketData.slice(startIndex, endIndex);
  };

  const renderTableHeader = () => {
    return (
      <tr>
        <th>Date</th>
        {getPageData().map((item) => {
          const formattedDate = new Date(item.date).toLocaleDateString("en-GB");
          return <th key={item.date}>{formattedDate}</th>;
        })}
      </tr>
    );
  };

  const renderTableData = () => {
    return (
      <React.Fragment>
        <tr>
          <td className="label-cell">Open</td>
          {getPageData().map((item) => (
            <td
              key={item.date}
              className="data-cell"
              style={{ color: getColor(item.open, item.close) }}
            >
              {item.open}
            </td>
          ))}
        </tr>
        <tr>
          <td className="label-cell">Close</td>
          {getPageData().map((item) => (
            <td
              key={item.date}
              className="data-cell"
              style={{ color: getColor(item.open, item.close) }}
            >
              {item.close}
            </td>
          ))}
        </tr>
      </React.Fragment>
    );
  };

  return (
    <div className="market-data-container">
      <div className="market-data-table">
        <table>
          <tbody>
            {renderTableHeader()}
            {renderTableData()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketData;
