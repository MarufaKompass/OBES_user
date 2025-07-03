import image1 from "../../../public/images/home/gallery1.jpg"
import image2 from "../../../public/images/home/gallery6.jpg"
import image3 from "../../../public/images/home/gallery10.jpg"
import image4 from "../../../public/images/home/gallery4.jpg"
import image5 from "../../../public/images/home/gallery5.jpg"
import image6 from "../../../public/images/home/gallery2.jpg"


const images = [
  { src: image1, colSpan: 1, rowSpan: 2 },
  { src: image2, colSpan: 1, rowSpan: 2 },
  { src: image3, colSpan: 1, rowSpan: 1 },
  { src: image4, colSpan: 2, rowSpan: 2 },
  { src: image5, colSpan: 1, rowSpan: 1 },
  { src: image6, colSpan: 1, rowSpan: 1 },
  // { src:  "../../../public/images/home/gallery7.jpg", colSpan: 1, rowSpan: 1 },
  // { src: "../../../public/images/home/gallery8.jpg", colSpan: 1, rowSpan: 2 },
  // { src: "../../../public/images/home/gallery9.jpg", colSpan: 1, rowSpan: 1 },
  // { src: "../../../public/images/home/gallery10.jpg", colSpan: 1, rowSpan: 1 },
];

const ImageGallery = () => {
  return (
<div className="">
    <div className="container py-12">
         <h2 className="text-[28px] font-bold md:text-[38px] leading-10 tracking-normal py-8 text-center" style={{fontFamily:'poppins'}}>
              Bangladesh Endocrine Society
            </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
          
            className={`${
              index === 0 || index === 5 
                ? 'col-span-2 row-span-2' 
                : 'col-span-1 row-span-2' 
            } overflow-hidden rounded-lg shadow-md`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default ImageGallery;
