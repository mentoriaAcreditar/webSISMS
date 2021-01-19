import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: #6554c0; */
  /* border: solid 2px #6554c0; */
  border-radius: 16px;
  background: #fff;
  height: auto;
  bottom: 20px;
  opacity: 1;
  padding: 36px;
  margin-top: 10px;

  h1 {
    margin: 0px 0px 20px 0;
  }
`;
