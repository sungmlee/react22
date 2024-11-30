import React from "react";
import { GiFishingBoat, GiMineExplosion } from "react-icons/gi";
import { ImKey } from "react-icons/im";
import { RiAliensFill } from "react-icons/ri";
import { BsFillTreeFill } from "react-icons/bs";
import Filter from "./Filter";

const Filters = ({ onFilterSelect }) => {
  const sorting = [
    { title: "관광지", icon: <GiFishingBoat />, type: 12 },
    { title: "문화시설", icon: <GiMineExplosion />, type: 14 },
    { title: "행사/공연/축제", icon: <RiAliensFill />, type: 15 },
    { title: "레포츠", icon: <BsFillTreeFill />, type: 28 },
    { title: "숙박", icon: <GiFishingBoat />, type: 32 },
    { title: "쇼핑", icon: <GiMineExplosion />, type: 38 },
    { title: "음식점", icon: <RiAliensFill />, type: 39 },
  ];

  return (
    <div className="flex justify-start gap-3 sm:gap-4 mt-4">
      {sorting.map((filter,index) => (
        <Filter
          key={filter.type}
          title={filter.title}
          icon={filter.icon}
          onClick={() => {
            onFilterSelect(filter.type);
          }}
        />
      ))}
    </div>
  );
};
export default Filters;