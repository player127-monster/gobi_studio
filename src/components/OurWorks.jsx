import frame1 from '../assets/Services/frame1.avif';
import frame2 from '../assets/Services/frame2.jpg';
import frame3 from '../assets/Services/frame3.jpg';
import model1 from '../assets/Services/model1.webp';
import model2 from '../assets/Services/model2.jpg';
import model3 from '../assets/Services/model3.jpg';
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
import work1 from '../assets/Services/works1.jpg';
import mug from '../assets/Services/mug.jpg';

export default function Works(){

    const works=[
        {src:`${wed1}`,name:"Wedding"},
        {src:`${product1}`,name:"product Shoot"},
        {src:`${model1}`,name:"Model Shoot"},
        {src:`${prewed1}`,name:"Pre-Wedding Shoot"},
        {src:`${grad1}`,name:"Graduation"},
        {src:`${prewed2}`,name:"Pre-Wedding Shoot"},
        {src:`${grad2}`,name:"Graduation"},
        {src:`${model2}`,name:"Model Shoot"},
        {src:`${grad3}`,name:"Graduation"},
        {src:`${product3}`,name:"Wedding"},
        {src:`${prewed3}`,name:"Pre-Wedding Shoot"},
        {src:`${model3}`,name:"Model Shoot"},
        {src:`${grad4}`,name:"Graduation"},
        {src:`${wed2}`,name:"Wedding"},
        {src:`${product2}`,name:"Product Shoot"},
        {src:`${wed3}`,name:"Wedding"},
    ]

    return<section id="works" className="felx flex-row pt-24 p-10">
        <div className="group w-full flex pb-5 px-0">
            <p className="text-6xl text-textColor font-bold items-start group-hover:text-white group-hover:text-7xl transition-all duration-500">Our Works</p>
        </div>
        <div className='p-5 pb-10 grid grid-cols-7 gap-4 py-3'>
        <img src={work1} alt="Wedding Shoot" className="col-span-3 w-full h-[230px] rounded-3xl hover:scale-110 transition-all duration-500"></img>
        {
            works.map((work,index)=>(
                <img key={index} src={work.src} alt={work.name} className="w-full h-[230px] rounded-3xl hover:scale-125 transition-all duration-500"></img>
            ))
        }
        <img src={mug} alt="Sublimation printing" className="col-span-2 w-full h-[230px] rounded-3xl hover:scale-125 transition-all duration-500"></img>
        
        </div>
        
    </section>
}