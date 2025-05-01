export default function Works(){

    const works=[
        {src:"",name:""},
    ]

    return<section id="works" className="p-5 pb-10">
        {
            works.map((work,index)=>(
                <img key={index} src={work.src} alt={work.name} className=""></img>
            ))
        }
    </section>
}