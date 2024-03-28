import React, { useState } from 'react';
import data from './data';

const Accordian = () => {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple]
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId !== -1) {
      copyMultiple.splice(findIndexOfCurrentId, 1);
    } else {
      copyMultiple.push(getCurrentId);
    }
    setMultiple(copyMultiple);
  }

  return (
    <div className='acc-wrapper'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable multi-select</button>
      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (

            <div className='item'>

              <div onClick={enableMultiSelection
                ? () => handleMultiSelection(dataItem.id)
                : () => handleSingleSelection(dataItem.id)} className='title'>
                <h3> {dataItem.question} </h3>
                <span> + </span>
              </div>

              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                  <div className="acc-content ">{dataItem.answer}</div>
                )
                : selected === dataItem.id && (
                  <div className="acc-content ">{dataItem.answer}</div>
                )}

            </div>
          )))

          : (<div> Not found </div>)

        }
      </div>
    </div>
  )
}

export default Accordian;