import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FoodType } from "../Food";
import { Forms } from "./styles";

type FormProps = {
  children: JSX.Element[];
  onSubmit: SubmitHandler<FoodType>;
  defaultValues?: any;
};

export default function Form({ defaultValues, children, onSubmit }: FormProps) {
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <Forms onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                key: child.props.name,
              },
            })
          : child;
      })}
    </Forms>
  );
}
