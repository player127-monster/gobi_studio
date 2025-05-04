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


        {/* Spline 3D Background */}
            <div className="absolute -top-10 w-full h-[700px] z-0 pointer-events-none">
            <Spline scene="https://prod.spline.design/HUEsevAbPUK3hGU6/scene.splinecode" />
            </div>

            {/* Watermark Blocker */}
         <div
            className="
                absolute 
                right-0 
                bottom-5 
                top-[600px]
                iphone7:top-[600px]
                w-72 h-32          /* Base: width 18rem, height 6rem */
                sm:w-80 sm:h-32    /* Small screens: wider and taller */
                md:w-96 md:h-32    /* Medium screens: even larger */
                lg:w-[30rem] lg:h-28 lg-right-0 lg:top-[600px] /* Large screens: custom width/height */
                bg-primary 
                z-05 
                pointer-events-none
            "
            ></div>



    </section>
}