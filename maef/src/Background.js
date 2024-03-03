import Sorter from './Sorter';
import './App.css';

function Background({children}) {
    return (
        <div className='background'>
            {Sorter({children})}
        </div>
    )
}

export default Background;