import React, { useState } from 'react';
import data from './data';

const Accordian = () => {

  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId){
    setSelected(selected === getCurrentId ? null : getCurrentId)
  }

  return (
    <div className='accordian'>
      {data && data.length > 0 ? (
        data.map((dataItem) => (

          <div className='item'>

            <div onClick = {() => handleSingleSelection(dataItem.id)} className='title'>
              <h3> {dataItem.question} </h3>
              <span> + </span>
            </div>

            <div className='acc-content'>
              {selected === dataItem.id ? 
              <div> {dataItem.answer} </div> : null}
            </div>


          </div>
        )))

        : (<div> Not found </div>)

      }
    </div>
  )
}

export default Accordian;