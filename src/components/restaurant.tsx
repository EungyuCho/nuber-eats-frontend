import React from "react";

interface IRestaurantProps {
  id: string;
  coverImg: string;
  name: string;
  categoryName?: string;
}

export const Restaurant: React.FC<IRestaurantProps> = ({
  coverImg,
  name,
  categoryName,
}) => (
  <div className="flex flex-col">
    <div
      style={{ backgroundImage: `url(${coverImg})` }}
      className="bg-red-500 bg-cover bg-center mb-3 py-28"
    ></div>
    <h3 className="text-lg font-semibold">{name}</h3>
    <span className="border-t border-gray-400 mt-3 py-2 text-xs opacity-50">
      {categoryName}
    </span>
  </div>
);
