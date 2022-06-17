import { FormEvent, useState } from 'react';

import './global.css';
import styles from './App.module.css';

import { Header } from "./Components/Header";
import { Clipboard, PlusCircle } from 'phosphor-react';
import { ItemTask } from './Components/ItemTask';

interface TaskProps {
  id: number;
  name: string;
  done: boolean;
}

export function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState<TaskProps[]>(
    [
      { id: 1, name: 'Comprar pão', done: false },
      { id: 2, name: 'Comprar bolo', done: true }
    ]);

  function handleTaskChange(id: number) {
    let newList = [...taskList];
    for (let i in newList) {
      if (newList[i].id === id) {
        console.log(newList[i].id, id);

        newList[i].done = !newList[i].done;
      }
    }
    setTaskList(newList);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    let newList = [...taskList];
    newList.push({
      id: taskList.length + 1,
      name: task,
      done: false
    });
    setTaskList(newList);
    setTask('');
  }

  function handleDeleteTask(idTaskToDelete: number) {
    const tasksWithoutDeletedOne = taskList.filter(task => {
      return task.id !== idTaskToDelete;
    });

    setTaskList(tasksWithoutDeletedOne);
  }

  const tasksDone = taskList.filter(function (item) {
    if (item.done) {
      return true
    }
  });

  return (
    <div >
      <Header />
      <main>
        <div className={styles.wrapperNewTask} >
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <strong> Criar </strong>
            <div><PlusCircle size={16} /></div>
          </button>
        </div>

        <div className={styles.wrapperTasks}>
          <div className={styles.wrapperTotalTasks}>
            <div>
              <span>Tarefas Criadas</span>
              <div> {taskList.length} </div>
            </div>
            <div>
              <span className={styles.done}>Concluídas</span>
              <div> {tasksDone.length} de {taskList.length} </div>
            </div>
          </div>
          {
            taskList.length === 0 &&
            <div className={styles.wrapperNoTasks}>
              <Clipboard size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>

          }
        </div>
        {
          taskList.length > 0 &&
          <div>
            {
              taskList.map((taskItem) => (
                <ItemTask
                  key={taskItem.id}
                  task={taskItem}
                  onChange={handleTaskChange}
                  onDelete={handleDeleteTask}
                />
              ))
            }
          </div>
        }
      </main>
    </div>
  )
} 
