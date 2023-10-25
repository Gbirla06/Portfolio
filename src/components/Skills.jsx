import styled from "styled-components";
import {skills} from "../data/Constants"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
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

const Titles = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    color: ${({theme}) => theme.text_primary};

    @media screen and (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
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
const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    gap: 30px;
`;
const Skill = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: ${({theme}) => theme.card};
    border: 1px solid #854CE6;
    padding: 18px 36px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        box-shadow: 0 4px 8px 0 #854CE6, 0 4px 20px 0 #854CE6;
        transform: scaleX(1.05) scaleY(1.05);
    }
    transition: 0.4s ease-in-out;
    @media screen and (max-width: 768px) {
        max-width: 400px;
        padding: 10px 36px;
    }
    @media screen and (max-width: 500px) {
        font-size: 16px;
    }
`;
const SkillTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;
    color: ${({theme}) => theme.text_secondary};
    margin-bottom: 12px;
    text-align: center;
`;
const SkillList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 20px;
`;
const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    font-size: 16px;
    color: ${({theme}) => theme.text_primary+80};
    border: 1px solid ${({theme}) => theme.text_primary+80};
    border-radius: 10px;
    padding: 12px 16px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        padding: 8px 12px;
    }
    @media screen and (max-width: 500px) {
        padding: 6px 12px;
    }    
`;

const SkillImage = styled.img`
    width: 24px;
    height: 24px;
`;



const Skills = () =>{
    return (
        <Container>
            <Wrapper>
                <Titles>
                    Skills
                </Titles>
                <Desc>
                    Here are some of my skills on which I have been working on for the past 3 years.
                </Desc>
                <SkillsContainer>
                    {skills.map((item,index) =>(
                        <Skill key={item.name}>
                            <SkillTitle>{item.title}</SkillTitle>
                            <SkillList>
                                {
                                    item.skills.map((skill) =>(
                                        <SkillItem>
                                            <SkillImage src={skill.image}/>{skill.name}
                                        </SkillItem>
                                    ))
                                }
                            </SkillList>
                        </Skill>
                    ))}
                </SkillsContainer>
            </Wrapper>
        </Container>
    )
}

export default Skills;