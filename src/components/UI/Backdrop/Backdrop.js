import React from 'react';
import classes from './Backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);




// {
//         let res = null;

//         if(props.show) {
//             res = <div className={classes.Backdrop} onClick={props.clicked}></div>;
//         }
//         console.log(res);

//         return {res}
//     }

export default backdrop;