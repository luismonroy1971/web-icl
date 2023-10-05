import React, { FC } from 'react';

interface ItemListProps {
  id: string;
  selected: any; //[1, 2, 3]
  setSelected: any;
  denominacion_servicio: string;
  monto_uit: string;
  monto_soles: string;
  incrementCount?: any;
}

export const ItemList: FC<ItemListProps> = ({
  id,
  selected,
  setSelected,
  denominacion_servicio,
  monto_uit,
  monto_soles,
  incrementCount,
}) => {
  return (
    <div
      className={`flex justify-between items-center p-6 cursor-pointer w-full border border-blue px-6 h-16 font-lato text-base  
        ${selected.includes(parseInt(id)) ? 'bg-lightBlue' : 'bg-white '}
        `}
      onClick={() => {
        incrementCount(id);
      }}
    >
      <div className="flex flex-col w-7/12">
        <span className="text-md font-lato">{denominacion_servicio}</span>
      </div>
      {/* <div className="flex justify-center gap-2 items-center w-2/12">
        <span className="text-sm font-medium">{monto_uit}</span>
        <span className="text-xs font-normal">UIT</span>
      </div> */}
      <div className="flex justify-end w-3/12">
        {parseInt(monto_soles) > 0 && (
          <span className="text-md font-medium font-lato-bold">S/ {monto_soles}</span>
        )}
      </div>
    </div>
  );
};
