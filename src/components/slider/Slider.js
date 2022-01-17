import useFetch from "hooks/useFetch";
import style from "./slider.module.css";


const Slider = () => {
    const slides = useFetch('http://localhost:5000/slider');
    const slideTest = slides&& slides[0];
    return (
        <div className={style.container}>
            <ul>
                <li><img className={style.slides} src={slideTest?.img} alt={slideTest?.id} /></li>
            </ul>
        </div>
      );
}
 
export default Slider;