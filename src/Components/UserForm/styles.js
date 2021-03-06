import styled from 'styled-components'

export const Form = styled.form`
  padding: 16px 0;
`
export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
  &[disabled]{
    opacity: .7;
  }
`
export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled]{
    opacity: .5;
  }
  /*
    Tambien lo podemos hacer por props
    opacity: ${({ disabled }) => disabled ? '.5' : '1'}; 
  */
`
export const BtnChangeForm = styled.button`
  color: #0d6efd;
  font-size: .7em;
  cursor: pointer;
  span{
    color: #000;
  }
`
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 8px 0;
`
