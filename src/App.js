import React, { useState } from "react";
import MarketData from "./components/MarketData";
import Pagination from "./components/Pagination";
import "./App.css";
function App() {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Market Data</h1>
      </header>
      <main>
        <h2>Company Name: AAPL</h2>
        <MarketData currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="pagination">
          <Pagination onNext={handleNextPage} onPrev={handlePrevPage} />
        </div>
      </main>
    </div>
  );
}

export default App;
