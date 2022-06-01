//import { useField } from '@unform/core'
import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'



import { Container } from './styles'

const Input = ({ name, ...rest }: { name: string, [x: string]: any }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  //const { fieldName, defaultValue, registerField } = useField(name)

  //todo usar Lib
  const teste = {
    fieldName: '',
    defaultValue: '',
    registerField: ({ name, ref, path }) => ''
  }
  const { fieldName, defaultValue, registerField } = teste

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  )
}

export default Input
