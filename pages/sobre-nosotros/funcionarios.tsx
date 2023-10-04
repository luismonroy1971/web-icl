import React, { FC } from 'react';
import CardFuncionario from '../../components/CardFuncionario';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import { funcionariosList } from '../../utils/data';

export interface Funcionario {
  image: string;
  name: string;
  position: string;
  link: string;
}

const funcionarios = () => {
  return (
    <Layout>
      <div>
        <SectionBanner
          title="Funcionarios"
          caption="Sobre nosotros"
          description="Presentamos a nuestros funcionarios comprometidos con la excelencia y el servicio público en el Instituto Catastral de Lima."
        />
        <div className="flex flex-col mx-8 py-12">
          {funcionariosList?.map((funcionario, index) => (
            <CardFuncionario key={index} index={index} {...funcionario} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default funcionarios;
