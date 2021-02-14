import styled from 'styled-components';

export const Container = styled.section`
 

  #card {
    background: #fff;
    border-radius: 5px;
    opacity: 1;

    box-shadow: 0px 15px 20px #00000012;
   
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;
    &:hover {
     border: 2px solid #4C4499;
    }

  }
  div{
    flex: 1;
    margin-top: 16px;
    position: relative;

    a{
      font-size: 20px;
      color: #6554C0;
      font-weight: bold;
      text-decoration: none;
      
    }

    .btnTrash{
      color: #4C4499;
      position: absolute;
      right: 20px;
      top: 0;
      border: 0;
      background-color: #fff;
    }

    p{
      font-size: 18px;
      color: #000;
      margin: 10px 0px;
    }

    span{
      font-size: 18px;
      color: #000;
      font-weight: bold;    
    }

  }
`;
