export default function ServiceCarousel({ title, images, height, imageWidth }) {
    return (
      <div className={`group bg-white w-full h-[${height}px] relative overflow-hidden rounded-xl`}>
        <div className="flex w-[200%] animate-scroll-horizontal">
          {[...images, ...images].map((img, idx) => (
            <img
              key={idx}
              src={img}
              loading="lazy"
              className={`${imageWidth} h-[${height}px] object-cover`}
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