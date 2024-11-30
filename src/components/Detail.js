// Detail.js
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Detail.css"; // CSS 파일 불러오기

const Detail = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const [DetailData, setDetailData] = useState(null);

  useEffect(() => {
    if (item && item.contentid) {
      (async () => {
        try {
          const response = await fetch(
              `https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=zpYA%2B19CNaoSTwWhy89DCHqPKJwzBCgIoEaYq2uYZrnU3SCYP96eO6WxAWE8eJsq7sCDZMtR8iRiK3bDHWho4w%3D%3D&MobileApp=AppTest&MobileOS=ETC&pageNo=1&numOfRows=10&contentId=${item.contentid}&defaultYN=Y&addrinfoYN=Y&overviewYN=Y&_type=json`
            );
          const json = await response.json();
          const DetailData_api = json.response.body.items.item[0];
          setDetailData(DetailData_api);
          console.log(DetailData_api.overview)

        } catch (error) {
          console.error("Failed to fetch detail data:", error);
        }
      })();
    }
  }, [item]);
  if (!item) return <p>데이터를 불러올 수 없습니다.</p>;
  
  return (
    <div className="detail-container">
      
      {item.firstimage && (
        <img src={item.firstimage} alt={item.title} className="detail-image" />
      )}
      <h1 className="detail-title">{item.title}</h1>
      <p className="detail-info">
        <span>주소:</span> {item.addr1}
      </p>
      <p className="detail-info">
        <span>우편번호:</span> {item.zipcode}
      </p>
      <p className="detail-info">
        <span>전화번호:</span> {item.tel || "정보 없음"}
      </p>
      <p className="detail-info">
        <span>위치:</span> {item.mapx}, {item.mapy}
      </p>


      {/* 추가 정보 섹션 */}
      {DetailData && DetailData.overview && (
        <div className="detail-additional">
          <h2 className="detail-additional-title">추가 정보</h2>
          <p className="detail-text">{DetailData.overview}</p>
        </div>
      )}
    </div>
  );
};

export default Detail;
