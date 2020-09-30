import React, { useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import Footer from "../../shared/form/footer";
import CustomInput from "../../shared/form/Input";
import LoginContainer from "../loginContainer";

import "./style.scss";

interface IUser {
  email: string;
  password: string;
}
const Login: React.FC = () => {
  const [userFormData, setUserFormData] = useState<IUser>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  return (
    <LoginContainer title="Entrar">
      <div className="card-container">
        <div className="card">
          <form className="form-login--style">
            <CustomInput
              id="nome"
              label="Nome"
              setValue={handleInputChange}
              type="text"
              required
            />

            <CustomInput
              id="email"
              label="Password"
              setValue={handleInputChange}
              type="password"
              required
            />

            <div>
              <button className="buttom--internal space-buttom">Entrar</button>
              <div className="forgot-my-password">
                <Link to="/login">Esqueci minha senha</Link>
              </div>
            </div>
            <Footer
              titleOne="Não possui uma conta?"
              titleTwo="Criar conta"
              to="/register-form"
            />
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
