import React from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
  },
];

function Galery() {
  return (
    <div className="galery">
      <ImageGallery showNav="true" lazyLoad="true" items={images} />
    </div>
  );
}

export default Galery;
