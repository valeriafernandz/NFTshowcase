import styled from "styled-components";


export const StyledHeader = styled.header`
    height: 100vh;
    background-image: linear-gradient(
        to right, 
        #658adb,
        #dce5fa);
    background-size: cover;
    background-position: top;
    position: relative;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

`

export const Logo = styled.img`
    position: absolute;
    top: 4rem;
    left:4rem;
    width: 14rem;
`

export const HeaderTitleBox = styled.div`
    position: absolute;
    top: 40vh;
    transform: translateY(-50%);
    text-align: center;

    @media (min-width: 800px) {
        left: 10vw;
      }

      @media (min-width: 1200px) {
        top: 45vh;
        left: 10vw;
      }

      @media (min-width: 1500px) {
        left: 20vw;
      }
    
`

export const HeaderTitle = styled.span`
    display: block;
    font-size: 4rem;
    font-weight: 400;
    line-height: 1.7;
    text-transform: uppercase;
    letter-spacing: 3.5rem;
    color: #f4f4f4;
    
`

export const HeaderSubtitle = styled.span`
    display: block;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1rem;
    text-transform: uppercase;
    background-image: linear-gradient(to right, #4564ad, #000);
    -webkit-background-clip: text;
    color: transparent;
    
`