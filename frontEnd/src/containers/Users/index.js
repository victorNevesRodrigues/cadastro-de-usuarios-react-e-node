import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import {
  Container,
  Image,
  Image2,
  User,
} from "./styles";
import Button from "../../Components/Button"
import SectionForm from "../../Components/ContainerItens";
import H1 from "../../Components/Title";
import Avatar from "../../assets/img2.svg";
import Arrow from "../../assets/arrowIcon.svg";
import TrashIcon from "../../assets/trashIcon.svg";

const Users = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    async function showUsers(){
      const {data} = await axios.get("http://localhost:3001/users")
      setUsers([...data]);
    }
    showUsers()
  }, [])



  async function excludeItem(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
    
  }


  return (
    <Container>
      <Image src={Avatar} />
      <SectionForm secondPage={true}>
        <H1>Usuários</H1>
        
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => excludeItem(user.id)}>
                <img src={TrashIcon} alt="imagem qualquer" />
              </button>
            </User>
          ))}
        </ul>

        <form>

          <Button comeBack={true} type="button" onClick={() => {
            history.push('/')
          }}>
            <Image2 src={Arrow} />
            Voltar
          </Button>
        </form>
        
      </SectionForm>
    </Container>
  );
};

export default Users;
