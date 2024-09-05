import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContextProvider";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  const handleLogin = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = {
      id: 1,
      email: email,
      nom: "toto",
    };
    console.log(response);
    updateUser(response);
    navigate("/");
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
