import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Todos from './todoCard'

function MainPage () {
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [status, setStatus] = React.useState('')
    const [date, setDate] = React.useState('')
    const [data, setData] = React.useState([])



    function titleInput (e) {
        setTitle(e.target.value)
    }
    function descInput (e) {
        setDesc(e.target.value)
    }
    function statusInput (e) {
        setStatus(e.target.value)
    }
    function dateInput (e) {
        setDate(e.target.value)
    }

    function Logout () {
        localStorage.clear()
    }

    function submitAddNew () {
        // console.log(email)
        // console.log(password)
        let payload = {
            title: title,
            description: desc,
            status: status,
            date: date
        }
        axios({
            method:'post',
            url: 'http://localhost:3001/todos',
            data: payload,
            headers: {'token_access': localStorage.getItem('token_access')}
        })
        .then(data => {
            console.log('mashokk')
            setTitle('')
            setDesc('')
            setStatus('')
            setDate('')
            fetch()
        })
        .catch(err => {
            console.log(err)
        })
    }

    function fetch () {
        axios({
            method:'get',
            url: 'http://localhost:3001/todos',
            headers: {'token_access': localStorage.getItem('token_access')}
        })
        .then(todos => {
            setData(todos.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function deleteTodo(todoId) {
        axios({
            method:'delete',
            url: 'http://localhost:3001/todos/'+todoId,
            headers: {'token_access': localStorage.getItem('token_access')}
        })
        .then(result => {
            console.log('hapusss')
            fetch()
            // return (
            //     <Redirect to= {{pathname: "/mainpage"}} />
            // )
        })
        .catch(err => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        axios({
            method:'get',
            url: 'http://localhost:3001/todos',
            headers: {'token_access': localStorage.getItem('token_access')}
        })
        .then(todos => {
            setData(todos.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]) 
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-primary justify-content-between fixed-top">
                <h2 className="navbar-brand">Fancy To-Do</h2>
                <div className="form-inline">
                    <Link to='/'>
                        <button onClick={Logout} id="btn-logout" className="btn btn-outline-light btn-lg my-2 my-sm-0" type="submit">Logout</button>
                    </Link>
                </div>
            </nav>
            <div id="main-page" className='mt-4'>
            <div id="jumbotron" className="row jumbotron jumbotron-fluid">
                <div className="container ml-5">
                    <div id="addNew-form">
                        <div id='container-addform' className="container rounded bg-light shadow">
                        <h1>To Do List</h1>
                        
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="input-title">Title</label>
                            <input onChange={titleInput}  type="text" id="input-title" value={title}/>
                        </div>
                        <br/>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="input-description">Description</label>
                            <input onChange={descInput} type="text" id="input-description" value={desc}/>
                        </div>
                            
                            <br/>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="input-status">Status</label>
                            <input onChange={statusInput}  type="text" id="input-status" value={status} />
                        </div>
                            <br/>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label" htmlFor="input-date">Due Date</label>
                            <input onChange={dateInput} type="date" id="input-date" value={date} />
                        </div>
                            <br/>
                            <button onClick={submitAddNew} type="submit" className="btn-lg mb-3">Add New</button>
                        </div>
                        </div>
                    </div>   
                </div>
                <br/>
                <div className="row text-center ml-4 " id="todo-list">
                    {
                        data.map(todo => (
                            <Todos key={todo.id} title={todo.title} description={todo.description} status={todo.status} date={todo.date} id={todo.id} deleteTodo={deleteTodo.bind(deleteTodo, todo.id)} fetch={fetch}/>
                        ))
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default MainPage