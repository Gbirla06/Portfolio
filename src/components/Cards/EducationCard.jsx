import styled from "styled-components";


// const Document = styled.img`
//     display: none;
//     height: 70px;
//     width: fit-content;
//     background-color: #000;
//     border-radius: 10px;

//     &:hover{
//         cursor: pointer;
//         opacity: 0.8;
//     }
// `;


const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: center;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }

    @media (max-width:768px) {
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    border: 1px solid ${({theme}) =>theme.border};
    box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
`;
const Top = styled.div`
    display: flex;
    gap: 12px;
    width: 100%;
`;
const Logo = styled.img`
    height: 50px;
    width: 50px;
    background-color: #788e97;
    border-radius: 10px;
    margin-top: 4px;

    @media (max-width: 768px) {
        height: 40px;
    }
`;

const Body = styled.div`
    display :flex;
    flex-direction: column;
    width: 100%;
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary+99};

    @media (max-width: 768px) {
        font-size: 12px; 
    }
`;

const School = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({theme}) => theme.text_primary+99};

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;


const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary+99};

    @media (max-width: 768px) {
        font-size: 12px; 
    }
`;



const Duration = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.text_secondary+99};

    @media (max-width: 768px) {
        font-size: 10px; 
    }
`;

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.text_secondary+99};

    @media (max-width: 768px) {
        font-size: 12px; 
    }
`;
const Desc = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({theme}) => theme.text_primary+99};

    @media (max-width: 768px) {
        font-size: 12px; 
    }
`;


const EducationCard = ({education}) =>{
    console.log(education);
    return (
        <Card>
            <Top>
                <Logo src={education.img}/>
                <Body>
                    <School>{education.school}</School>
                    <Degree>{education.degree}</Degree>
                    <Duration>{education.date}</Duration>
                </Body>
            </Top>
            <Description>
                <Grade>Grade : {education.grade}</Grade>
                <Desc>{education.desc}</Desc>
            </Description>
        </Card>
    )
};

export default EducationCard;