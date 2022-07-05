import { useRef } from "react";
import { FiCheckSquare } from "../../../node_modules/react-icons/fi/index";
import { FoodType } from "../Food/index";
import Input from "../Input/index";
import { Modal } from "../Modal/index";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../Form";

type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodType) => void;
};

type Inputs = {
  image: string;
  name: string;
  price: string;
  description: string;
};
export function ModalAddFood({
  handleAddFood,
  isOpen,
  setIsOpen,
}: ModalAddFoodProps) {
  const validationSchema = Yup.object().shape({
    image: Yup.string().required("Imagem é obrigatório"),
    name: Yup.string().required("Nome é obrigatório"),
    price: Yup.string().required("Preço é obrigatório"),
    description: Yup.string().required("Descrição é obrigatório"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>(formOptions);

  const onSubmit: SubmitHandler<FoodType> = (data) => {
    console.log("data", data);
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={onSubmit}>
        <h1>Novo Prato</h1>
        <div className='container'>
          <Input name='image' placeholder='Cole o link aqui' />
          <span className='invalid-new-food'>{errors.image?.message}</span>

          <Input name='name' placeholder='Ex: Moda Italiana' />
          <span className='invalid-new-food'>{errors.name?.message}</span>

          <Input name='price' placeholder='Ex: 19.90' />
          <span className='invalid-new-food'>{errors.price?.message}</span>

          <Input name='description' placeholder='Descrição' />
          <span className='invalid-new-food'>
            {errors.description?.message}
          </span>
        </div>

        <button type='submit' data-testid='add-food-button'>
          <p className='text'>Adicionar Prato</p>
          <div className='icon'>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
