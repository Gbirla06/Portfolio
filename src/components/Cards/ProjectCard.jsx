import styled from "styled-components";

const Card = styled.div`
    height: 490px;
    width: 330px;
    background-color: rgb(23,23,33);
    cursor: pointer;
    border-radius: 10px;
    box-shadow: rgba(0,0,0,0.4) 0px 0px 12px 4px;
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;

    &:hover{
        transform: translateY(-10px);
        box-shadow: rgba(0,0,0,0.6) 0px 0px 50px 4px;
    }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  background-color: rgb(255,255,255);
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0,0,0,0.3) 0px 0px 16px 2px;
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 2px;
`;


const ProjectCard = ({project}) =>{
    return <Card> 
            <Image src={project.image}/>
            <Tags></Tags>
            <Details></Details>
                        
    </Card>
};

export default ProjectCard;