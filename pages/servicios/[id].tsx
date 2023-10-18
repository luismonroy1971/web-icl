import Head from 'next/head';
import { Layout } from '../../components/Layout';
import React from 'react';
import { useGetServicioQuery } from '../../redux/reduxQuery/servicios';
import { List } from '../../components/List';
import { SectionBanner } from '../../components/SectionBanner';
import FAQComponent from '../../components/Faq';
import { useRouter } from 'next/router';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useForm } from 'react-hook-form';
import RadioButton from '../../components/Radio';
import axios from 'axios';

export default function Servicios() {
  const router = useRouter();
  const { id } = router.query;
  const form = useForm();
  const idUpperCased = (id as string)?.toUpperCase();
  const [loaded, setLoaded] = React.useState(false);
  const [selectedItems, setSelectedItems] = React.useState<any>([]);
  const [error, setError] = React.useState('');
  const [total, setTotal] = React.useState(0);
  const data = idUpperCased === 'TUPA' ? firstObj : secondObj;
  const {
    data: dataServicio,
    error: errorServicio,
    refetch: refetchServicio,
  } = useGetServicioQuery(idUpperCased);
  const dataServicioFiltered = dataServicio?.filter(
    (item: any) => item.flag_seleccion === '1' && item.autorizado === '1'
  );
  const faqs = [
    {
      question: '¿Cómo puedo solicitar un procedimiento administrativo?',
      answer:
        'Puedes solicitar un procedimiento administrativo a través de nuestra plataforma web.',
    },
    {
      question: '¿Dónde puedo encontrar más información sobre las tasas?',
      answer: 'Puedes encontrar más información sobre las tasas en el TUPA.',
    },
  ];

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  const handleCalculate = form.handleSubmit((data) => {
    if (data.metraje === '' || data.construido === '') {
      setError('Por favor, complete todos los campos');
      return;
    } else if (selectedItems.length === 0) {
      setError('Por favor, seleccione al menos un servicio');
      return;
    }
    try {
      Promise.all(
        selectedItems.map((item: any) => {
          axios
            .get(process.env.NEXT_PUBLIC_API_URL + '/calculoservicios', {
              params: {
                metraje: data.metraje,
                flag_construccion: data.construido.toUpperCase(),
                tipo_servicio: idUpperCased,
                numero_servicio: item.numero_servicio,
                sub_nivel_servicio: item.sub_nivel_servicio,
              },
            })
            .then((res) => {
              console.log(res.data);
              const total = res.data.valor_servicio;
              setTotal((prev) => prev + parseFloat(total));
            })
            .catch((err) => console.log(err));
        })
      );
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <>
      <Head>
        <title>Servicios</title>
      </Head>
      <Layout>
        <SectionBanner
          caption="Servicios"
          {...data}
          image={`/images/servicios/${data.id}.svg`}
        />
        <div className="mx-20 py-12">
          <h3 className="font-acto text-4xl text-primary">
            Calculadora del servicio {data.id.toUpperCase()}
          </h3>
          <div className="flex mt-8 gap-8">
            <Input
              labelText="¿Cuál es el metraje?"
              placeholderText="Ej: 100"
              type="text"
              {...form.register('metraje')}
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[0-9\b]+$/;
                if (value === '' || regex.test(value)) {
                  form.setValue('metraje', value);
                }
              }}
            />
            <div>
              <p className="font-lato-bold text-md text-primary">
                ¿Está construído?
              </p>
              <div className="flex gap-4 p-2">
                <RadioButton
                  id="si"
                  value="si"
                  label="Sí"
                  name="construido"
                  onChange={(e) => form.setValue('construido', e.target.value)}
                />
                <RadioButton
                  id="no"
                  value="no"
                  label="No"
                  name="construido"
                  onChange={(e) => form.setValue('construido', e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center w-40 mt-4">
              <Button onClick={handleCalculate}>
                <p className="font-lato-bold text-md text-white">Calcular</p>
              </Button>
            </div>
            <div className="flex items-center w-40 mt-4">
              <p
                className="font-lato-bold text-md text-primary cursor-pointer"
                onClick={() => {
                  form.setValue('metraje', '');
                  setError('');
                  setSelectedItems([]);
                  setTotal(0);
                }}
              >
                Nueva búsqueda
              </p>
            </div>
          </div>
          <div className="flex items-center">
            {error && (
              <p className="font-lato-bold text-md text-red-500">{error}</p>
            )}
          </div>
          <div>
            <p className="font-lato-bold text-md text-primary mt-4">
              Selecciona los servicios que deseas solicitar
            </p>
            <List
              items={dataServicioFiltered}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
              total={total}
            />
          </div>
        </div>
        <div className="mx-8 py-12">
          <FAQComponent items={faqs} />
        </div>
      </Layout>
    </>
  );
}

const firstObj = {
  id: 'tupa',
  title: 'Resumen del Texto Único de Procedimiento Administrativo (TUPA)',
  description:
    'Descubre y calcula fácilmente los procedimientos administrativos del Instituto Catastral de Lima con nuestro servicio TUPA.',
  image: 'https://picsum.photos/200/300',
};

const secondObj = {
  id: 'tusne',
  title: 'Resumen del Texto Único de Servicios No Exclusivos – TUSNE',
  description:
    'Explora la variedad de servicios no exclusivos ofrecidos por el Instituto Catastral de Lima a través de nuestro portal TUSNE.',
  image: 'https://picsum.photos/200/300',
};
