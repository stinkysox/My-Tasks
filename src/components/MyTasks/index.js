import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import OptionItem from '../OptionItem'
import ListItem from '../ListItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    task: '',
    category: tagsList[0].optionId,
    tasksArray: [],
    activeId: '',
  }

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeCategory = event => {
    this.setState({category: event.target.value})
  }

  onActiveIdChange = id => {
    this.setState(prevState => ({
      activeId: prevState.activeId === id ? '' : id,
    }))
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {task, category} = this.state

    const newObject = {
      id: uuidv4(),
      task,
      category,
    }

    this.setState(prevState => ({
      tasksArray: [...prevState.tasksArray, newObject],
      task: '',
      category: tagsList[0].displayText,
    }))
  }

  render() {
    const {tasksArray, task, category, activeId} = this.state
    const filteredData =
      activeId === ''
        ? tasksArray
        : tasksArray.filter(
            eachItem =>
              eachItem.category.toLowerCase() === activeId.toLowerCase(),
          )

    const isEmpty = tasksArray.length === 0 || filteredData.length === 0

    return (
      <div className="bg-container">
        <div className="first-container">
          <h1 className="top-heading">Create a task!</h1>
          <form className="from-container" onSubmit={this.onFormSubmit}>
            <div className="input-container">
              <label className="label" htmlFor="searchInput">
                Task
              </label>
              <br />
              <input
                type="text"
                id="searchInput"
                className="input-element"
                placeholder="Enter the task here"
                onChange={this.onChangeTask}
                value={task}
              />
            </div>

            <div className="inut-container">
              <label className="label" htmlFor="selectInput">
                Tags
              </label>
              <br />
              <select
                id="selectInput"
                className="input-element"
                onChange={this.onChangeCategory}
                value={category}
              >
                {tagsList.map(eachItem => (
                  <option key={eachItem.optionId} value={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <div className="add-task-container">
              <button type="submit" className="add-task-btn">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="second-container">
          <h1 className="heading-two">Tags</h1>
          <ul className="tags-container">
            {tagsList.map(eachItem => (
              <OptionItem
                key={eachItem.optionId}
                details={eachItem}
                isClicked={activeId === eachItem.optionId}
                onActiveIdChange={this.onActiveIdChange}
              />
            ))}
          </ul>
          <h1 className="heading-two">Tasks</h1>
          <ul className="tasks-container">
            {isEmpty ? (
              <p className="no-tasks">No Tasks Added Yet</p>
            ) : (
              filteredData.map(eachItem => (
                <ListItem key={eachItem.id} details={eachItem} />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyTasks
