const images = [
  { src: "../../../public/images/home/gallery1.jpg", colSpan: 1, rowSpan: 2 },
  { src: "../../../public/images/home/gallery6.jpg", colSpan: 1, rowSpan: 2 },
  { src: "../../../public/images/home/gallery10.jpg", colSpan: 1, rowSpan: 1 },
  { src: "../../../public/images/home/gallery4.jpg", colSpan: 2, rowSpan: 2 },
  { src: "../../../public/images/home/gallery5.jpg", colSpan: 1, rowSpan: 1 },
  { src: "../../../public/images/home/gallery2.jpg", colSpan: 1, rowSpan: 1 },
  // { src:  "../../../public/images/home/gallery7.jpg", colSpan: 1, rowSpan: 1 },
  // { src: "../../../public/images/home/gallery8.jpg", colSpan: 1, rowSpan: 2 },
  // { src: "../../../public/images/home/gallery9.jpg", colSpan: 1, rowSpan: 1 },
  // { src: "../../../public/images/home/gallery10.jpg", colSpan: 1, rowSpan: 1 },
];

const ImageGallery = () => {
  return (
<div className="">
    <div className="container py-12">
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
