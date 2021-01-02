import React, { Fragment } from 'react'
import axios from 'axios'

function Todos (props) {

    const [editStat, setEditStat] = React.useState(false)
    const [title, setTitle] = React.useState(props.title)
    const [description, setDescription] = React.useState(props.description)
    const [status, setStatus] = React.useState(props.status)
    const [date, setDate] = React.useState(props.date)
    
    function toEdit () {
        setEditStat(true)
    }
    function cancelEdit () {
        setEditStat(false)
    }
    function editTitle(e) {
        setTitle(e.target.value)
    }
    function editDesc(e) {
        setDescription(e.target.value)
    }
    function editStatus(e) {
        setStatus(e.target.value)
    }
    function editDate(e) {
        setDate(e.target.value)
    }
    function submitEdit (editId) {
        let payload = {
            title: title,
            description: description,
            status: status,
            date: date
        }
        axios({
            method:'put',
            url: 'http://localhost:3001/todos/'+ editId,
            data: payload ,
            headers: {'token_access': localStorage.getItem('token_access')}
        })
        .then(result => {
            setEditStat(false)
            props.fetch()
        })
        .catch(err => {
            console.log(err)
        })
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
                                            <h6 className="card-title"><b className="larger-text"  >Status : </b>{props.status}</h6> 
                                            <h6 className="card-title"><b className="larger-text" >Due date :</b> {props.date.substr(0, 10)}</h6> 
                                            <button onClick={props.deleteTodo} className=" btn btn-success btn-lg mr-1" ><i  className='todo-button fa fa-check'></i></button>
                                            <button onClick={toEdit} className=" btn btn-info btn-lg "  ><i  className='todo-button fas'>&#xf044;</i> </button> 
                                        </Fragment>

                                    ) : (
                                        <Fragment>
                                            <input onChange={editTitle} className="card-title bg-light text-dark shadow" value={title}/>
                                            <input onChange={editDesc} className="card-text rounded" value={description}/>
                                            <input onChange={editStatus} className="card-text rounded mt-2" value={status} />
                                            
                                            <input onChange={editDate} className='mb-2 mt-1' type="date" id="input-putDate" value={date.substr(0, 10)}/>
                                            <div className="row container justify-content-center">
                                                <button onClick={submitEdit.bind(submitEdit, props.id)} className=" btn btn-success btn-lg mr-1" ><i  className='todo-button fa fa-check'></i></button>
                                                <button onClick={cancelEdit} className=" btn btn-danger btn-lg " >Cancel </button> 
                                            </div>
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