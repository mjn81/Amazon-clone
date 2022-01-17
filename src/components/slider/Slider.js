import useFetch from "hooks/useFetch";
import style from "./slider.module.css";

const sliderFunction = ()=>{
    const 
}


const Slider = () => {
    const slides = useFetch('http://localhost:5000/slider');
    
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