import styled from "styled-components";
import { BsFacebook,BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import {Bio} from "../data/Constants"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    /* clip-path: polygon(0 0,100% 20%, 100% 100%, 100% 100%, 0 100%); */
`;
const Wrapper = styled.div`
    max-width: 1100px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
`;

const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.primary};

    @media screen and (max-width: 768px) {
        margin-top: 12px;
        font-size: 25px;
    }
`;
const Desc = styled.div`
    font-size: 18px;
    max-width: 600px;
    text-align: center;
    color: ${({theme}) => theme.text_secondary};

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;
const NavItems = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    list-style: none;
    padding: 5px;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        gap: 10px;
    }
`;

const NavLink = styled.a`
    color: ${({theme}) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    padding: 0 10px;
    transition: all 0.2s ease-in-out;
    &:hover{
        color: ${({theme}) => theme.primary}
    }
`;
const Social = styled.a`
    padding: 20px 5px;
    display: flex;
`;
const Copyright = styled.div`
    font-weight: 500;
`;



const Footer = () =>{
    return (
        <Container id="Contact">
            <Wrapper>
                <Title>Ganesh</Title>
                <Desc>
                    <NavItems>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#educations">Education</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </NavItems>

                    <NavItems>
                        <Social><a href="#About" target="display" className="sc-TRNrF ALeaV"><BsFacebook size="1.5rem" color="white"/></a></Social>
                        <Social><a href={Bio.linkedin} target="display" className="sc-TRNrF ALeaV"><BsLinkedin size="1.5rem" color="white"/></a></Social>
                        <Social><a href="#About" target="display" className="sc-TRNrF ALeaV"><BsTwitter size="1.5rem" color="white"/></a></Social>
                        <Social><a href={Bio.insta} target="display" className="sc-TRNrF ALeaV"><BsInstagram size="1.5rem" color="white"/></a></Social>
                    </NavItems>
                    <Copyright>© 2023 Ganesh Birla. All rights reserved.</Copyright>
                </Desc>
            </Wrapper>
        </Container>
    )
}

export default Footer;