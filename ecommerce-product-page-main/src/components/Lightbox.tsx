import { useState } from "react";

const createImageUri = (imageUri: string) => {
  return new URL(imageUri, import.meta.url).href;
};

const Lightbox = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <section className="m-8">
      <img className="rounded-3xl" src={mainImage} alt="Main product image" />
      <div className="flex flex-row justify-between mt-6">
        {images.map((image, index) => (
          <img
            className="h-20 w-20 rounded"
            key={image}
            src={createImageUri(image)}
            alt={`Product image ${index + 1}`}
            onClick={() => setMainImage(image)}
          />
        ))}
      </div>
    </section>
  );
};

export default Lightbox;
