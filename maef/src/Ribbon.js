import Background from './Background';
import Menu from './Menu';
import ribbon from './RibbonBow.png';
import './App.css';

const Ribbon = () => {
    return (
        <>
            <Background>
                <>
                    <img src={ribbon} alt='ribbon' className='ribbon_topleft'></img>
                    <img src={ribbon} alt='ribbon' className='ribbon_topright'></img>
                    <img src={ribbon} alt='ribbon' className='ribbon_bottomleft'></img>
                    <img src={ribbon} alt='ribbon' className='ribbon_bottomright'></img>
                </>
            </Background>
            <Menu></Menu>
        </>
    )
}

export default Ribbon;