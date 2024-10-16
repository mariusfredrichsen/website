import './App.css';
import Link from './Link';

const Menu = () => {
    return (
        <div className='menu'>
            <h1 style={{ fontSize: "calc(2.5vh + 2.5vw)" }}>Velkommen!</h1>
            <Link content="Github" link="https://github.com/mariusfredrichsen" target="_blank" />
            <Link content="CV" link="/cv" target="" />
            <Link content="LinkedIn" link="https://www.linkedin.com/in/marius-fredrichsen/" target="_blank" />
        </div>
    )
}

export default Menu;