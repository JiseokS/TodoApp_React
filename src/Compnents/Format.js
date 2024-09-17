import styles from '../style.module.css';
import Body from './Body';
import TodoList from './TodoList';

const Format=({todo, setTodo, todoList, setTodoList})=>{
    const date = new Date();
    const year = date.getFullYear();
    const monthAbbreviaton = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthAbbreviaton[date.getMonth()];
    const day = date.getDate();

    return (<div className={styles.TodoFormat}>
        <div className={styles.appHeader}>
        <div className={styles.Title}>Todo List</div>
            <div className={styles.dataArea}>
                <div className={styles.leftDate}>
                    <div className={styles.dateArea}>{day}</div>
                </div>
                <div className={styles.rightDate}>
                    <div className={styles.MonthArea}>{month}</div>
                    <div className={styles.YearArea}>{year}</div>
                </div>
            </div>
        </div>
        <Body todo={todo}
       setTodo={setTodo} 
       todoList={todoList}
       setTodoList={setTodoList}></Body>
       <TodoList todoList={todoList} setTodoList={setTodoList}></TodoList>
    </div>)
}

export default Format;