import styled from 'styled-components'

export const ContentLogo = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Ul = styled.ul`
  margin: 20px 15px;
  ul{
    display: none;
    padding: 0px;
    width: 120px;
    margin-top: 5px;
    box-shadow: 0px 0px 5px 0px rgba(50,50,50,0.75);
    li{
      text-align: center;
      button{
        width: 100%;
        padding: 2px;
        cursor: pointer;
      }
    }
  }
`
export const Input = styled.input`
  display: none;
  :checked ~ ul{
    display: block;
  }
`
export const Li = styled.li`
  text-align: end;
  label{
    cursor: pointer;
    svg{
      vertical-align: middle;
      margin-left: 5px;
    }
  }
`