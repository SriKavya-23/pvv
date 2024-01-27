import {useState} from 'react'
import {
  PasswordValidatorContainer,
  PasswordInput,
  ErrorMessage,
  Message,
  Heading,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const handleChange = event => {
    setPassword(event.target.value)
  }

  const isInvalidPassword = password.length < 8

  return (
    <PasswordValidatorContainer>
      <Heading>Password Validator</Heading>
      <Message>Check how strong and secure is your password</Message>
      <PasswordInput
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handleChange}
      />
      {isInvalidPassword && (
        <ErrorMessage show={isInvalidPassword}>
          Your password must be at least 8 characters
        </ErrorMessage>
      )}
    </PasswordValidatorContainer>
  )
}

export default PasswordValidator
