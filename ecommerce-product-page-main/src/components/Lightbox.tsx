import { useState } from "react";
import { ReactComponent as IconNext } from "../../public/icon-next.svg";
import { ReactComponent as IconPrevious } from "../../public/icon-previous.svg";

const createImageUri = (imageUri: string) => {
  return new URL(imageUri, import.meta.url).href;
};

const Lightbox = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);
  const [isShowingLightbox, setIsShowingLightbox] = useState(false);

  // Not using arrows cause they are worse UX than just clicking the images below
  //   const changeImage = (direction: string) => {
  //     const index = images.indexOf(mainImage);

  //     if (index === images.length - 1 && direction === "next") {
  //       return setMainImage(images[0]);
  //     }
  //     if (index === 0 && direction === "previous") {
  //       return setMainImage(images[images.length - 1]);
  //     }

  //     if (direction === "next") {
  //       return setMainImage(images[index + 1]);
  //     } else {
  //       return setMainImage(images[index - 1]);
  //     }
  //   };

  const activeImageStyle = `border-2 border-orange-400 h-1/5 w-1/5 lg:rounded opacity-75`;
  const inactiveStyle = `h-1/5 w-1/5 rounded cursor-pointer`;

  const lightBoxStyle = isShowingLightbox
    ? "fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-10 px-5 overscroll-hidden duration-500"
    : "hidden";

  const getCurrentBreakpoint = (): string => {
    const breakpointUnknown: string = "unknown";
    const breakpointSM: string | null =
      document.getElementById("breakpoint-sm")?.offsetParent === null
        ? null
        : "sm";
    const breakpointMD: string | null =
      document.getElementById("breakpoint-md")?.offsetParent === null
        ? null
        : "md";
    const breakpointLG: string | null =
      document.getElementById("breakpoint-lg")?.offsetParent === null
        ? null
        : "lg";
    const breakpointXL: string | null =
      document.getElementById("breakpoint-xl")?.offsetParent === null
        ? null
        : "xl";
    const breakpoint2XL: string | null =
      document.getElementById("breakpoint-2xl")?.offsetParent === null
        ? null
        : "2xl";
    const breakpoint =
      breakpointSM ??
      breakpointMD ??
      breakpointLG ??
      breakpointXL ??
      breakpoint2XL ??
      breakpointUnknown;
    return breakpoint;
  };

  const activateLightbox = () => {
    const breakpoint = getCurrentBreakpoint();
    const desktopBreakpoints: string[] = ["sm", "md", "lg", "xl", "2xl"];
    if (desktopBreakpoints.includes(breakpoint)) {
      return setIsShowingLightbox(true);
    } else {
      return;
    }
  };

  return (
    <div className="select-none max-w-[450px] mx-auto">
      <div
        id="breakpoint-sm"
        className="hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden w-0 h-0"
      ></div>
      <div
        id="breakpoint-md"
        className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden w-0 h-0"
      ></div>
      <div
        id="breakpoint-lg"
        className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden w-0 h-0"
      ></div>
      <div
        id="breakpoint-xl"
        className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden w-0 h-0"
      ></div>
      <div
        id="breakpoint-2xl"
        className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block w-0 h-0"
      ></div>
      <div className={lightBoxStyle}>
        <div className="flex flex-col mx-auto my-36 max-w-[500px]">
          <div className="flex flex-row justify-center ">
            {/* <div
              onClick={() => changeImage("previous")}
              className="bg-white rounded-full h-8 w-8 absolute pl-2 pt-2 mt-[265px] mr-[555px] cursor-pointer"
            >
              <IconPrevious />
            </div> */}
            <img
              className="rounded-3xl "
              src={mainImage}
              alt="Main product image"
            />
            {/* <div
              onClick={() => changeImage("next")}
              className="bg-white rounded-full h-8 w-8 absolute pl-3 pt-2 mt-[265px] ml-[555px] cursor-pointer"
            >
              <IconNext />
            </div> */}
            <div
              onClick={() => setIsShowingLightbox(false)}
              className="text-orange-400 text-2xl font-bold relative -top-8 -left-2 cursor-pointer"
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

      <div className="max-w-[550px]" onClick={() => activateLightbox()}>
        <img
          className="lg:rounded-3xl"
          src={mainImage}
          alt="Main product image"
        />
        <div className="flex flex-row justify-between mx-2 lg:mx-0 mt-6">
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
    </div>
  );
};

export default Lightbox;
