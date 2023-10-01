import React, { Fragment, useEffect, useState } from 'react';
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
  useFilters,
} from 'react-table';
import styled from 'styled-components';
import get from 'lodash/get';
import { Pagination } from './Pagination';
import {
  TableWrapper,
  TableStyle,
  TableH,
  TableData,
  HeaderWrapper,
  PaginationWrapper,
  DownArrow,
  UpArrow,
} from './SharedTableStyles';
import { useForm } from 'react-hook-form';

const FilterButtonContainer = styled.div`
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  opacity: 0.5;
  z-index: 998;
`;

const FilterSideBar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  right: 0px;
  width: 21.25rem;
  background-color: #ffffff;
  opacity: 1;
  height: 100vh;
  z-index: 999;
  overflow: scroll;
`;

const FilterTitleContainer = styled.div`
  display: flex;
  margin-left: 2rem;
  margin-top: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const CUSTOM_RENDER_COLUMNS = ['Status', 'Actions', 'Requests', 'FV Status'];

interface ITable {
  columns: any;
  data: any;
  rowClick?: any;
  showFilter?: any;
  onClick?: any;
  showAddNewConnection?: any;
  openModal?: any;
  tableType?: string;
}

export const Table = ({
  columns,
  data,
  rowClick,
  showFilter,
  onClick,
  showAddNewConnection,
  openModal,
  tableType,
}: ITable) => {
  const tableInstance = useTable(
    {
      columns,
      data,
      rowClick,
      initialState: { pageSize: 5 },
    } as any,
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    pageCount,
    pageSize,
    gotoPage,
    nextPage,
    previousPage,
    allColumns,
    setFilter,
  }: any = tableInstance;
  const { globalFilter, pageIndex } = state as any;
  const pages = Array.from(Array(pageCount).keys());
  const [openFilters, setOpenFilters] = useState(false);
  const [filterInputs, setFilterInputs] = useState<any>([]);
  const form = useForm();
  const filtersLength = Object.values(form.watch()).reduce((acc, curr) => {
    if ((typeof curr === 'string' && curr === '') || curr === undefined) {
      return acc;
    } else if (curr === null) {
      return acc;
    } else if (
      typeof curr === 'object' &&
      (Object.values(curr)[0] === undefined ||
        Object.values(curr)[0] === '' ||
        Object.values(curr)[0] === null)
    ) {
      return acc;
    } else return acc + 1;
  }, 0);

  const cancelFilters = () => {
    form.reset();
    filter();
    setOpenFilters(false);
  };

  useEffect(() => {
    let newData: any[] = [];
    allColumns.map((column: any) => {
      newData.push({
        id: column.id,
        label: column.Header,
        type: 'text',
        required: false,
        clearButton: true,
        select: !!column.options,
        options: column.options,
        canFilter: column.canFilter,
      });
      return column;
    });

    setFilterInputs(newData);
  }, [allColumns]);

  const filter = form.handleSubmit(() => {
    const newFilterInputValues = form.getValues();
    const getValue = (obj: any, key: string) => {
      const keys = key.split('.');
      return get(obj, keys);
    };
    allColumns.map((column: any) => {
      if (getValue(newFilterInputValues, column.id) !== null) {
        if (
          typeof getValue(newFilterInputValues, column.id) === 'string' &&
          getValue(newFilterInputValues, column.id) !== ''
        ) {
          setFilter(column.id, getValue(newFilterInputValues, column.id));
        } else if (
          typeof getValue(newFilterInputValues, column.id) === 'object' &&
          column.id !== 'state'
        ) {
          const { label } = getValue(newFilterInputValues, column.id);
          setFilter(column.id, label);
        } else if (column.id === 'state') {
          const { value } = getValue(newFilterInputValues, column.id);
          setFilter(column.id, value);
        } else {
          setFilter(column.id, undefined);
        }
      } else {
        setFilter(column.id, undefined);
      }
      return column;
    });
    setOpenFilters(false);
  });

  const resetFilters = () => {
    form.reset();
    filter();
  };

  return (
    <>
      <TableWrapper>
        <div className="m-4">
          <input
            type="text"
            placeholder="Buscar"
            className="border border-gray-300 rounded-md px-2 py-2 w-full"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </div>
        <table className='w-full table-fixed border-collapse h-full overflow-hidden'>
          <thead style={{ borderBottom: `2px solid #F0F0F0` }}>
            {headerGroups.map((headerGroup: any) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                {headerGroup.headers.map((column: any, index: any) => {
                  return (
                    <TableH
                      style={{
                        width: column.width,
                        cursor: column.canFilter ? 'pointer' : 'default',
                      }}
                      className='text-left pb-1'
                    >
                      <HeaderWrapper>
                        <p className="text-lg text-primary font-acto">{column.render('Header')}</p>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <DownArrow className={'ml-2'} />
                          ) : (
                            <UpArrow className={'ml-2'} />
                          )
                        ) : (
                          ''
                        )}
                      </HeaderWrapper>
                    </TableH>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            style={{
              maxHeight: '60vh',
              overflow: 'auto',
              display: 'block',
              // transform: "translate(0,0)",
            }}
          >
            {page.map((row: any) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: `2px solid #F0F0F0`,
                    paddingLeft: '1rem',
                    paddingRight: '1rem',
                  }}
                >
                  {row.cells.map((cell: any, index: any) => {
                    const RenderedCell = cell.render('Cell');
                    return CUSTOM_RENDER_COLUMNS.includes(
                      cell.column.Header
                    ) ? (
                      <TableData
                        key={index}
                        style={{
                          width: cell.column.width,
                        }}
                        className='h-20 flex items-center justify-center'
                      >
                        {RenderedCell}
                      </TableData>
                    ) : (
                      <TableData
                        key={index}
                        style={{
                          width: cell.column.width,
                        }}
                      >
                        {RenderedCell}
                      </TableData>
                    );
                  })}
                </tr>
              );
            })}
            {data.length === 0 && (
              <tr
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: `2px solid #F0F0F0`,
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                }}
              >
                <td
                  colSpan={columns.length}
                  style={{
                    textAlign: 'center',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                  }}
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </TableWrapper>
      {pages.length > 1 ? (
        <PaginationWrapper>
          <Pagination
            pages={pages}
            pageCount={pageCount}
            pageSize={pageSize}
            nextPage={nextPage}
            prevPage={previousPage}
            index={pageIndex}
            gotoPage={gotoPage}
          />
        </PaginationWrapper>
      ) : null}
    </>
  );
};
