import useFetch from "hooks/useFetch";
import style from "./slider.module.css";
import { useEffect } from "react";
const sliderFunction = (index , total)=>{
    const slides = document.querySelectorAll(`.${style.slide}`);
    const pre = index-1 > -1 ? index-1 : total-1;
    const nxt = index+1 < total ? index+1 : 0;
    slides[pre].classList.remove(style.active); 
    slides[index].classList.remove(style.nxt);
    slides[nxt].classList.remove(style.pre);
    slides[index].classList.add(style.active);
    slides[pre].classList.add(style.pre);
    slides[nxt].classList.add(style.nxt); 
    setTimeout(()=>{
        sliderFunction(nxt , total);
    } , 7000)
}


const Slider = () => {
    const slides = useFetch('http://localhost:5000/slider');
    useEffect(()=>{
          slides&&setTimeout(()=>{
            sliderFunction(0 , slides.length);
        } , 2000)
    } , [slides]);
   
    return (
        <div className={style.container}>
            <div className={style.slider}>
            {   
                slides&&
                slides.map(
                    (element,index)=>(
                        <div key={element.id} className={style.slide}><img src={element.img} alt="" /></div>
                    )
                )
            }
            </div>
        </div>
      );
}
 
export default Slider;