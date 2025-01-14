import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from '../../services/api';

function Home() {
  const [users, setUsers] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false); // Novo estado para controlar a exibição da confirmação
  const [userToDelete, setUserToDelete] = useState(null); // ID do usuário a ser excluído

  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getUsers() {
    const usersFromApi = await api.get('/usuarios');
    setUsers(usersFromApi.data);
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    });

    // Limpar os campos de entrada
    inputName.current.value = '';
    inputAge.current.value = '';
    inputEmail.current.value = '';

    getUsers();
  }

  // Função para mostrar a confirmação
  function handleDeleteClick(id) {
    setUserToDelete(id); // Armazena o ID do usuário a ser excluído
    setConfirmDelete(true); // Exibe a confirmação
  }

  async function deleteUser() {
    await api.delete(`/usuarios/${userToDelete}`);
    setConfirmDelete(false); // Fecha a confirmação
    setUserToDelete(null); // Limpa o ID do usuário
    getUsers();
  }

  function cancelDelete() {
    setConfirmDelete(false); // Fecha a confirmação sem excluir
    setUserToDelete(null); // Limpa o ID do usuário
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="name" type="text" ref={inputName} />
        <input placeholder="Idade" name="age" type="number" ref={inputAge} />
        <input placeholder="Email" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>

          {/* Botão de exclusão */}
          <button onClick={() => handleDeleteClick(user.id)}>
            <img src={Trash} />
          </button>
        </div>
      ))}

      {/* Menu de confirmação com fundo escuro */}
      {confirmDelete && (
        <div className="overlay">
          <div className="confirmation-menu">
            <span>Tem certeza que deseja excluir este usuário?</span>
            <button onClick={deleteUser}>Sim</button>
            <button onClick={cancelDelete}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
