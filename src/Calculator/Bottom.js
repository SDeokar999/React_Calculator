import React from 'react';
import './Controller.css';


const Bottom = ({ data, cal }) => {
    return <div>
        <div id="digit">
            {data.map(function ({ id }) {
                return (<div className="box" onClick={() => { cal(id) }}>{id}</div>);
            })
            }
        </div>
    </div>
    }
export default Bottom;

