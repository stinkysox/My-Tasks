import './index.css'

const OptionItem = props => {
  const {details, isClicked, onActiveIdChange} = props
  const {optionId, displayText} = details

  const btnClass = isClicked ? 'add-styles' : 'tag-btn'

  const onChangeId = () => {
    onActiveIdChange(optionId)
  }

  return (
    <li className="list-item">
      <button type="button" className={btnClass} onClick={onChangeId}>
        {displayText}
      </button>
    </li>
  )
}

export default OptionItem
