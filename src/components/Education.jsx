import styled from "styled-components";
import {educations} from "../data/Constants"
import EducationCard from "./Cards/EducationCard"
import {Timeline, TimelineItem, TimelineSeparator,TimelineConnector,TimelineContent, TimelineDot} from "@mui/lab";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px;
    @media screen and (max-width: 768px) {
        width: 90%;
    }

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
const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Experience = () => {
    return (
        <Container id="educations">
            <Wrapper>
                <Titles>Education</Titles>
                <Desc>My education has been a journey of self-discovery and growth. My educational details are as follows.</Desc>
                <TimeLineSection>
                    <Timeline>
                        {educations.map((education,index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{py: "12px", px: 2}}>
                                    <EducationCard education={education}/>
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== educations.length-1 && <TimelineConnector/>}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    )
};

export default Experience;


