import { useRef } from 'react'
import { FiCheckSquare } from '../../../node_modules/react-icons/fi/index'
import { FoodType } from '../Food/index'
import Input from '../Input/index'
import { Modal } from '../Modal/index'

import { Form } from './styles'

import { useForm, SubmitHandler } from "react-hook-form"

type ModalAddFoodProps = {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (food: FoodType) => void
}

type Inputs = {
  image: string,
  name: string,
  price: string,
  description: string,
}
export function ModalAddFood({ handleAddFood, isOpen, setIsOpen }: ModalAddFoodProps) {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()
  const onSubmit: SubmitHandler<FoodType> = data => {
    handleAddFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Novo Prato</h1>
        <div className="container">
          <input name="image" placeholder="Cole o link aqui" {...register("image")} />
          <input name="name" placeholder="Ex: Moda Italiana" {...register("name")} />
          <input name="price" placeholder="Ex: 19.90" {...register("price")} />
          <input name="description" placeholder="Descrição" {...register("description")} />
        </div>

        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
};
