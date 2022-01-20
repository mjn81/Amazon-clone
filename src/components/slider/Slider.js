import useFetch from "hooks/useFetch";
import style from "./slider.module.css";
import { useEffect } from "react";
import SliderBtn from "./SliderBtn";
let pre , nxt , index, total;

const nextSlide = (isLeft)=>{
    if(isLeft){   
        index = index-1 < 0 ? total-1 : index-1;
    }else{
        index = index+1> total-1 ? 0 : index+1;
    }
    
}

const move = (index , isLeft)=>{
    nextSlide(isLeft);
    const slides = document.querySelectorAll(`.${style.slide}`);
    if(isLeft){
        pre = index+1 < total ? index+1 : 0;
        nxt = index-1 > -1 ? index-1 : total-1;
        slides[pre].classList.remove(style.for);
        slides[nxt].classList.remove(style.for);
        slides[pre].classList.add(style.back);
        slides[nxt].classList.add(style.back);
       
    }else{
        pre = index-1 > -1 ? index-1 : total-1;
        nxt = index+1 < total ? index+1 : 0;
        slides[pre].classList.remove(style.back);
        slides[nxt].classList.remove(style.back);
        slides[pre].classList.add(style.for);
        slides[nxt].classList.add(style.for);
    }
  
    slides[pre].classList.remove(style.active); 
    slides[nxt].classList.remove(style.active); 
    slides[index].classList.remove(style.nxt);
    slides[index].classList.remove(style.pre);
    slides[nxt].classList.remove(style.pre);
    slides[nxt].classList.remove(style.nxt);
    slides[pre].classList.remove(style.pre); 
    slides[pre].classList.remove(style.nxt); 

    slides[index].classList.add(style.active);
    slides[pre].classList.add(style.pre);
    slides[nxt].classList.add(style.nxt); 
    
}
const circleFunction = ()=>{
    move(index , false);
    setTimeout(()=>{
        circleFunction();
    } , 7000);
}
const toLeft = ()=>{
    move(index , true);
}
const toRight = ()=>{
    move(index , false);
}
const Slider = () => {
    const slides = useFetch('http://localhost:5000/slider');
    useEffect(()=>{
            index =1;
            nxt=2;
            pre=0;
            total = slides?.length;
            total&&move(index  , true);
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
                        <div key={element.id} className={style.slide}><img src={element.img} alt={element.title} /></div>
                    )
                )
            }
            </div>
        </div>
      );
}
 
export default Slider;