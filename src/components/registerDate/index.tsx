import React from "react";
import Login from "../login";
import CustomSelect from "../../shared/form/select";

// import { Container } from './styles';

const RegisterDate: React.FC = () => {
  const [produto, setProduto] = React.useState("");

  return (
    <Login title="Criar conta">
      <div>
        <CustomSelect
          id="service"
          label="Selecione sua categoria"
          options={["Notebook", "Smartphone", "Tablet"]}
          value={produto}
          setValue={setProduto}
        />
      </div>
    </Login>
  );
};

export default RegisterDate;
