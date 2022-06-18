import { Trash } from 'phosphor-react';
import styles from './ItemTask.module.css';

interface TaskProps {
    id: number;
    name: string;
    done: boolean;
}
interface ItemTaskProps {
    task: TaskProps
    onChange: (id: number) => void;
    onDelete: (id: number) => void;
}

export function ItemTask({ task, onChange, onDelete }: ItemTaskProps) {

    function handleDeleteComment() {
        onDelete(task.id)
    }
    return (
        <div className={styles.task}>
            <div className={styles.round}>
                <input
                    type="checkbox"
                    id={task.id.toString()}
                    checked={task.done}
                    onChange={e => onChange(task.id)}
                />
                <label htmlFor={task.id.toString()}></label>
            </div>

            <label>

                {task.done &&
                    <>
                        <del>{task.name}</del>
                    </>
                }

                {!task.done &&
                    <>{task.name}</>
                }
            </label>
            <button
                title='Deletar tarefa'
                onClick={handleDeleteComment}
            >
                <Trash size={14} />
            </button>
        </div>
    );
}