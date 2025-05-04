import logo from '../assets/logo.jpg';
import camera from '../assets/camera.png';
import camera1 from '../assets/camera.png';


export default function Info(){

    const email="Email   :gobiwatavala@gmail.com";
    const address="Address :No 113,1/1 Hatton road Watawala";
    const telNO="Contact :0777-654027 | 0710-655256";
    const whatsNO="Whatsapp :0777-654027";
    const paraInfo="Gobi Studio is a premier photography studio conveniently located in Watawala Town, offering easy accessibility and exceptional service to clients from all walks of life.";

    return<section id="contact" className="flex flex-col md:flex-row justify-center gap-10 p-5 pb-10">
        <div className="flex flex-col w-full md:w-[23%] text-justify font-sriracha items-center md:items-start">
            <img src={logo} alt="Logo" className="w-44 h-48 md:w-32 md:h-32 rounded-full p-3 md:p-5 -ml-8"></img>
            <p className="">{paraInfo}</p>
        </div>

        <div>
            
        </div>
        
        <div className="flex w-full md:w-[25%]  justify-center rounded-2xl">
            <img src={camera} alt="Logo" className="pb-3 py-8 h-[300px] rounded-2xl w-[70%]"></img>
            
        </div>
        
        <div className="flex flex-col w-full md:w-[30%] gap-2 text-textColor group hover:text-white duration-700 p-10">
            <p className="text-lg md:text-2xl text-white h-14 group-hover:font-bold group-hover:text-textColor duration-700" >Contact Us</p>
            <p className='text-sm md:text-lg'>{address}</p>
            <p className='text-sm md:text-lg'>{email}</p>
            <p className='text-sm md:text-lg'>{telNO}</p>
            <p className='text-sm md:text-lg'>{whatsNO}</p>
        </div>

    </section>
}