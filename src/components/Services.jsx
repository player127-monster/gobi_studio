
import frame1 from '../assets/Services/frame1.avif';
import frame2 from '../assets/Services/frame2.jpg';
import frame3 from '../assets/Services/frame3.jpg';
import model1 from '../assets/Services/model1.webp';
import model2 from '../assets/Services/model2.jpg';
import model3 from '../assets/Services/model3.jpg';
import portrait1 from '../assets/Services/portrait.jpg';
import portrait2 from '../assets/Services/portrait1.jpg';
import prewed1 from '../assets/Services/prewed1.jpg';
import prewed2 from '../assets/Services/prewed2.jpg';
import prewed3 from '../assets/Services/prewed3.avif';
import product1 from '../assets/Services/product1.jpg';
import product2 from '../assets/Services/product2.jpg';
import product3 from '../assets/Services/product3.jpg';
import wed1 from '../assets/Services/wed1.jpg';
import wed2 from '../assets/Services/wed2.jpg';
import wed3 from '../assets/Services/wed3.jpg';
import grad1 from '../assets/Services/grad1.avif';
import grad2 from '../assets/Services/grad2.avif';
import grad3 from '../assets/Services/grad3.jpg';
import grad4 from '../assets/Services/grad4.jpg';


export default function Services(){

    return<section id="services" className="p-10 pt-0 text-textColor">
    <div className="grid w-full md:grid-cols-8 md:gap-10 px-2 py-2 md:px-4 md:py-6">

        {/* Title */}
        <div className="group w-full md:col-span-4 md:row-span-1 md:flex md:items-center md:pb-5">
        <p className="text-2xl md:text-6xl text-white md:text-textColor font-bold items-start group-hover:text-white group-hover:text-7xl transition-all duration-700">Our Services</p>
        </div>

        {/* Top Right Image */}
        <div id="model-shoot" className="col-span-4 row-span-2 pt-5">
            <div className="group bg-white w-full h-[400px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[model1,model2,model3,model1,model2,model3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[16.66%] h-[400px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white group-hover:text-5xl transition-all duration-700">Model Shoot</p>
                </div>
            </div>
        </div>


        {/* Middle Left Image */}
        <div id='wedding-shoot' className="col-span-4 row-span-2 pt-5">
            <div className="group bg-white w-full h-[600px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[wed1,wed2,wed3,wed1,wed2,wed3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[18.66%] h-[600px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white group-hover:text-5xl transition-all duration-700">Wedding Shoot</p>
                </div>
            </div>
        </div>

        {/* Middle Right Image */}
        <div id='commercial-shoot' className="col-span-4 row-span-2 pt-0">
        <div className="group bg-white w-full h-[700px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[portrait1,portrait2].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[50%] h-[700px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white group-hover:text-5xl transition-all duration-700">Portraits</p>
                </div>
            </div>
        </div>

        {/* Bottom Left Image */}
        <div id='graduation-shoot' className="col-span-4 row-span-2">
        <div className="group bg-white transition-all duration-700 w-full h-[700px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal pointer-events-none">
                {[grad1,grad3,grad2,grad4,grad1,grad3,grad2,grad4].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[20.66%] h-[700px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10 ">
                <p className="text-4xl text-textColor font-bold group-hover:text-white group-hover:text-5xl transition-all duration-700">Graduation Shoot</p>
                </div>
            </div>
        </div>

        {/* Bottom Right Image */}
        <div id='pre-wedding-shoot' className="col-span-4 row-span-2">
        <div className="group bg-white w-full h-[800px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[prewed1,prewed2,prewed3,prewed1,prewed2,prewed3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[50.66%] h-[800px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white group-hover:text-5xl transition-all duration-700">Pre-Wedding Shoot</p>
                </div>
            </div>
        </div>

        {/* Bottom end Left Image */}
        <div id='product-shoot' className="col-span-4 row-span-2">
        <div className="group bg-white transition-all duration-700 w-full h-[700px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal pointer-events-none">
                {[product1,product2,product3,product1,product2,product3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[30.66%] h-[700px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10 ">
                <p className="text-4xl text-textColor font-bold group-hover:text-white group-hover:text-5xl transition-all duration-700">Product Shoot</p>
                </div>
            </div>
        </div>

        {/* Bottom end Right Image */}
        <div className="col-span-4">
        <div className="group bg-white w-full h-[300px] relative overflow-hidden rounded-xl">
                <div className="flex w-[200%] animate-scroll-horizontal">
                {[frame1,frame2,frame3,frame1,frame2,frame3].map((img, idx) => (
                    <img
                    key={idx}
                    src={img}
                    className="w-[16.66%] h-[300px] object-cover"
                    alt={`scroll-img-${idx}`}
                    />
                ))}
                </div>

                <div className="absolute bottom-4 left-4 z-10">
                <p className="text-4xl text-textColor font-bold group-hover:text-white group-hover:text-5xl transition-all duration-700">Photo Frames</p>
                </div>
            </div>
        </div>

     </div>


        
</section>
}