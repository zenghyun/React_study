import React from 'react';

import CardStyldVer from './CardStyldVer';
import ButtonStyledVer from './ButtonStyledVer';

import styled from 'styled-components';

const ErrorModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
  
  .modal {
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
  }
  
  .header {
    background: #4f005f;
    padding: 1rem;
  }
  
  .header h2 {
    margin: 0;
    color: white;
  }
  
  .content {
    padding: 1rem;
  }
  
  .actions {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  
  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

const ErrorModalStyledVer = ({title, message, onConfirm }) => {
    return (
        <ErrorModal onClick={onConfirm}>
            <CardStyldVer className='modal'>
                    <header className='header'>
                        <h2>{title}</h2>
                    </header>
                    <div className='content'>
                    <p>{message}</p>
                    </div>
                    <footer className='actions'>
                <ButtonStyledVer onClick={onConfirm}>Okay</ButtonStyledVer>
                    </footer>
            </CardStyldVer>
            
        </ErrorModal>
    );
};

export default ErrorModalStyledVer;