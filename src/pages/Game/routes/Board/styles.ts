import styled from 'styled-components';


export const BoardStyled = styled.div`

/* root  */
  background-image: url(./assets/board.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vw / 1.71);
  position: relative;


.board {
  display: grid;
  grid-template-columns: auto auto auto;
  position: absolute;
  width: 50.3vw;
  height: 50.3vw;
  top: 4.3vw;
  left: 25.1vw;
}

.boardPlate {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  cursor: pointer;
}
.boardPlate:hover {
  background: rgba(255,255,255, .1);
}
.boardPlate.disabled:hover {
  background: none;
}

.card {
  max-height: 14.8vw;
  margin-top: -6vw;
}

.card:first-child {
  margin-top: 0;
}
.playerOne {
  position: absolute;
  top: 4.3vw;
  left: 5vw;
  width: 250px;
  height: 50.3vw;
}

`


