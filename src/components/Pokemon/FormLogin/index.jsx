import { useContext } from 'react'
import { nanoid } from 'nanoid'
import { navigate } from '@reach/router'

import { ContextAuth } from 'context/ContextAuth'

import validateLogin from 'helpers/loginValidate'

import useForm from 'hooks/useForm'
import Input from 'components/Common/Input'
import { BtnSubmit, ContainerForm, LoginContainer, TitleWelcome } from './styles'

const onSubmit = (activeAuth) => () => {
  const token = nanoid()
  activeAuth(token)
  navigate('/home')
}

const FormLogin = () => {
  const { activeAuth } = useContext(ContextAuth)
  const { values, errors, handleChange, handleSubmit } = useForm(onSubmit(activeAuth), validateLogin)
  const { email, password } = values
  
  return (
    <LoginContainer>
      <TitleWelcome>Bienvenido, Inicia sesión</TitleWelcome>
      <ContainerForm onSubmit={handleSubmit}>
        <Input 
          label="Correo Eléctronico*"
          name="email" 
          type="email" 
          value={email || ''} 
          onChange={handleChange}
          helperText={errors?.email}/>
        <Input 
          label="Contraseña*"
          name="password" 
          type="password" 
          value={password || ''} 
          onChange={handleChange}
          helperText={errors?.password}/>
        <BtnSubmit type="submit">Iniciar sesión</BtnSubmit>
      </ContainerForm>
    </LoginContainer>
  )
}

export default FormLogin