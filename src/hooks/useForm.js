import { useEffect, useState } from 'react'

const useForm = (callback, validate) => {

  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors])

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}

export default useForm