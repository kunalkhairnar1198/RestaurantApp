import React, { Fragment } from 'react'
import  ReactDOM  from 'react-dom'
import modelcls from './Modal.module.css'



const Backdrop = (props)=>{
    return(
        <div className={modelcls.Backdrop}/>
    )
}

const ModalOverlay=(props)=>{
    return(
        <div className={modelcls.modal}>
            <div className={modelcls.content}>{props.children}</div>
        </div>
    )
}

const portalEle = document.getElementById('overlay')

const Modal = (props) => {
  return (
    <Fragment>
        {ReactDOM.createPortal(
                                <Backdrop/>,
                                portalEle
                                )}
        {ReactDOM.createPortal(
            <ModalOverlay>
                {props.children}
            </ModalOverlay>
        ,portalEle)}
    </Fragment>
  )
}

export default Modal
