import { Error, FormGroup, InputContent, Label } from './styles'
import PropTypes from 'prop-types'

const Input = ({ helperText, label, ...props}) => {
  return (
    <FormGroup>
      {label && <Label>{label}</Label>}
      <InputContent {...props}/>
      {helperText && <Error>{helperText}</Error>}
    </FormGroup>
  )
}

Input.propTypes = {
  helperText: PropTypes.string,
  label: PropTypes.string,
}

export default Input
