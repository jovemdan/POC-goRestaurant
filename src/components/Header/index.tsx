import { FiPlusSquare } from 'react-icons/fi'

import { Container } from './styles'

export function Header({ openModal }: { openModal: () => void }) {
  return (
    <Container>
      <header>
        <img src="./assets/logo.svg" alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
};

export default Header
