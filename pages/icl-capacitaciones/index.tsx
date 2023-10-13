import Image from 'next/image';
import { Button } from '../../components/Button';
import { Layout } from '../../components/Layout';
import { SectionBanner } from '../../components/SectionBanner';
import { capacitacionesData } from '../../utils/data';

export default function ICLCapacitaciones() {
  return (
    <Layout>
      <SectionBanner
        title="Capacitaciones"
        description="Desde desarrollos recientes hasta seminarios y talleres, aquí encontrarás todo lo que necesitas saber para estar al tanto de nuestras actividades."
        caption="ICL Capacitaciones"
      />
      <div className="sm:px-20 px-8 py-12 flex flex-col gap-8">
        {capacitacionesData?.map((capacitacion) => (
          <div
            key={capacitacion.id}
            className="border border-primary rounded-md p-4 flex"
          >
            <Image
              src={capacitacion.image}
              alt={capacitacion.title}
              width={200}
              height={200}
            />
            <div className="flex flex-col justify-center gap-2">
              <h2 className="font-acto text-2xl text-primary">
                {capacitacion.title}
              </h2>
              <capacitacion.content />
              <div className="w-80">
                <Button
                  onClick={() => window.open(capacitacion.link, '_blank')}
                >
                  Inscribirme
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
