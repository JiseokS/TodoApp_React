import styles from '../style.module.css';
import {nanoid} from 'nanoid';

const Body=({todo, setTodo, todoList, setTodoList})=>{

    const handleChange=(event)=>{
        setTodo(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setTodoList([...todoList, {name: todo, id: nanoid() }]);
        //If enter value is empty, handleSubmit does not add into todoList
        if(todo.trim().length ===0)
        {
            console.log("empty value");
        }
        setTodo("");
    }
    return(
        <div className={styles.Body}>
            <form className={styles.AddItem} onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={todo} placeholder="Enter Todo Item"></input>
                <button className={styles.AddButton}type="submit">Add</button>
            </form>
        </div>
    )
}
export default Body;