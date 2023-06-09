import styled from 'styled-components';

export const ListElem = styled.li`
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: space-between;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Button = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0;
  padding: 5px 10px;

  border: 1px solid #848c8e;
  background-color: transparent;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  box-shadow: 0px 10px 13px -7px #000000, 0px 4px 17px -6px rgba(0, 0, 0, 0);

  :hover,
  :focus {
    background-color: lightsalmon;
    color: black;
    scale: 1.1;
  }
`;
