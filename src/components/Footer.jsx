export default function Footer(props){
    return<section className="w-full flex justify-center font-bold text-navText pb-5 pt-10 text-textColor group">
        <p className="group-hover:text-white duration-700"> © 2025 {props.name} | All rights reserved</p>
    </section>
}