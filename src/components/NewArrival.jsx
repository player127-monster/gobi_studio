
import mug from '../assets/Services/mug.jpg';
import mug1 from '../assets/Services/mug1.jpg';
import mug2 from '../assets/Services/mug2.webp';
import mug3 from '../assets/Services/mug3.webp';
import pen1 from '../assets/Services/pen1.jpg';
import pen2 from '../assets/Services/pen2.avif';
import tile1 from '../assets/Services/tile1.jpg';
import tile2 from '../assets/Services/tile2.jpg';

const NewArrival = () => {


    return<section id='new' className="flex flex-col w-full">

        <div className='group w-full p-20'>
            <p className="text-6xl text-white font-bold items-start group-hover:text-green-300 group-hover:text-7xl transition-all duration-700">Sublimation Printing</p>
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
        <div className="bg-primary text-textColor min-h-[60vh] flex flex-row gap-5 items-center h-[700px] justify-center px-10 py-20 animate-scroll-horizontal">
                            {[mug1,mug2,mug3,mug1,mug2,mug3,mug1,mug2].map((img, idx) => (
                                <img
                                key={idx}
                                src={img}
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
          <div className="bg-primary text-textColor min-h-[60vh] flex flex-row gap-5 items-center h-[700px] justify-center px-10 py-20 animate-scroll-horizontal">
                            {[pen1,pen2,pen1,pen2,pen1,pen2].map((img, idx) => (
                                <img
                                key={idx}
                                src={img}
                                className="w-[50%] h-auto rounded-2xl object-cover"
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
          <div className="bg-primary text-textColor min-h-[60vh] flex flex-row gap-5 items-center h-[700px] justify-center px-10 py-20 animate-scroll-horizontal ">
                            {[tile1,tile2,tile1,tile2,tile1,tile2].map((img, idx) => (
                                <img
                                key={idx}
                                src={img}
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