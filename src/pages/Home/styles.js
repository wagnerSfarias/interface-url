import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(#232630, #050507);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem ;
  gap: 2rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
    width: 56%; 
    box-shadow: 5px 0px 50px 2px rgba(214,207,214,0.2);
    height: fit-content;
    padding: 1.5rem;
    border-radius: 0.450rem;

    div{
      display: flex;
      gap: 1rem;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
    
`;

export const Title = styled.h1`
    color: #fff;
    font-style: normal; 
    font-weight: 400; 

    @media (max-width: 480px) {
      font-size: 1.562rem;
    } 
`;

export const Input = styled.input`
    border-radius: 0.450rem;
    border: none;
    padding: 0.5650rem ;
    outline: none;
    width: 80%; 
    font-size: 0.937rem;
    color: #FFF;
    border: 1px solid rgba(214,207,214,0.6);
    background: transparent;

    @media (max-width: 480px) {
    width: 100%; 
    } 
`;

export const Button = styled.button`
    border: none; 
    background-color: #6A44FF ;
    color: #fff;
    padding: 0.812rem 2.5rem ; 
    border-radius: inherit;
    font-size: 0.937rem;
    cursor: pointer;

    &:hover {
        opacity: 0.8; 
    }

    &:active {
      opacity: 0.5; 
    }
`;

export const ContainerLinks = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    justify-content: center;
    width: 56%; 
    height: fit-content;
    padding: 1.5rem;
    border-radius: 0.450rem;
    
    @media (max-width: 768px) {
      width: 80%;
      padding: 1rem;
    }

    @media (max-width: 480px) {
        width: 100%;
    } 
`;

export const Content = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      border-radius: 0.450rem;
      padding: 1rem 1.5rem;
      border: 1px solid rgba(214,207,214,0.6);
  `;

  export const Link = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.875rem;
      margin-top: 0.875rem;
      
      p{
        color: #fff;
        word-break: break-all;
        text-align: center;
        font-size: 1.125rem;
      }

      span{
        color: rgba(214,207,214,0.6);
        font-size: 0.875rem;            
      }

  .icon{
        color:  #6A44FF;
        width: 50px;
        height: 28px;
        cursor: pointer;
        
      &:hover {
        opacity: 0.5; 
      }

      &:active {
        opacity: 0.5; 
      }

  }

      @media (max-width: 768px) {
        padding: 0;

        p{
          font-size: 1rem;
          }

    .icon{
          &:hover {
            opacity: 1; 
          }

          &:active {
            opacity: 1; 
          }
        }
      }

      @media (max-width: 480px) {
        width: 100%;
  
          p{
            font-size: 0.875rem;
          }
        
      } 
    
  `