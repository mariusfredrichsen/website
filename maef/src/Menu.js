import './App.css';
import Link from './Link';

const Menu = () => {
    return (
        <div className='menu'>
            <h1 style={{fontSize: "48px"}}>Velkommen!</h1>
            <Link content="Github" link="https://github.com/mariusfredrichsen"/>
            <Link content="CV" link="/CV"/>
        </div>
    )
}

export default Menu;