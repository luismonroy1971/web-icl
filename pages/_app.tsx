import { Provider } from 'react-redux';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="My Modal Title"
      >
        This is the content of the modal.
      </Modal>
    </Provider>
  );
}
