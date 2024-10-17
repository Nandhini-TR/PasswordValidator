import {useState} from 'react'

import {
  BgContainer,
  PasswordContainer,
  Heading,
  Description,
  TextInput,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [text, setText] = useState('')

  const onChangePassword = event => {
    setText(event.target.value)
  }

  const isValid = text.length < 8

  return (
    <BgContainer>
      <PasswordContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <TextInput type="password" onChange={onChangePassword} value={text} />
        {isValid && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </PasswordContainer>
    </BgContainer>
  )
}

export default PasswordValidator
