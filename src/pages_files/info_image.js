import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./info_image.scss";
import No_result from "../components/mainPageItems/mahsulotlar/no_result";
 

export default function Info_image() {
  const { id, tarif, img_url, price, furniture_name } = useParams();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="info_image_grp">
      <img
        src={`https://adminserenmebeluz.azurewebsites.net/${img_url}`}
        alt="Bu mebel rasmi"
      />
      <div className="info_in_grp">
        <p className="infoimg_ttl"> {furniture_name}</p>
        <p>{tarif}</p>
        {/* {featuresArray.map((r, index) => (
          <p className="infoimg_uzunlik" key={index}>
            <span>{r.name}:</span> {r.value}{" "}
          </p>
        ))} */}
        <p className="infoimg_narxi">
          <span>Narxi:</span> {price}
        </p>
      </div>
      <No_result />
    </div>
  );
}
