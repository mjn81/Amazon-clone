import useFetch from "hooks/useFetch";
import style from "./slider.module.css";
import { useEffect } from "react";
let pre , nxt , index;



const move = (index , total)=>{ 
    pre = index-1 > -1 ? index-1 : total-1;
    nxt = index+1 < total ? index+1 : 0;
    const slides = document.querySelectorAll(`.${style.slide}`);
    slides[pre].classList.remove(style.active); 
    slides[index].classList.remove(style.nxt);
    slides[nxt].classList.remove(style.pre);
    slides[index].classList.add(style.active);
    slides[pre].classList.add(style.pre);
    slides[nxt].classList.add(style.nxt); 
    
}
const circleFunction = (total)=>{
    index=nxt;
    move(index , total);
    setTimeout(()=>{
        circleFunction(total);
    } , 4000)
}


const Slider = () => {
    const slides = useFetch('http://localhost:5000/slider');
    useEffect(()=>{
            index =0;
            nxt=1;
            pre=slides?.length-1;
            slides&&setTimeout(()=>{
                circleFunction(slides.length);
            } , 2000);
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