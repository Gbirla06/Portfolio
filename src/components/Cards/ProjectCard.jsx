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

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.primary};
    background-color: ${({theme}) => theme.primary+15};
    padding: 2px 8px;
    border-radius: 10px;
`;
const Title = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme}) => theme.text_secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Date = styled.div`
    width: 100%;
    font-size: 10px;
    font-weight: 500;
    padding-left: 5px;
    color: ${({theme}) => theme.text_secondary+80};
    `;

const Description = styled.div`
    color: ${({theme}) => theme.text_secondary+80};
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    width: 100%;
`;

const ProjectCard = ({project}) =>{
    
    return (<Card> 
            <Image src={project.image} alt="Project"/>
            <Tags>
                {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
                        
    </Card>
    );
};

export default ProjectCard;