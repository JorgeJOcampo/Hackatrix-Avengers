import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';


class Logo extends React.Component {
  render() {
    return (
      <div className='container logo'>
        <div>
        <img src='temprent.svg'></img>
        </div>
        <div className='sub'>
          <p>ALQUILERES TEMPORALES Y A LARGO PLAZO EN C.A.B.A.</p>
        </div>
        <form role='search' className='search'>
            <input type='text' placeholder="Barrio"/>
            <Link to='/results'>
              <button type='submit'><img src='location.png'></img>Buscar</button>
            </Link>
        </form>
      </div>
    );
  }
}


export default Logo;
