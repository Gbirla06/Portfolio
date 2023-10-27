import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 50px 0px;
    
`;
const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
    padding-bottom: 10px;
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
    padding-bottom: 30px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;

const Form = styled.form`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,1);
    padding: 12px 16px;
    justify-content: center;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
`;
const Input = styled.input`
    padding: 10px;
    margin: 10px;
` ;
const Textarea = styled.textarea`
    padding: 10px;
    margin: 10px;
    resize: vertical;
` ;

const Button = styled.button`
    padding: 10px;
    margin: 10px;
    width: 100px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #0d0d0e;
`;


const Contact = () => {
    return (
        <Container id="contact">
            <Title>Contact Me</Title>
            <Desc>Here is a Option to connect and resolve your query😎</Desc>
            <Form action="https://formsubmit.co/gbirla09@gmail.com" method="POST">
                <Input name="name" type="text" placeholder="Your Name" required/>
                <Input name="email" type="email" placeholder="Email Address" required/>
                <Input name="subject" type="subject" placeholder="Subject"/>
                <Textarea name="textarea" placeholder="Your Query..." required/>
                <Input type="hidden" name="_captcha" value="false"></Input>
                {/* <Input type="hidden" name="_next" value="/"></Input> */}
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default Contact;
