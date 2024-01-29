import React, { useEffect, useState } from "react";
import "../CSS/gallery.css";
import { IoMdClose } from "react-icons/io";
import { paintings } from "../data/paintings";

const PaintingGallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (item) => {
    if (window.innerWidth > 768) {
      setTempImgSrc(item);
      setModal(true);
    }
  };
  const sortedPaintings = paintings.slice().sort((a, b) => a.id - b.id);

  // // PREVENT RIGHT CLICK
  // useEffect(() => {
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  // const handleContextMenu = (e) => {
  //   e.preventDefault();
  //   console.log("Right click prevent to protect my art");
  // };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        {tempImgSrc && (
          <>
            {" "}
            <div className="flex justify-center items-center w-3/4 h-3/4">
              <p className="m-2 text-lg">{tempImgSrc.name}</p>

              <img className="no-copy-img" src={tempImgSrc.image} />
            </div>
            <IoMdClose onClick={() => setModal(false)} />
          </>
        )}
      </div>

      <div className="galleryPainting w-3/4  mx-auto pt-6 ">
        {sortedPaintings.map((item) => (
          <div className="pics" key={item.id} onClick={() => getImg(item)}>
            <img
              className="no-copy-img py-2"
              src={item.image}
              alt={item.name}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </div>

      {/* //disclaimer */}
      <div className=" flex flex-center justify-center items-center m-10  ">
        <p className="uppercase text-md font-medium text-slate-600">
          Not for printing or resale.
        </p>

        <p className="m-2 text-md text-slate-600">
          Do not repost and do not appropriate art as your own. Remember to
          always credit artists.
        </p>
      </div>
    </>
  );
};

export default PaintingGallery;
