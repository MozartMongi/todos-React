import React, { Fragment } from 'react'
// import axios from 'axios'

function Todos (props) {

    const [editStat, setEditStat] = React.useState(false)
    
    function toEdit () {
        setEditStat(true)
    }
    function cancelEdit () {
        setEditStat(false)
    }

    return (
        <Fragment>
            {
                    <div className="col-lg-3 col-md-6 mb-4">
                        <div className="card h-100 shadow rounded">
                            <div className="card-body ">
                                {
                                    editStat === false ?  (
                                        <Fragment>
                                            <h4 className="card-title bg-secondary text-white">{props.title}</h4>
                                            <p className="card-text">{props.description}</p>
                                            <h6 className="card-title"><b className="larger-text"  >Status : </b>{props.status} <button className="btn btn-outline-success btn-sm" >update</button></h6> 
                                            <h6 className="card-title"><b className="larger-text" >Due date :</b> {props.date.substr(0, 10)}</h6> 
                                            <button onClick={props.deleteTodo} className=" btn btn-success btn-lg mr-1" ><i  className='todo-button fa fa-check'></i></button>
                                            <button onClick={toEdit} className=" btn btn-info btn-lg "  ><i  className='todo-button fas'>&#xf044;</i> </button> 
                                        </Fragment>

                                    ) : (
                                        <Fragment>
                                            <input className="card-title bg-light text-dark shadow" value={props.title}/>
                                            <input className="card-text rounded" value={props.description}/>
                                            <h6 className="card-title"><b className="larger-text"  >Status : </b>{props.status}</h6> 
                                            <label htmlFor="input-putDate"><b>Due Date</b></label>
                                            <br/>
                                            <input className='mb-2' type="date" id="input-putDate" value={props.date.substr(0, 10)}/>
                                            <br/>
                                            <button onClick={props.deleteTodo} className=" btn btn-success btn-lg mr-1" ><i  className='todo-button fa fa-check'></i></button>
                                            <button onClick={cancelEdit} className=" btn btn-danger btn-lg " >Cancel </button> 
                                        </Fragment>

                                    ) 
                                }
                            </div>
                        </div>
                    </div>
            }
        </Fragment>
    )
}

export default Todos