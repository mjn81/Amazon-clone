import useFetch from "hooks/useFetch";
import style from "./slider.module.css";
import { useEffect } from "react";
import SliderBtn from "./SliderBtn";
let pre , nxt , index, total;



const move = (index , isLeft)=>{ 
    pre = index-1 > -1 ? index-1 : total-1;
    nxt = index+1 < total ? index+1 : 0;
    const slides = document.querySelectorAll(`.${style.slide}`);
    slides[pre].classList.remove(style.active); 
    slides[nxt].classList.remove(style.active); 
    slides[index].classList.remove(style.nxt);
    slides[nxt].classList.remove(style.pre);
    slides[index].classList.remove(style.pre);
    slides[nxt].classList.remove(style.nxt);
    if(isLeft){
        slides[index].classList.add(style.active);
        slides[nxt].classList.add(style.pre);
        slides[pre].classList.add(style.nxt); 
    }else{
        slides[index].classList.add(style.active);
        slides[pre].classList.add(style.pre);
        slides[nxt].classList.add(style.nxt); 
    }
    
    
}
const circleFunction = ()=>{
    index=nxt;
    move(index , false);
    setTimeout(()=>{
        circleFunction();
    } , 4000)
}
const toLeft = ()=>{
    index=pre;
    move(index , true);
}
const toRight = ()=>{
    index = nxt;
    move(index , false);
}
const Slider = () => {
    const slides = useFetch('http://localhost:5000/slider');
    useEffect(()=>{
            index =0;
            nxt=1;
            pre=slides?.length-1;
            total = slides?.length;
            slides&&setTimeout(()=>{
                circleFunction();
            } , 2000);
    } , [slides]);
   
    return (
        <div className={style.container}>
        <SliderBtn isLeft={false} btnFunction={toRight}></SliderBtn>
        <SliderBtn isLeft={true} btnFunction={toLeft}></SliderBtn>
            <div className={style.slider}>
            {   
                slides&&
                slides.map(
                    (element)=>(
                        <div key={element.id} className={style.slide}><img src={element.img} alt="" /></div>
                    )
                )
            }
            </div>
        </div>
      );
}
 
export default Slider;