import styled from "styled-components";
import {projects} from "../data/Constants"
import ProjectCard from "../components/Cards/ProjectCard"


const Container = styled.div`
    background: linear-gradient(
        343.07deg,
        rgba(132,59,206,0.06) 5.71%,
        rgba(132,59,206,0) 64.83%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0,100% 0, 100% 100%, 100% 98%, 0 100%);
`;
const Wrapper = styled.div`
    max-width: 1200px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 12px;
    padding: 10px 0px 100px 0px;
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

const Preview = styled.div`
    display: flex;
    border: 1.5px solid ${({theme}) => theme.primary};
    color: ${({theme}) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const PreviewButton = styled.div`
    padding: 8px 18px;
    cursor: pointer;
    border-radius: 6px;
    background-color: ${({theme}) => theme.primary+8};

    &:hover{
        background-color: ${({theme}) => theme.primary+20};
    }

    @media screen and (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const CardContainer = styled.div`
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 28px;
`;



const Projects = () =>{

    return <Container id="projects">
            <Wrapper>
                <Titles>
                    Projects
                </Titles>
                <Desc>
                    Here are some of my projects
                </Desc>

                <Preview>
                    <PreviewButton>PROJECTS PREVIEW</PreviewButton>
                </Preview>
                <CardContainer>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </CardContainer>
            </Wrapper>
    </Container>
}
export default Projects;