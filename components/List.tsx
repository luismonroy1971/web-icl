import React, { FC } from 'react';
import { ItemList } from './ItemList';

interface Item {
  id: string;
  denominacion_servicio: string;
  monto_uit: string;
  monto_soles: string;
}

interface ListProps {
  items: Item[];
}

export const List: FC<ListProps> = ({ items }) => {
  const [selectedItems, setSelectedItems] = React.useState<any>([]);
  const [count, setCount] = React.useState(0);
  const incrementCount = (itemId: number) => {
    items.map((item) => {
      if (parseInt(item.id) === itemId) {
        setCount(count + parseFloat(item.monto_soles));
      }
    });
    setSelectedItems([...selectedItems, itemId]);
  };
  return (
    <div className="py-4">
      <div className="flex flex-col gap-2 max-h-[500px] overflow-scroll">
        {items?.map((item) => (
          <ItemList
            key={item.id}
            {...item}
            id={item.id}
            selected={selectedItems}
            setSelected={setSelectedItems}
            incrementCount={incrementCount}
          />
        ))}
      </div>
      <div className="flex flex-row gap-4 justify-end items-center py-6 bg-blue rounded-md shadow-sm text-white mt-4 px-6">
        <div className="flex flex-col">
          <span className="text-xl font-lato">Total</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl rounded-md px-4 w-56 items-center text-center font-medium bg-white text-black">
            {count.toLocaleString('en-ES', {
              style: 'currency',
              currency: 'PEN',
            })}
          </span>
        </div>
        <div className="flex flex-col">
          <button className="bg-primary text-white px-4 py-2 rounded-md">
            Solicitar servicio
          </button>
        </div>
      </div>
    </div>
  );
};
