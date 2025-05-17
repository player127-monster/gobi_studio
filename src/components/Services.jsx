import frame1 from '../assets/Services/frame1.avif';
import frame2 from '../assets/Services/frame2.avif';
import frame3 from '../assets/Services/frame3.avif';
import model1 from '../assets/Services/model1.webp';
import model2 from '../assets/Services/model2.avif';
import model3 from '../assets/Services/model3.avif';
import portrait1 from '../assets/Services/portrait.avif';
import portrait2 from '../assets/Services/portrait1.avif';
import prewed1 from '../assets/Services/prewed1.avif';
import prewed2 from '../assets/Services/prewed2.avif';
import prewed3 from '../assets/Services/prewed3.avif';
import product1 from '../assets/Services/product1.avif';
import product2 from '../assets/Services/product2.avif';
import product3 from '../assets/Services/product3.avif';
import wed1 from '../assets/Services/wed1.avif';
import wed2 from '../assets/Services/wed2.avif';
import wed3 from '../assets/Services/wed3.avif';
import grad1 from '../assets/Services/grad1.avif';
import grad2 from '../assets/Services/grad2.avif';
import grad3 from '../assets/Services/grad3.avif';
import grad4 from '../assets/Services/grad4.avif';

function ServiceCarousel({ title, images, height, imageWidth }) {
  return (
    <div className="group bg-white w-full relative overflow-hidden rounded-xl">
      <div className="flex w-[200%] md:animate-scroll-horizontal">
        {[...images, ...images].map((img, idx) => (
          <img
            key={idx}
            src={img}
            loading="lazy"
            decoding="async"
            className={`${imageWidth} object-cover`}
            style={{ height: `${height}px` }}
            alt={`${title} image ${idx + 1}`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 z-10">
        <p className="text-4xl text-white md:text-textColor font-bold lg:group-hover:text-white lg:group-hover:text-5xl transition-all duration-700">
          {title}
        </p>
      </div>
    </div>
  );
}

const servicesData = [
  {
    id: "model-shoot",
    title: "Model Shoot",
    images: [model1, model2, model3],
    height: 400,
    imageWidth: "w-1/6",
  },
  {
    id: "wedding-shoot",
    title: "Wedding Shoot",
    images: [wed1, wed2, wed3],
    height: 550,
    imageWidth: "w-1/5",
  },
  {
    id: "commercial-shoot",
    title: "Portraits",
    images: [portrait1, portrait2],
    height: 500,
    imageWidth: "w-1/2",
  },
  {
    id: "graduation-shoot",
    title: "Graduation Shoot",
    images: [grad1, grad2, grad3, grad4],
    height: 500,
    imageWidth: "w-1/5",
  },
  {
    id: "pre-wedding-shoot",
    title: "Pre-Wedding Shoot",
    images: [prewed1, prewed2, prewed3],
    height: 500,
    imageWidth: "w-1/2",
  },
  {
    id: "product-shoot",
    title: "Product Shoot",
    images: [product1, product2, product3],
    height: 565,
    imageWidth: "w-1/3",
  },
  {
    id: "photo-frames",
    title: "Photo Frames",
    images: [frame1, frame2, frame3],
    height: 300,
    imageWidth: "w-1/6",
  },
];

export default function Services() {
  return (
    <section id="services" className="p-5 pt-0 text-textColor">
      <div className="flex flex-col gap-5 md:grid w-full md:grid-cols-8 md:gap-10 px-0 md:px-4 md:py-6">

        {/* Section Title */}
        <div className="group w-full md:col-span-4 md:row-span-1 md:flex md:items-center pt-10 md:pb-5">
          <p className="text-4xl md:text-6xl text-white lg:text-textColor font-bold lg:group-hover:text-white lg:group-hover:text-7xl transition-all duration-700">
            Our Services
          </p>
        </div>

        {/* Dynamic Carousels */}
        {servicesData.map(({ id, title, images, height, imageWidth }) => (
          <div key={id} id={id} className="md:col-span-4 row-span-2">
            <ServiceCarousel
              title={title}
              images={images}
              height={height}
              imageWidth={imageWidth}
            />
          </div>
        ))}

      </div>
    </section>
  );
}
