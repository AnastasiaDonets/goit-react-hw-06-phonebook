import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormikForm = styled(Form)`
  width: 500px;
  margin: 20px auto 20px 10px;
  padding: 20px 10px;
  border: 1px solid #848c8e;
  box-shadow: 0px 10px 13px -7px #000000, 0px 4px 17px -6px rgba(0, 0, 0, 0);
`;

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: 500;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled(Field)`
  display: block;
  margin: 10px 0 0 10px;
`;

export const ErrorText = styled(ErrorMessage)`
  margin: 5px 0;
  color: red;
`;

export const FormBtn = styled.button`
  cursor: pointer;
  margin: 20px 0 0 200px;
  padding: 5px 10px;
  border: 1px solid #848c8e;
  background-color: transparent;
  font-size: 18px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: lightseagreen;
    color: black;
    scale: 1.1;
  }
`;
