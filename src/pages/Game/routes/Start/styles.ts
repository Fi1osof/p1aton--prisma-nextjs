import styled from 'styled-components'
import { LayoutStyled } from './../../components/Layout/styles'

export const StartPageStyled = styled.div`
  ${LayoutStyled} {


.flex {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 40px;

}

.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0); 
  margin-bottom: 40px;
  
}

.card {
  width: 100%;
  height: 380px;
  cursor: pointer;
}
  }
  `