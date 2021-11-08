import style from './header.module.css'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch';
const Header = () => {

    const secNav = useFetch('http://localhost:5000/second-nav')
    return (
        <header className={style['header']}>
        <nav className={`${style['top-nav']} flex`}>
            <div className={style.title}>
                <Link to="/" className="flex">
                    <i className="fab fa-shopify"></i>
                    <h1>Shop<span className={style['pr-color']}>ify</span></h1>
                </Link>
            </div>

            <div className={style["search-bar"]}>
                <div className="form-group">
                    <select name="" id={style.cat}>
                        <option value="All">All</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Electronics">Electronics</option>
                    </select>
                    <input type="search" id={style['search-input']} />
                    <button className="btn btn-primary"><i className="fas fa-search"></i></button>
                </div>
            </div>

            <div className={`${style['user-area']} flex`}>
                <div className={style['item']}>
                    <Link to="/Login">
                        <p>Hello, </p>
                        <div className={style["link"]}>Sign In</div>
                    </Link>
                </div>
                <div className={style['item']}>
                    <Link to="/Orders">
                        <p>Returns </p>
                        <div className={style["link"]}>& Orders</div>
                    </Link>
                </div>
                <div className={`${style.cart} ${style.item}`}>
                    <Link to="/Cart">
                        <div className={style.number}>0</div>
                        <i className={`fas fa-shopping-cart ${style.icon}`}></i>
                    </Link>
                    <p>cart</p>
                </div>
            </div>

        </nav>
        <nav className={style["second-nav"]}>
            <ul className="flex">
                <li><Link><i className={`fas fa-bars ${style.icon}`}></i>All</Link></li>
                {secNav&& secNav.map(element=>(
                    <li key={element.id}><Link to={element.route}>{element.title}</Link></li>
                ))}
            </ul>
        </nav>
    </header>
      );
}
export default Header;