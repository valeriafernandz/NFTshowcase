import styled from "styled-components";


export const SectionTitle = styled.h2`
    text-align: center;
    display: block;
    font-size: 2rem;
    line-height: 1.7;
    text-transform: uppercase;
    letter-spacing: .2rem;
    background-image: linear-gradient(to right, #bcc3f5, #040f69);
    -webkit-background-clip: text;
    color: transparent;
    margin-top: 2rem;
    margin-bottom: 2rem;
` 

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    gap: 2rem 2rem;
    transition: transform .3s;
`

export const Card = styled.div`
    
    flex-direction: column;
    background-color: #fff;
    font-size: 1.5rem;
    padding: 2.5rem;
    border-radius: 3px;
    box-shadow: 0 .5rem 1rem #ada8a8;
    margin-bottom: 2rem;
    &:hover{
        transform: translateY(-1.5rem) scale(1.03);
    }

    @media (min-width: 320px) and (max-width:480){
        flex: 0 0 100%;
      
      }
      @media (min-width: 481px) and (max-width:768px) {
        flex: 0 0 100%;
      }
      @media (min-width: 769px) and (max-width:1024px) {
        flex: 0 0 50%;
      }
      @media (min-width: 1025px) and (max-width:1200px) {
        flex: 0 0 40%;
      }
      @media (min-width: 1201px) and (max-width:1400px) {
        flex: 0 0 30%;
      }
      @media (min-width: 1401px) and (max-width:1899px) {
        flex: 0 0 30%;
      }
      @media (min-width: 1900px) {
        flex: 0 0 20%;
      }
`

export const CardImgContainer = styled.div`
    width: 100%;
    height: 20rem;
    background-image: url(${({url})=>url});
    background-size: cover;
    background-position: center;
    position:relative;

`

export const CardLink = styled.a`
    text-decoration: none;
    color: #000000;
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .card-name{
        margin-top: 2rem;
        line-height: 1.7;
        text-transform: uppercase;
        letter-spacing: .2rem;
        background-image: linear-gradient(to right, #bcc3f5, #040f69);
        -webkit-background-clip: text;
        color: transparent;
    }

    .nft-id{
        font-size: 1rem;
    }
`
export const NFTSales = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-end;

    .bid{
        background-image: linear-gradient(to right, #bcc3f5, #040f69);
        -webkit-background-clip: text;
        color: transparent;
        text-transform: uppercase;
        font-size: 1rem;
    }

`