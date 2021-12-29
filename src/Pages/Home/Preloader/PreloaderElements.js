import styled from 'styled-components';

export const PreLoaderContainer = styled.div`
width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  `;

  export const Preloaders = styled.div`
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color:  #38b593;
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
  &:nth-of-type(1) {
  animation-delay: -0.4s;
}
&:nth-of-type(2) {
  animation-delay: -0.2s;

  @keyframes wave {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(100%);
    }
  }
}
  `;
  