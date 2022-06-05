import { useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FiCheckSquare } from '../../../node_modules/react-icons/fi/index'
import { FoodType } from '../Food/index'
import Input from '../Input/index'
import { Modal } from '../Modal/index'

import { Form } from './styles'

type Inputs = {
  image: string,
  name: string,
  price: string,
  description: string,
}
type ModalEditedProps = {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: FoodType
  handleUpdateFood: (food: FoodType) => void
}
export function ModalEditFood({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditedProps) {
  // const formRef = useRef(null)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    defaultValues: {
      image: editingFood.image,
      name: editingFood.name,
      price: editingFood.price,
      description: editingFood.description,

    }
  })
  const onSubmit: SubmitHandler<FoodType> = data => {
    handleUpdateFood(data)
    setIsOpen()
  }

  console.log(editingFood)
  // const formRef = useRef(null)
  // async function handleSubmit(data: FoodType) {
  //   handleUpdateFood(data)
  //   setIsOpen()
  // }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit(onSubmit)} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <div className="container">
          <input name="image" placeholder="Cole o link aqui" {...register("image")} />
          <input name="name" placeholder="Ex: Moda Italiana" {...register("name")} />
          <input name="price" placeholder="Ex: 19.90" {...register("price")} />
          <input name="description" placeholder="Descrição" {...register("description")} />
        </div>

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  )
};
