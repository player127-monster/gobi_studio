import Spline from '@splinetool/react-spline';

export default function Home(props){
    
    return <section id='home' className="flex bg-primary flex-col md:flex-row justify-center">
       <div className="flex flex-col justify-center h-[700px] pt-44 pb-6 gap-4 z-10">
            <div className="group relative">
                <p className="text-5xl md:text-9xl text-center text-white md:text-textColor font-bold uppercase 
                   transition-all duration-700 ease-in-out 
                   md:translate-y-10 md:group-hover:translate-y-0 
                   hover:text-white pt-24">
                {props.name}
                </p>

                <p className="md:opacity-0 md:translate-y-2  md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 ease-in-out text-xl md:text-3xl text-orange-600 text-center">
                Welcome to {props.name}
                </p>

                <p className="md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 ease-in-out text-2xl text-white text-center">
                Capturing Memories with Precision and Passion
                </p>
            </div>
        </div>


        <div className='absolute -top-10 w-full h-[700px] z-0 pointer-events-none'>  
              <Spline scene="https://prod.spline.design/HUEsevAbPUK3hGU6/scene.splinecode" />
        </div>
        <div className='absolute sm:bottom-8 bottom-40 right-0 md:bottom-96 lg:bottom-5 lg:right-0 bg-primary justify-center w-56 h-[170px] md:h-[250px] lg:h-[150px]'>

        </div>
    </section>
}