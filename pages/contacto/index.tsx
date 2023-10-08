import React from 'react';
import { Layout } from '../../components/Layout';
import Image from 'next/image';
import { SectionBanner } from '../../components/SectionBanner';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <Layout>
      <SectionBanner
        title="Contáctanos"
        description="Si tienes alguna pregunta, comentario o sugerencia, estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros. "
        caption="Contacto"
      />
      <section className="py-12 mx-20">
        <div className="font-acto text-4xl text-primary">
          Información de Contacto
        </div>
        <div className="font-lato">
          {/* Dirección */}
          <div className="my-4">
            <strong className="text-primary">Dirección:</strong> Jr. Conde de
            Superunda 303, Cercado de Lima, Lima, Perú
          </div>

          {/* Correo */}
          <div className="my-4">
            <strong className="text-primary">Correo Electrónico:</strong>{' '}
            consultas@icl.gob.pe
          </div>

          {/* Teléfonos */}
          <div className="my-4 flex">
            <strong className="text-primary">Teléfonos:</strong>
            <ul className="ml-2">
              <li>(01) 480 1582</li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div className="my-4 font-lato">
            <strong className="text-primary font-acto text-4xl">
              Redes Sociales:
            </strong>
            <ul className="mt-2">
              <li>
                <Link
                  href="https://www.facebook.com/instcatastraldelima"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Facebook :</span>{' '}
                  https://www.facebook.com/instcatastraldelima
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/instcatastraldelima/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Instagram:</span>{' '}
                  https://www.instagram.com/instcatastraldelima/
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@InstitutoCatastraldeLimaICL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Youtube:</span>{' '}
                  https://www.youtube.com/@InstitutoCatastraldeLimaICL
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=969670703"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-primary">Whatsapp:</span>{' '}
                  https://api.whatsapp.com/send?phone=969670703
                </Link>
              </li>
            </ul>
          </div>

          {/* Números de Contacto de los Gerentes */}
          <div className="my-4">
            <strong className="font-acto text-4xl text-primary">
              Contacto con Gerencias:
            </strong>
            <ul className="font-lato mt-4 flex flex-col gap-2">
              <div className="flex gap-20">
                <li>
                  <p className="text-primary text-2xl">Presidencia:</p>
                  <p className="text-lg">(255) 352-6258 </p>
                  <p className="text-lg">building@divicity.com</p>
                </li>
                <li>
                  <p className="text-primary text-2xl">Gerencia General:</p>
                  <p className="text-lg">(255) 352-6259 </p>
                  <p className="text-lg">cemetery@divicity.com </p>
                </li>
                <li>
                  <p className="text-primary text-2xl">
                    Control Institucional:
                  </p>
                  <p className="text-lg">(255) 352-6260 </p>
                  <p className="text-lg">attorney@divicity.com </p>
                </li>
                <li>
                  <p className="text-primary text-2xl">Secretaría General</p>
                  <p className="text-lg">(255) 352-6258 </p>
                  <p className="text-lg">building@divicity.com </p>
                </li>
              </div>
              <div className="flex gap-20">
                <li>
                  <p className="text-primary text-2xl">Gerencia de Catastro:</p>
                  <p className="text-lg">(255) 352-6259 </p>
                  <p className="text-lg">cemetery@divicity.com </p>
                </li>
                <li>
                  <p className="text-primary text-2xl">
                    Gerencia de Cartografía y TI:
                  </p>
                  <p className="text-lg">(255) 352-6260 </p>
                  <p className="text-lg">attorney@divicity.com</p>
                </li>
                <li>
                  <p className="text-primary text-2xl">
                    Gerencia de Asuntos Jurídicos:
                  </p>
                  <p className="text-lg">(255) 352-6261 </p>
                  <p className="text-lg">attorney@divicity.com</p>
                </li>
                <li>
                  <p className="text-primary text-2xl">
                    Gerencia de Administración:
                  </p>
                  <p className="text-lg">(255) 352-6262 </p>
                  <p className="text-lg">attorney@divicity.com</p>
                </li>
              </div>
              <li>Gerencia de Proyectos: (255) 352-6263 - fire@divicity.com</li>
            </ul>
          </div>
        </div>
        {/* Formulario de Contacto */}
        <div className="my-4">
          <strong>Formulario de Contacto:</strong>
          <form>
            <div className="mb-4">
              <label htmlFor="name">Nombres y apellidos completos:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Correo electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message">Mensaje:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded-sm font-acto py-2 px-4"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>

        {/* Mapa de Ubicación */}
        <div className="my-4">
          <strong>Mapa de Ubicación:</strong>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9930982704077!2d-77.03537898875422!3d-12.043995541801166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b584a80c45%3A0xaa40599a6e3dabbb!2sInstituto%20Catastral%20de%20Lima%20-ICL!5e0!3m2!1ses-419!2spe!4v1696559636626!5m2!1ses-419!2spe"
            width="1600"
            height="600"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </Layout>
  );
}
