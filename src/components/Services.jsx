import img1 from '../assets/Services/image4.jpeg';
import img2 from '../assets/Services/image5.jpeg';
import img3 from '../assets/Services/image6.jpeg';

export default function Services(){

    return<section id="services" className="p-10 pt-0 text-textColor">
    <div className="grid grid-cols-8 gap-10 px-4 py-6">

        {/* Title */}
        <div className="group col-span-4 row-span-1 flex items-center pb-5">
        <p className="text-6xl text-textColor font-bold items-start group-hover:text-white transition-all duration-700">Our Services</p>
        </div>

        {/* Top Right Image */}
        <div className="col-span-4 row-span-2 pt-5">
            <div className="group bg-white w-full h-[400px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[img1, img2, img3, img1, img2, img3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[16.66%] h-[400px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white transition-all duration-700">Model Shoot</p>
                </div>
            </div>
        </div>


        {/* Middle Left Image */}
        <div className="col-span-4 row-span-2 pt-5">
            <div className="group bg-white w-full h-[600px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[img1, img3, img2, img1, img3, img2].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[16.66%] h-[600px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white transition-all duration-700">Wedding Shoot</p>
                </div>
            </div>
        </div>

        {/* Middle Right Image */}
        <div className="col-span-4 row-span-2 pt-0">
        <div className="group bg-white w-full h-[700px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[img1, img2, img3, img1, img2, img3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[16.66%] h-[700px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white transition-all duration-700">Birthday Shoot</p>
                </div>
            </div>
        </div>

        {/* Bottom Left Image */}
        <div className="col-span-4 row-span-2">
        <div className="group bg-white transition-all duration-700 w-full h-[700px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal pointer-events-none">
                {[img1, img2, img3, img1, img2, img3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[16.66%] h-[700px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10 ">
                <p className="text-4xl text-textColor font-bold group-hover:text-white transition-all duration-700">Graduation Shoot</p>
                </div>
            </div>
        </div>

        {/* Bottom Right Image */}
        <div className="col-span-4 row-span-2">
        <div className="group bg-white w-full h-[300px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[img1, img2, img3, img1, img2, img3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[16.66%] h-[300px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white transition-all duration-700">Model Shoot</p>
                </div>
            </div>
        </div>

     </div>


        
</section>
}