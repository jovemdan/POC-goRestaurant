import { useRef } from 'react'
import { FiCheckSquare } from '../../../node_modules/react-icons/fi/index'
import { FoodType } from '../Food/index'
import Input from '../Input/index'
import { Modal } from '../Modal/index'

import { Form } from './styles'

import { useForm, SubmitHandler } from "react-hook-form"
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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

  const validationSchema = Yup.object().shape({
    image: Yup.string().required('Imagem é obrigatório'),
    name: Yup.string().required('Nome é obrigatório'),
    price: Yup.string().required('Preço é obrigatório'),
    description: Yup.string().required('Descrição é obrigatório'),
  })

  const formOptions = { resolver: yupResolver(validationSchema) }
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>(formOptions)
  console.log(errors)

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
          <div className="invalid-new-food">{errors.image?.message}</div>
          <input name="name" placeholder="Ex: Moda Italiana" {...register("name")} />
          <div className="invalid-new-food">{errors.name?.message}</div>
          <input name="price" placeholder="Ex: 19.90" {...register("price")} />
          <div className="invalid-new-food">{errors.price?.message}</div>
          <input name="description" placeholder="Descrição" {...register("description")} />
          <div className="invalid-new-food">{errors.description?.message}</div>
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
