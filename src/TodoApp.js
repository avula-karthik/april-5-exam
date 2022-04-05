import axios from 'axios';
import { useState } from 'react';
const TodoApp = () => {
    let [todos, setTodos] = useState([]);
    const addTodo = (e) => {
        getTodos();
        e.preventDefault();
        let title = e.target.title.value;
        let status = parseInt(e.target.title.value);
        let description = e.target.description.value;
        axios
            .post('/sqltodo', { title, status, description })
            .then((res) => console.log(res.data))
            .catch((e) => console.log(e));
        getTodos();
    };
    const getTodos = () => {
        axios.get('/sqltodo').then((res) => setTodos(res.data));
    };
    return (
        <div>
            <h4>Welcome to Todo Application</h4>
            <form className='form' onSubmit={addTodo}>
                <label>
                    <h5>Title</h5>
                </label>
                <input
                    type='text'
                    name='title'
                    placeholder='todo..'
                    className='form-control'
                />
                <br />
                <label>
                    <h5>Status</h5>
                </label>
                <select name='status'>
                    <option value='false'>Incomplete</option>
                    <option value='true'>Complete</option>
                </select>
                <br />
                <label>
                    <h5>Description</h5>
                </label>
                <input
                    type='text'
                    className='form-control'
                    name='description'
                    placeholder='description..'
                />
                <div className='text-center upSpace'>
                    <button className='btn btn-primary'>Add Todo</button>
                </div>
            </form>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Description</th>
                    <th>CreatedAt</th>
                    <th>UpdatedAt</th>
                </tr>
                {todos.map((val, index) => {
                    return (
                        <tr>
                            <td>{val.id}</td>
                            <td>{val.title}</td>
                            <td>{val.status}</td>
                            <td>{val.description}</td>
                            <td>{val.createdAt}</td>
                            <td>{val.updatedAt}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};
export default TodoApp;
