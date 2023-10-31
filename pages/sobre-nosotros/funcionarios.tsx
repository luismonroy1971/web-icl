import React from 'react';
import CardFuncionario from '../../components/CardFuncionario';
import { SectionBanner } from '../../components/SectionBanner';
import { Layout } from '../../components/Layout';
import { useGetFuncionariosQuery } from '../../redux/reduxQuery/funcionarios';

export interface Funcionario {
  image: string;
  name: string;
  position: string;
  link: string;
}

export default function Funcionarios() {
  const { data: funcionarios } = useGetFuncionariosQuery('');
  if (!funcionarios) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <div>
        <SectionBanner
          title="Funcionarios"
          caption="Sobre nosotros"
          description="Presentamos a nuestros funcionarios comprometidos con la excelencia y el servicio público en el Instituto Catastral de Lima."
        />
        <div className="flex flex-col mx-8 sm:mx-20 py-12">
          {funcionarios?.map((funcionario: any, index: any) => (
            <CardFuncionario key={index} index={index} {...funcionario} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
