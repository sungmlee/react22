import React,{useEffect, useState} from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
import house5 from "../assets/house5.jpg";
import Rental from "./Rental";
import { useNavigate } from "react-router-dom";




const Rentals = ({selectedFilter}) => {
  const [rentalsData, setRentalsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Fetching data for selectedFilter: ${selectedFilter}`); // 확인용 로그

    (async () => {
      try {
        const response = await fetch(
          `https://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=zpYA%2B19CNaoSTwWhy89DCHqPKJwzBCgIoEaYq2uYZrnU3SCYP96eO6WxAWE8eJsq7sCDZMtR8iRiK3bDHWho4w%3D%3D&MobileApp=AppTest&MobileOS=ETC&listYN=Y&arrange=A&contentTypeId=${selectedFilter}&areaCode=34&sigunguCode=12&_type=json&numOfRows=30&pageNo=1`
        );

        const json = await response.json();
        const items = json.response.body.items.item;
        console.log(items)
        setRentalsData(items);
      } catch (error) {
        console.error("Failed to fetch rentals data:", error);
      }
    })();
  }, [selectedFilter]);

  
  const images = [house1, house2, house3, house4, house5];
  
  const handleCardClick = (item) => {
    // `state`를 통해 `Detail` 페이지로 데이터를 전달하며 이동
    navigate(`/detail/${item.contentid}`, { state: { item } });
  };
  
  
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {rentalsData.map((item,index) => (
          <Rental
            key={item.contentid}
            title={item.title}
            image={item.firstimage }
            price="1541"
            onClick={() => handleCardClick(item)} // 클릭 시 handleCardClick 호출
          />
        ))}
      </div>

    
      
    </div>

    
  );
};

export default Rentals;
