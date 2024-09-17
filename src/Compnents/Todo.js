import styles from '../style.module.css';

const Todo=({todoList, setTodoList, todoitem})=>{
    const handleDelete=()=>{
        setTodoList(todoList.filter((item)=> item.id !== todoitem.id));
    }
    return(<div>
        <div>
            <h3 className={styles.item}>{todoitem.name}</h3>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>);
}

export default Todo;