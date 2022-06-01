import { useRef } from 'react'
import { FiCheckSquare } from '../../../node_modules/react-icons/fi/index'
import { FoodType } from '../Food/index'
import Input from '../Input/index'
import { Modal } from '../Modal/index'

import { Form } from './styles'

type ModalEditedProps = {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: FoodType
  handleUpdateFood: (food: FoodType) => void
}
export function ModalEditFood({ isOpen, setIsOpen, editingFood, handleUpdateFood }: ModalEditedProps) {

  const formRef = useRef(null)
  async function handleSubmit(data: FoodType) {
    handleUpdateFood(data)
    setIsOpen()
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

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
