import React, { useState } from "react";
import "../CSS/gallery.css";
import { IoMdClose } from "react-icons/io";
import { watercolours } from "../../data/watercolours";

//ALTERNATIVE COMPONENT - with different layout in case I want to change the gallery look

const WatercolourGallery = () => {
  const [modal, setmodal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (ImgSrc) => {
    setTempImgSrc(ImgSrc);
    setmodal(true);
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImgSrc} />
        <IoMdClose onClick={() => setmodal(false)} />
      </div>

      <div className="WatercolourGallery">
        {watercolours.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item)}>
              <img
                src={item.image}
                alt={`Watercolour ${index + 1}`}
                style={{
                  width: "100%",
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WatercolourGallery;
