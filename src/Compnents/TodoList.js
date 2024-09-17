import Todo from './Todo';

const TodoList=({todoList, setTodoList})=>{
    return(<div>
        {todoList.map((todoitem)=>(
            <Todo todoList={todoList} setTodoList={setTodoList} todoitem={todoitem}></Todo>
        ))}
    </div>)
}
export default TodoList;