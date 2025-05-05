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


  import ServiceCarousel from './ServiceCarousel';
  

  

  export default function Services() {
    return (
      <section id="services" className="p-5 pt-0 text-textColor">
        <div className="flex flex-col gap-5 md:grid w-full md:grid-cols-8 md:gap-10 px-0 md:px-4 md:py-6">
  
          {/* Title */}
          <div className="group w-full md:col-span-4 md:row-span-1 md:flex md:items-center pt-10 md:pb-5">
            <p className="text-4xl md:text-6xl text-white lg:text-textColor font-bold lg:group-hover:text-white lg:group-hover:text-7xl transition-all duration-700">
              Our Services
            </p>
          </div>
  
          {/* Service Carousels */}
          <div className="md:col-span-4 row-span-2 pt-5" id="model-shoot">
            <ServiceCarousel title="Model Shoot" images={[model1, model2, model3]} height={400} imageWidth="w-1/6" />
          </div>
  
          <div className="md:col-span-4 row-span-2 pt-5" id="wedding-shoot">
            <ServiceCarousel title="Wedding Shoot" images={[wed1, wed2, wed3]} height={600} imageWidth="w-1/5" />
          </div>
  
          <div className="md:col-span-4 row-span-2 pt-0" id="commercial-shoot">
            <ServiceCarousel title="Portraits" images={[portrait1, portrait2]} height={700} imageWidth="w-1/2" />
          </div>
  
          <div className="col-span-4 row-span-2" id="graduation-shoot">
            <ServiceCarousel title="Graduation Shoot" images={[grad1, grad2, grad3, grad4]} height={700} imageWidth="w-1/5" />
          </div>
  
          <div className="col-span-4 row-span-2" id="pre-wedding-shoot">
            <ServiceCarousel title="Pre-Wedding Shoot" images={[prewed1, prewed2, prewed3]} height={800} imageWidth="w-1/2" />
          </div>
  
          <div className="col-span-4 row-span-2" id="product-shoot">
            <ServiceCarousel title="Product Shoot" images={[product1, product2, product3]} height={700} imageWidth="w-1/3" />
          </div>
  
          <div className="col-span-4">
            <ServiceCarousel title="Photo Frames" images={[frame1, frame2, frame3]} height={300} imageWidth="w-1/6" />
          </div>
  
        </div>
      </section>
    );
  }
  