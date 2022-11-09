import React, { useState, useRef} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import SectionForm from "../../Components/ContainerItens";
import {
  Container,
  Image,
  Label,
  Input,
  Image2,
} from "./styles";
import Button from "../../Components/Button"
import H1 from "../../Components/Title"
import Img1 from "../../assets/img1.svg";
import Arrow from "../../assets/arrowIcon.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  const inputName = useRef();
  const inputAge = useRef();

  async function CreateNewUser() {
    const { data: newUser} = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    
    setUsers([
      ...users,
      newUser
    ]);
    
    history.push("/users")
  }

  return (
    <Container>
      <Image src={Img1} />
      <SectionForm>
        <H1>Olá!</H1>
        <form>
          <Label>Nome</Label>
          <Input placeholder="Peter" ref={inputName}></Input>

          <Label>Idade</Label>
          <Input placeholder="20" ref={inputAge}></Input>

          <Button onClick={CreateNewUser} type="button">
            
            Cadastrar
            <Image2 src={Arrow} />
          </Button>
        </form>
      </SectionForm>
    </Container>
  );
};

export default App;
