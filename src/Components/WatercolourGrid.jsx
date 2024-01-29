import { watercolours } from "../data/watercolours";
import React, { useState, useEffect } from "react";
import "../CSS/gallery.css";
import { IoMdClose } from "react-icons/io";

const WatercolourGrid = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState({});

  const getImg = (item) => {
    if (window.innerWidth > 768) {
      setTempImgSrc(item);
      setModal(true);
    }
  };

  // PREVENT RIGHT CLICK
  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleContextMenu = (e) => {
    e.preventDefault();
    console.log("Right click prevent to protect my art");
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        {tempImgSrc && (
          <>
            <div
              className="flex justify-center items-center w-3/4
            
            
            "
            >
              <p className=" m-2 text-lg">{tempImgSrc.name}</p>

              <img className="no-copy-img " src={tempImgSrc.image} />
            </div>
            <IoMdClose onClick={() => setModal(false)} />
          </>
        )}
      </div>

      <div
        className="flex flex-wrap justify-between  align-center text-center 
    w-full "
      >
        {watercolours.map((item) => (
          <div
            key={item.id}
            className=" align-left md:cursor-pointer lg:w-1/4 lg:h-1/4 sm:w-1/2 sm:h-1/2 md:w-1/3 md:h-1/3  aspect-square
           
            "
            onClick={() => getImg(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full p-1 h-full object-cover overlay no-copy-img "
              style={{ objectFit: "cover", objectPosition: "center center" }}
            />
          </div>
        ))}
      </div>

      <div className=" flex flex-center justify-center items-center m-6 px-40">
        <p>
          No photoshop or AI involved. © All Pictures are photographed by me,
          with real objects. Please do not appropriate.
        </p>
      </div>
    </>
  );
};

export default WatercolourGrid;
