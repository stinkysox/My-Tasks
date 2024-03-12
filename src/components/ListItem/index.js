import './index.css'

const ListItem = props => {
  const {details} = props
  const {task, category} = details

  return (
    <li className="list-item-task">
      <p className="task">{task}</p>
      <div className="category-container">
        <p className="category">{category}</p>
      </div>
    </li>
  )
}

export default ListItem
