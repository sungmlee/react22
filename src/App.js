import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import Detail from "./components/Detail";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("12"); // 선택된 필터 초기값
  useEffect(() => {
    console.log(`Selected Filter Changed: ${selectedFilter}`); // 선택된 필터 확인
  }, [selectedFilter]);

  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
          <Filters onFilterSelect={setSelectedFilter}/>
          
          {/* Routes 설정 */}
          <Routes>
            <Route path="/" element={<Rentals selectedFilter={selectedFilter}/>} /> {/* 기본 페이지 */}
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
          
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;