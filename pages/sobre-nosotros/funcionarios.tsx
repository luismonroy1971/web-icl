import React, { FC } from 'react';
import CardFuncionario from '../../components/CardFuncionario';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';

export interface Funcionario {
  image: string;
  name: string;
  position: string;
  link: string;
}

interface FuncionariosProps {
  funcionarios: Funcionario[];
}

const funcionarios = () => {
  const funcionariosList: Funcionario[] = [
    {
      name: 'Molina Arles, Luis Alfonso',
      position: 'PRESIDENTE EJECUTIVO',
      image: '/images/funcionarios/funcionario-1.jpg',
      link: 'https://www.gob.pe/institucion/icl/funcionarios/83447-luis-alfonso-molina-arles',
    },
    {
      name: 'Zegarra Buitron, Paola Giovanna',
      position: 'SECRETARÍA GENERAL',
      image: '/images/funcionarios/funcionario-2.jpg',
      link: 'https://www.gob.pe/institucion/icl/funcionarios/83448-paola-giovanna-zegarra-buitron',
    },
  ];
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
            <CardFuncionario index={index} {...funcionario} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default funcionarios;
