import style from './slider.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
const SliderBtn = ({isLeft , btnFunction}) => {
    return ( 
        <button className={`${style['btn-slider']} ${isLeft?'' : style.right}`} onClick={btnFunction}>
            <FontAwesomeIcon icon={isLeft?faChevronLeft:faChevronRight}>

            </FontAwesomeIcon>
        </button>

     );
}
 
export default SliderBtn;