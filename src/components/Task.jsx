import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes style={faTimesStyle} onClick={() => onDelete(task.id)} />
      </h3>
      <small>{task.day}</small>
    </div>
  );
};

const faTimesStyle = {
  color: '#c0392b',
  cursor: 'pointer',
};

export default Task;
