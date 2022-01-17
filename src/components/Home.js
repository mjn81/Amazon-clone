import Header from './header/Header';
import Slider from './slider/Slider';
import { useSelector , useDispatch} from 'react-redux';
import Container from './Container';

const Home = () => {


    return ( 
        <div className="landing-page">
            <Header />
            
            <Container>
               <Slider /> 
            </Container>
            
        </div>
     )
}
 
export default Home;