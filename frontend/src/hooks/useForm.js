import { useState, useCallback } from 'react'

export function useForm (initialValues, keyloggers, validations) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const resetForm = useCallback(() => {
    setValues(prevValues => {
      let newValues = {}
      for (const fieldName in prevValues) {
        newValues[fieldName] = ''
      }

      return newValues
    })
    setErrors({})
  }, [])

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    if (e.target.type === 'checkbox') {
      setValues(prevValues => ({ ...prevValues, [name]: !prevValues[name] }))
      return
    }

    const lastChar = value.slice(-1)
    if (keyloggers && !keyloggers[name]?.(lastChar)) return

    setValues(prevValues => ({ ...prevValues, [name]: value }))
    setErrors(prevErrors => ({ ...prevErrors, [name]: null }))
  }, [])

  const validateForm = () => {
    let newErrors = {}
    let formIsValid = true

    for (const fieldName in validations) {
      const validate = validations[fieldName]
      const value = values[fieldName]
      const error = validate(value)

      if (error) {
        newErrors[fieldName] = error
        formIsValid = false
      }
    }

    setErrors(newErrors)
    return formIsValid
  }


  return {
    values,
    errors,
    handleChange,
    validateForm,
    resetForm,
    setValues,
    setErrors,
  }
}