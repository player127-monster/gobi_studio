
import mug from '../assets/Services/mug.jpg';
import mug1 from '../assets/Services/mug1.avif';
import mug2 from '../assets/Services/mug2.webp';
import mug3 from '../assets/Services/mug3.webp';
import pen1 from '../assets/Services/pen1.avif';
import pen2 from '../assets/Services/pen2.avif';
import tile1 from '../assets/Services/tile1.avif';
import tile2 from '../assets/Services/tile2.avif';
import sub from '../assets/Services/bgSub.jpg';

const NewArrival = () => {


    return<section id='new' className="flex flex-col w-full">

      <div>
        <div
            className="relative h-screen bg-fixed bg-center bg-cover group flex items-center justify-center"
            style={{ backgroundImage: `url(${sub})` }}
          >
            <div className="bg-black/50 p-10 rounded-xl">
              <h2 className="text-2xl md:text-6xl text-white font-bold items-start lg:group-hover:text-green-200 lg:group-hover:text-7xl transition-all duration-700">
                Sublimation Printing
              </h2>
            </div>
        </div>

        <div className='w-full overflow-hidden'>
        <div className="bg-primary text-white/85 min-h-[60vh] flex flex-col gap-4 lg:gap-5 items-center h-[700px] justify-center p-5 lg:px-10 py-20">
          <p className='w-[80%] text-sm md:text-xl md:pt-4 md:pb-2 text-justify'>
             Gobi Studio also offers high-quality sublimation printing services designed for long-lasting, vibrant results.
          </p>
          <p className='w-[80%] text-sm md:text-xl md:pb-2 text-justify'>
              Whether you're looking to personalize pens, mugs, pillows, tiles, or cups, we bring your ideas to life with precision and color accuracy.
          </p>
        </div>
        </div> 
      </div>
        
        
    <div className="w-full">
      
        <div >
          {/* Fixed background section */}
          <div
            className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${mug1})` }}
          >
            <div className="bg-black/50 p-10 rounded-xl">
              <h2 className="text-white text-5xl font-bold text-center">
                Mug Printing
              </h2>
            </div>
          </div>

          {/* Scrollable content section */}
          <div className='w-full overflow-hidden'>
        <div className="bg-primary text-textColor min-h-[60vh] flex lg:flex-row gap-1 lg:gap-5 items-center h-[700px] justify-center lg:px-10 py-20 lg:animate-scroll-horizontal">
                            {[mug1,mug2,mug3,mug1,mug2,mug3,mug1,mug2].map((img, idx) => (
                                <img
                                key={idx}
                                src={img}
                                loading='lazy'
                                className="w-[50%] h-[500px] object-cover"
                                alt={`scroll-img-${idx}`}
                                />
                            ))}
        </div>
        </div> 
         
        </div>


{/* Pen Printing */}
        <div >
          {/* Fixed background section */}
          <div
            className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${pen1})` }}
          >
            <div className="bg-black/50 p-10 rounded-xl">
              <h2 className="text-white text-5xl font-bold text-center">
                Pen Printing
              </h2>
            </div>
          </div>

          {/* Scrollable content section */}
          <div className='w-full overflow-hidden'>
          <div className="bg-primary text-textColor min-h-[60vh] flex lg:flex-row gap-1 lg:gap-5 items-center h-[700px] justify-center lg:px-10 py-20 lg:animate-scroll-horizontal">
                            {[pen1,pen2,pen1,pen2,pen1,pen2].map((img, idx) => (
                                <img
                                key={idx}
                                src={img}
                                loading='lazy'
                                className="w-[50%] h-[450px] md:h-auto rounded-2xl object-cover"
                                alt={`scroll-img-${idx}`}
                                />
                            ))}
        </div>
        </div>
        </div>


        {/* Tile Printing */}

        <div >
          {/* Fixed background section */}
          <div
            className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${tile1})` }}
          >
            <div className="bg-black/50 p-10 rounded-xl">
              <h2 className="text-white text-5xl font-bold text-center">
                Tile Printing
              </h2>
            </div>
          </div>

          {/* Scrollable content section */}
          <div className='w-full overflow-hidden'>
          <div className="bg-primary text-textColor min-h-[60vh] flex lg:flex-row gap-1 lg:gap-5 items-center h-[700px] justify-center lg:px-10 py-20 lg:animate-scroll-horizontal">
                            {[tile1,tile2,tile1,tile2,tile1,tile2].map((img, idx) => (
                                <img
                                key={idx}
                                src={img}
                                loading='lazy'
                                className="w-[50%] h-[500px] object-cover"
                                alt={`scroll-img-${idx}`}
                                />
                            ))}
        </div>
          </div>
        </div>

        <div
            className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${mug})` }}
          >
            <div className="bg-black/50 p-10 rounded-xl">
              <h2 className="text-white text-5xl font-bold text-center">
                Sublimation Printing
              </h2>
            </div>
          </div>
      
    </div>
</section>
}

export default NewArrival;