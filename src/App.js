import React, { useState, useRef } from "react";
import {
  Container,
  Image,
  SectionForm,
  H1,
  Label,
  Input,
  Button,
  Image2,
  User,
} from "./styles";
import Img1 from "./assets/img1.svg";
import Arrow from "./assets/arrowIcon.svg";
import TrashIcon from "./assets/trashIcon.svg";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function CreateNewUser() {
    setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);
  }

  function excludeItem (userId) {
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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
      <ul>
        {users.map((user) => (
          <User key={user.id}>
            <p>{user.name}</p> <p>{user.age}</p>
            <button  onClick={() => excludeItem(user.id)}>
              <img src={TrashIcon} alt="imagem qualquer" />
            </button>
          </User>
        ))}
      </ul>
      </SectionForm>
    </Container>
  );
};

export default App;
