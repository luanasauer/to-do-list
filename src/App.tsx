import { useState } from 'react';

import './global.css';
import styles from './App.module.css';

import { Header } from "./Components/Header";
import { Clipboard, PlusCircle } from 'phosphor-react';
import { ItemTask } from './Components/ItemTask';

export function App() {

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState(['tarefa1', 'tarefa2']);

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
          <button type="submit" onClick={() => { }}>
            <strong> Criar </strong>
            <div><PlusCircle size={16} /></div>
          </button>
        </div>
        {
          taskList.length === 0 &&
          <div className={styles.wrapperTasks}>
            <div className={styles.wrapperTotalTasks}>
              <div>
                <span>Tarefas Criadas</span>
                <div> 0 </div>
              </div>
              <div>
                <span>Concluídas</span>
                <div> 0 </div>
              </div>
            </div>
            <div className={styles.wrapperNoTasks}>
              <Clipboard size={56} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </div>
        }
        {
          taskList.length > 0 &&
          <div>
            <ItemTask />
          </div>
        }
      </main>
    </div>
  )
} 
