import React from 'react'
import Spinner from './loader.gif';

const Loader = () => {
    return (
      <div>
        <img src={Spinner} alt="" style={{height:'25px', width:'25px'}}/>
      </div>
    )
}

export default Loader