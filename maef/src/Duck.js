import Background from './Background';
import Menu from './Menu';
import duck from './Duck.svg'
import './App.css';

const Duck = () => {
    return (
        <>
            <Background>
                <>
                    <img src={duck} alt='duck' className='duck_topleft'></img>
                    <img src={duck} alt='duck' className='duck_topright'></img>
                    <img src={duck} alt='duck' className='duck_bottomleft'></img>
                    <img src={duck} alt='duck' className='duck_bottomright'></img>
                </>
            </Background>
            <Menu></Menu>
        </>
    )
}

export default Duck;