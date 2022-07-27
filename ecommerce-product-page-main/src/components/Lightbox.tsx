import { useState } from "react";
import { ReactComponent as IconNext } from "../../public/icon-next.svg";
import { ReactComponent as IconPrevious } from "../../public/icon-previous.svg";

const createImageUri = (imageUri: string) => {
  return new URL(imageUri, import.meta.url).href;
};

const Lightbox = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isShowingLightbox, setIsShowingLightbox] = useState(false);

  const changeImage = (direction: string) => {
    const index = images.indexOf(mainImage);

    if (index === images.length - 1 && direction === "next") {
      return setMainImage(images[0]);
    }
    if (index === 0 && direction === "previous") {
      return setMainImage(images[images.length - 1]);
    }

    if (direction === "next") {
      return setMainImage(images[index + 1]);
    } else {
      return setMainImage(images[index - 1]);
    }
  };

  const activeImageStyle = `border-2 border-orange-400 h-1/5 w-1/5 rounded opacity-75`;
  const inactiveStyle = `h-1/5 w-1/5 rounded cursor-pointer`;

  const lightBoxStyle = isShowingLightbox
    ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10"
    : "hidden";

  return (
    <section className="mx-8 select-none">
      <div className={lightBoxStyle}>
        <div className="max-w-[550px] flex flex-col mx-auto my-36">
          <div className="flex flex-row justify-center static">
            <div
              onClick={() => changeImage("previous")}
              className="bg-white rounded-full h-8 w-8 absolute pl-2 pt-2 mt-[265px] mr-[555px] cursor-pointer"
            >
              <IconPrevious />
            </div>
            <img
              className="rounded-3xl"
              src={mainImage}
              alt="Main product image"
            />
            <div
              onClick={() => changeImage("next")}
              className="bg-white rounded-full h-8 w-8 absolute pl-3 pt-2 mt-[265px] ml-[555px] cursor-pointer"
            >
              <IconNext />
            </div>
            <div
              onClick={() => setIsShowingLightbox(false)}
              className="text-orange-400 text-2xl font-bold absolute ml-[555px] -mt-[30px] cursor-pointer"
            >
              X
            </div>
          </div>

          <div className="flex flex-row justify-between mt-6">
            {images.map((image, index) => (
              <img
                className={
                  image === mainImage ? activeImageStyle : inactiveStyle
                }
                key={image}
                src={createImageUri(image)}
                alt={`Product image ${index + 1}`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[550px]" onClick={() => setIsShowingLightbox(true)}>
        <img className="rounded-3xl" src={mainImage} alt="Main product image" />
        <div className="flex flex-row justify-between mt-6">
          {images.map((image, index) => (
            <img
              className={image === mainImage ? activeImageStyle : inactiveStyle}
              key={image}
              src={createImageUri(image)}
              alt={`Product image ${index + 1}`}
              onClick={() => setMainImage(image)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lightbox;
