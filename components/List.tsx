import React, { FC, useEffect } from 'react';
import { ItemList } from './ItemList';
import { Button } from './Button';

interface Item {
  id: string;
  denominacion_servicio: string;
  monto_uit: string;
  monto_soles: string;
  numero_servicio: string;
  sub_nivel_servicio: string;
}

interface ListProps {
  items: Item[];
  total?: number;
  selectedItems: any;
  setSelectedItems: any;
}

export const List: FC<ListProps> = ({ items, total, selectedItems, setSelectedItems }) => {
  return (
    <div className="py-4">
      <div className="flex flex-col gap-2 max-h-[62vh] overflow-scroll">
        {items?.map((item) => (
          <ItemList
            key={item.id}
            {...item}
            selected={selectedItems}
            setSelected={setSelectedItems}
            info={item}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-end items-center py-4 bg-blue rounded-md shadow-sm text-white px-6">
        <div className="flex flex-col">
          <span className="text-xl font-lato">TOTAL</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl rounded-md px-4 w-56 items-center text-center font-medium bg-white text-black">
            {total
              ? total.toLocaleString('es-PE', {
                  style: 'currency',
                  currency: 'PEN',
                })
              : 'Por calcular'}
          </span>
        </div>
        {/* <div className="flex flex-col">
          <Button>Solicitar servicio</Button>
        </div> */}
      </div>
    </div>
  );
};
