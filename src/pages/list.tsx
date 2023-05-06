import React from "react";
import Button from "../components/button/button";

import "./list.scss";

const ListItem: React.FC<{
  img: string;
  title: string;
  subtitle: string;
  star: number;
  distance: number;
}> = ({ img, title, subtitle, star, distance }) => {
  const addToBasket = () => {};
  return (
    <>
      <div className="list-item-container">
        <div className="img-container">
          <img src={img} alt="No-img-found" />
        </div>
        <div className="info-container">
          <span className="title">{title}</span>
          <span className="sub-title">{subtitle}</span>
          <div className="star-distance-container">
            <span>
              <img src="star.png" alt="No-img-found" />
              {star}
            </span>
            <span>
              <img src="location.png" alt="No-img-found" />
              {distance} km
            </span>
          </div>
          <div className="add-to-basket-container">
            <img
              width={13.34}
              height={18.33}
              src="basket.png"
              alt="No-img-found"
            />
            <Button type="outlined" text="SEPETE EKLE" onClick={addToBasket} />
          </div>
        </div>
      </div>
    </>
  );
};

const List: React.FC<{}> = (props) => {
  const list = [
    {
      title: "Villa Bosphurus",
      subTitle: "Lorem İpsum Dolor Sit Amet",
      star: 3.9,
      distance: 5.8,
      img: "placeholder.png",
    },
    {
      title: "Villa Bosphurus",
      subTitle: "Lorem İpsum Dolor Sit Amet",
      star: 3.9,
      distance: 5.8,
      img: "placeholder.png",
    },
    {
      title: "Villa Bosphurus",
      subTitle: "Lorem İpsum Dolor Sit Amet",
      star: 3.9,
      distance: 5.8,
      img: "placeholder.png",
    },
  ];
  return (
    <div className="list-container">
      {list?.map((listItem) => (
        <ListItem
          title={listItem.title}
          subtitle={listItem.subTitle}
          star={listItem.star}
          distance={listItem.distance}
          img={listItem.img}
        />
      ))}
      <div className="product-detail-container">
        <span className="title">Ürünlerin toplamı</span>
        <span className="total">Toplam: 124.98 TL</span>
        <span className="tax-cargo">Vergiler+Kargo: 21.45 TL</span>
        <span className="general-total">Genel Toplam: 145.8 TL</span>
      </div>
    </div>
  );
};

export default List;
