import styled, { keyframes } from "styled-components";

const Pending = () => {
    return (
      <>
        <PendingWrap>
          <PendingContent />
        </PendingWrap>
      </>
    );
  };
  
export default Pending;

const PendingWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.745);
  z-index: 10;
`;

const indicator = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

const PendingContent = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid;
  border-color: #3d5af1 transparent #3d5af1 transparent;
  border-radius: 50%;
  animation: ${indicator} 1.2s linear infinite;
`;
