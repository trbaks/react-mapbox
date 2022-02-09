import React, { useState } from "react";
import Modal from "./Modal";
import Modalnew from './Modalnew';
import Map from './Map';

const Amit = props => {
  const [showModal, setShowModal] = useState(false);
  const [showNewModal, setNewShowModal] = useState(false);

  const address= 'Empire State Building, USA'
  const showModelHandler = ()=> {
      setShowModal(true);
  }

  const hideModelHandler = ()=> {
      setShowModal(false);
  }

  const showNewModelHandler = ()=> {
      console.log('New Modal Clicked!')
    setNewShowModal(true);
}

const hideNewModelHandler = ()=> {
    setNewShowModal(false);
}
const coordinates = {lat: 19.076 , lng: 72.8777}
  return (
    <React.Fragment>
        <h3>This is from Amit Component</h3>
      {showModal && <Modal closeModal={hideModelHandler} address={address}/>}
      <button  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button" onClick={showModelHandler} >VIEW MODAL</button>

<button  className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button" onClick={showNewModelHandler} >VIEW NEW MODAL</button>
        {showNewModal && <Modalnew header={address} closeModal={hideNewModelHandler} show={showNewModal} onCancel={hideNewModelHandler} footer={<button type="submit" onClick={hideNewModelHandler} style={{color: "red", float: "right"}}>Close</button>}>
            <Map center={coordinates}/>
        </Modalnew>}
    </React.Fragment>
  );
};
export default Amit;
