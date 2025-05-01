import Spline from '@splinetool/react-spline';

export default function Home(props){
    
    return <section id='home' className="flex bg-primary flex-row justify-center">
       <div className="flex flex-col justify-center h-[700px] pt-44 pb-6 gap-4 z-10">
            <div className="group relative">
                <p className="text-9xl text-center text-textColor font-bold uppercase 
                   transition-all duration-700 ease-in-out 
                   translate-y-10 group-hover:translate-y-0 
                   hover:text-white pt-24">
                {props.name}
                </p>

                <p className="opacity-0 translate-y-2  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-3xl text-orange-600 text-center">
                Welcome to {props.name}
                </p>

                <p className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out text-2xl text-white text-center">
                Capturing Memories with Precision and Passion
                </p>
            </div>
        </div>


        <div className='absolute -top-10 w-full h-[700px] z-0 pointer-events-none'>  
              {/* <Spline scene="https://prod.spline.design/HUEsevAbPUK3hGU6/scene.splinecode" /> */}
        </div>
        <div className='absolute bottom-5 right-0 bg-primary justify-center w-56 h-[150px]'>

        </div>
    </section>
}