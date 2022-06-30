import { useEffect, useRef, useState, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";

type InputsProps = {
  name: "image" | "name" | "price" | "description";
  placeholder: string;
};

type Inputs = {
  image: string;
  name: string;
  price: string;
  description: string;
};

const Input = ({ name, placeholder, ...rest }: InputsProps) => {
  const { register, watch } = useForm<Inputs>();
  console.log(watch("image"));

  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder={placeholder}
        {...register(name)}
        {...rest}
      />
    </Container>
  );
};

export default Input;
