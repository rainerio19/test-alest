import React, { FormEvent, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import api from "../../service/api";

import { FormContent } from "./style";

interface IProductRegister {
  name: string;
  price: string;
  image: string;
}

const FormCadastro: React.FC = () => {
  const history = useHistory();

  const [formDataContent, setFormDataContent] = useState<IProductRegister>(
    {} as IProductRegister
  );
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoad(true);

      api
        .post("products", formDataContent)
        .then((response) => {
          toast.success(
            "Cadastro realizado com sucesso! Você está sendo redirecionado",
            {
              onClose: () => history.push("/"),
            }
          );
        })
        .catch((e) => toast.error("Algo deu errado"))
        .finally(() => setIsLoad(false));
    },
    [formDataContent, history]
  );
  return (
    <FormContent>
      <div>
        {isLoad ? (
          <p>Carregando</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Insira o nome do produto"
              onChange={(e) =>
                setFormDataContent({ ...formDataContent, name: e.target.value })
              }
            />
            <input
              type="text"
              name="price"
              placeholder="Informe o preço"
              onChange={(e) =>
                setFormDataContent({
                  ...formDataContent,
                  price: e.target.value,
                })
              }
            />
            <input
              type="text"
              name="image"
              placeholder="Anexa uma image"
              onChange={(e) =>
                setFormDataContent({
                  ...formDataContent,
                  image: e.target.value,
                })
              }
            />
            <input type="submit" value="Cadastrar" />
          </form>
        )}
      </div>
    </FormContent>
  );
};

export default FormCadastro;
