import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 38px;
  display: block;
  width: 100%;
  text-align: center;
  &[disabled] {
    opacity: .7;
    cursor: wait;
  }
`