import { useRef } from 'react'
import { FiCheckSquare } from '../../../node_modules/react-icons/fi/index'
import { FoodType } from '../Food/index'
import Input from '../Input/index'
import { Modal } from '../Modal/index'

import { Form } from './styles'

type ModalAddFoodProps = {
  isOpen: boolean
  setIsOpen: () => void
  handleAddFood: (food: FoodType) => void
}
export function ModalAddFood({ handleAddFood, isOpen, setIsOpen }: ModalAddFoodProps) {
  const formRef = useRef(null)

  async function handleSubmit(data: FoodType) {
    handleAddFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
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
