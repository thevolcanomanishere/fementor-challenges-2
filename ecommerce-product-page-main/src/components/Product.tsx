import Lightbox from "./Lightbox";
import ProductInfo, { IProductInfo } from "./ProductInfo";

const Product = () => {
  const images = [
    `/image-product-1.jpg`,
    `/image-product-2.jpg`,
    `/image-product-3.jpg`,
    `/image-product-4.jpg`,
  ];

  const productInfo: IProductInfo = {
    companyName: "Sneaker Company",
    productName: "Fall Limited Edition Sneakers",
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they'll withstand everything
    the weather can offer.`,
    price: 250,
    discountPercentage: 50,
    images,
  };

  return (
    <div className="flex flex-col lg:space-x-20 lg:flex-row mx-auto lg:justify-between lg:mt-20">
      <Lightbox images={images} />
      <ProductInfo productInfo={productInfo} />
    </div>
  );
};

export default Product;
