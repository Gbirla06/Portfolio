import styled from "styled-components";
import { Bio } from "../data/Constants";
import TypewriterComponent from "typewriter-effect";
import HeroImg from "../images/Hero.jpg"

const HeroContainer = styled.div`
    background-color: ${({theme}) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;

    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    }
    @media screen and (max-width: 640px) {
        padding: 32px 16px;
    }

    z-index: 1;
    clip-path: polygon(0 0,100% 0,100% 100%,70% 95%,0 100%);
`;

export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    overflow: hidden;
    width: 100%;
    height: 100%;
    padding: 0 30px;
    /* -webkit-transform: translateX(-50%) translateY(-50%); */
    /* transform: translateX(-50%) translateY(-50%); */

    @media screen and (max-width: 960px) {
        padding: 0 0;
        justify-content: center;        
    }
`;

const HeroInnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;
const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px) {
        order: 2;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        flex-direction: column;
    }    
`;
const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    justify-content: end;
    display: flex;
    gap: 12px;
    @media screen and (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 80px;
    }
    @media screen and (max-width: 640px) {
        order: 1;
        margin-bottom: 30px;
        padding: 0 30px;
    }
`;
const Titles = styled.div`
    font-size: 40px;
    font-weight: 700;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }
    @media screen and (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;
const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary};
    line-height: 68px;
    gap: 12px;
    display: flex;

    @media screen and (max-width: 960px) {
        text-align: center;
    }
    @media screen and (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;
const Span = styled.span`
    color: ${({theme}) => theme.primary};
    cursor: pointer;
`;
const SubTitle = styled.div`
    font-size  : 20px;
    color: ${({theme}) => theme.text_primary+95};
    line-height: 32px;
    margin-bottom: 42px;

    @media screen and (max-width: 960px) {
        text-align: center;
    }
    @media screen and (max-width: 640px) {
        font-size: 16px;
    }
`;
const ResumeButton = styled.a`
    cursor: pointer;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color: ${({theme}) => theme.white};
    border-radius: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634; 
    :hover{
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        /* filter: brightness(1); */
    }
`;
const Image = styled.img`
    width: 100%;
    position: relative;
    border-radius: 50%;
    max-height: 400px;
    max-width: 400px;
    object-fit: cover;
    object-position: center;

    /* @media screen and (max-width: 960px) {
        width: 50%;
    } */
`;


const HeroSection = () =>{
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>

                </HeroBg>
                <HeroInnerContainer>
                    <HeroLeftContainer>
                        <Titles>Hi, I am<br/>{Bio.name}</Titles>
                        <TextLoop>
                            I am a
                            <Span>
                                <TypewriterComponent
                                    options={{
                                        strings:Bio.roles,
                                        autoStart: true,
                                        loop:true
                                    }}    
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target="_blank">
                            Check Resume
                        </ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>
                        <Image src={HeroImg} alt="Hero"/>
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;