import logo from '../assets/logo.png';
import camera from '../assets/cameraMan.webp';
import camera1 from '../assets/camera.png';


export default function Info(){

    const email="Email   :gobiwatavala@gmail.com";
    const address="Address :145a Watavala road Hatton";
    const telNO="Contact :0758575650";
    const paraInfo="Gobi Studio is a premier photography studio conveniently located in Watawala Town, offering easy accessibility and exceptional service to clients from all walks of life.";

    return<section id="contact" className="flex flex-row justify-center gap-10 p-5 pb-10">
        <div className="flex flex-col w-[23%] text-justify font-sriracha">
            <img src={logo} alt="Logo" className="w-24 h-24 pb-3"></img>
            <p className="">{paraInfo}</p>
        </div>

        <div>
            
        </div>
        
        <div className="flex w-[25%] h-[300px] justify-center rounded-full  hover:bg-gray-400">
            <img src={camera} alt="Logo" className="pb-3 py-8 "></img>
            
        </div>
        
        <div className="flex flex-col w-[23%] gap-2 text-textColor group hover:text-white duration-700 p-5">
            <p className="text-3xl text-white h-14 group-hover:font-bold group-hover:text-textColor duration-700" >Contact Us</p>
            <p>{address}</p>
            <p>{email}</p>
            <p>{telNO}</p>
        </div>

    </section>
}