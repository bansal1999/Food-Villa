import { IMG_CDN_URL } from "../config";

// Restaurant card component: Image, name, cuisine
const FoodItem = ({ cloudinaryImageId, name, description, price }) => {
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg bg-pink-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold xl">{name}</h2>
      <h4>{description}</h4>
      <h4>Rupees: {price / 100}</h4>
    </div>
  );
};

export default FoodItem;
