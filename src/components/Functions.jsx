import {PropTypes} from 'prop-types'
import Button from "./Button"

const Functions = ({onContentClear, onDelete}) => {
  return (
    <section className="functions">
      <Button type="button-long-text" text="clear" clickHandler={onContentClear}></Button>
      <Button text="&larr;" clickHandler={onDelete}></Button>
    </section>
  )
}

Functions.propTypes = {
  onContentClear: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Functions