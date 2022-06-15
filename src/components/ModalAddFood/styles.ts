import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

export const Form = styled(Unform)`
  padding: 48px 40px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }

  button {
    margin-top: 48px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: #41c900;
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1rem;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #b7b7cc;
    background: #fff;

    border-radius: 8px;
    padding: 18px 24px;
    width: 100%;
    font-size: 16px;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  div.container .invalid-new-food {
    color:#c72828;
    font-size:0.8rem;
    align-self: flex-start;
  }

`


