
import Gobi from '../assets/gobi.jpg';
import {
    UserSquare,
    Heart,
    Briefcase,
    Package,
    Cake,
    GraduationCap,
    Contact
  } from 'lucide-react';
  import { Link } from 'react-scroll';

export default function About(){


    const services = [
        { name: 'Model Shoot', icon: <UserSquare className="w-6 h-6 text-orange-100" />, path: 'model-shoot' },
        { name: 'Wedding Shoot', icon: <Heart className="w-6 h-6 text-orange-100" />, path: 'wedding-shoot' },
        { name: 'Commercial Shoot', icon: <Briefcase className="w-6 h-6 text-orange-100" />, path: 'commercial-shoot' },
        { name: 'Product Shoot', icon: <Package className="w-6 h-6 text-orange-100" />, path: 'product-shoot' },
        { name: 'Birthday Shoot', icon: <Cake className="w-6 h-6 text-orange-100" />, path: 'birthday-shoot' },
        { name: 'Graduation Shoot', icon: <GraduationCap className="w-6 h-6 text-orange-100" />, path: 'graduation-shoot' },
        { name: 'NIC / Passport Photographs', icon: <Contact className="w-6 h-6 text-orange-100" />, path: 'nic-passport' },
        { name: 'Pre-Wedding Shoot', icon: <Heart className="w-6 h-6 text-orange-100" />, path: 'pre-wedding-shoot' },
      ];

    return <section className="flex bg-primary flex-col md:flex-row md:justify-center md:pb-10 w-full ">
        
        <div id="about" className="md:w-1/2 w-full flex flex-col justify-start md:justify-center gap-2.5 text-textColor text-justify  font-sriracha italic font-normal leading-relaxed md:pb-8">
            <p className='text-xl md:text-3xl md:pl-20 text-white font-bold font-sans not-italic pb-5 md:hover:scale-110 transition-all duration-500'>Legacy Through the Lens</p>
            <div className="flex flex-col md:pl-24 p-4">
                <p className='text-sm md:text-xl md:pb-4 hover:scale-110 transition-all duration-500'>Gobi Studio is a premier photography studio located in the heart of Watavala, offering easy access and exceptional service to clients across the region.</p>
                <p className='text-sm md:text-xl  md:pb-4 hover:scale-110 transition-all duration-500'>Founded in 2009, Gobi Studio brings over two decades of experience in delivering high-quality photography and cinematography services. Established by the visionary Dr. Timothy Weeraratne—one of Sri Lanka’s pioneers in the field—we proudly carry forward his legacy by combining artistic excellence with the latest technology.</p>
                <p className='text-sm md:text-xl md:pb-4 hover:scale-110 transition-all duration-500'>We are a government-registered studio, authorized to provide official passport and National Identity Card (NIC) photographs. Our services also include professional photography for Postal ID cards, Pension ID cards, and visa photographs tailored to meet the specific requirements of any country.</p>
                <p className='text-sm md:text-xl hover:scale-110 transition-all duration-500 '>At Gobi Studio, we are committed to capturing moments with authenticity, precision, and a touch of elegance.</p>
            </div>

            <div className="mt-8 not-italic md:pl-15  ">
                <p className="text-xl md:text-2xl text-white font-bold font-sans md:mb-4 md:pl-20 py-2 w-full md:w-[50%] md:hover:scale-125 transition-all duration-500">Our Services</p>
                <div className="space-y-2 md:space-y-4 grid md:grid-cols-2 gap-2 justify-center md:pl-24 ">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            to={service.path}
                            smooth={true}
                            duration={600}
                            offset={-70}
                            className="flex cursor-pointer items-center gap-3 hover:text-white hover:font-bold  transition-colors duration-300"
                        >
                        {service.icon}
                        <p className="text-lg text-textColor hover:text-white">{service.name}</p>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
        <div className='w-full md:w-1/2 flex justify-center p-5'>
            <img src={Gobi} alt="Gobi Studio - Gobi" className='w-[80%] h-[450px] md:w-[58%] md:h-[550px] rounded-xl md:ml-10 md:hover:scale-105 transition-all duration-500'></img>
        </div>
    </section>
}