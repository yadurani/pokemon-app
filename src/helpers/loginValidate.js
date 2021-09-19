const validateLogin = (values) => {
  let errors = {}
  if(!values.email) {
    errors.email = 'Email es un campo obligatorio'
  } else if(!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email no es válido'
  }
  if(!values.password) {
    errors.password = 'Contraseña es un campo obligatorio'
  }else if(values.password.length < 5) {
    errors.password = 'La contraseña debe tener mas de 5 caracteres'
  }
  return errors
}

export default validateLogin