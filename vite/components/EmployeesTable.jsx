import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TableSortLabel,
  Box,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Stack,
} from '@mui/material';
import { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { useSelector } from 'react-redux';
import { TableFilter } from './TableFilter';
import { mockTableData } from '../utils/populateWithMock';
import COLUMNS from '../data/employeesColumns';
import { USE_MOCK } from '../config/settings';

export const EmployeesTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const formdata = useSelector((state) => state.employees.data);
  const mockedEmployees = useMemo(() => mockTableData(), []);
  const employees = USE_MOCK ? mockedEmployees : formdata;
  const data = useMemo(() => employees, [employees]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    rows,
    gotoPage,
    prepareRow,
    setPageSize,
    pageCount,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const handleChange = (event, value) => {
    gotoPage(value - 1);
  };

  const firstRowNumber = () => {
    return rows.length ? pageSize * (pageIndex + 1) + 1 - pageSize : 0;
  };

  const lastRowNumber = () => {
    if (pageSize > rows.length) {
      return rows.length;
    }
    return pageIndex + 1 === pageCount && pageIndex
      ? pageSize * (pageIndex + 1) - pageSize + (rows.length % pageSize)
      : pageSize * (pageIndex + 1);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" sx={{ mb: 10 }}>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <FormControl size="small">
              <InputLabel id="rows_ppage_label">Rows</InputLabel>
              <Select
                labelId="rows_ppage_label"
                id="rows_ppage_select"
                value={pageSize}
                label="Rows"
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[5, 10, 20].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <TableFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </Box>
        <Box sx={{ width: '100%', display: 'table', tableLayout: 'fixed' }}>
          <TableContainer component={Paper}>
            <Table {...getTableProps()} sx={{ border: 0 }}>
              <TableHead>
                {headerGroups.map((headerGroup, hIndex) => (
                  <TableRow key={hIndex} {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column, cIndex) => (
                      <TableCell
                        key={cIndex}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps(),
                        )}
                        sx={{ border: 0 }}
                      >
                        {column.render('Header')}
                        <TableSortLabel
                          active={column.isSorted}
                          direction={column.isSortedDesc ? 'desc' : 'asc'}
                        />
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableHead>
              <TableBody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <TableRow
                      key={row.id}
                      {...row.getRowProps()}
                      sx={{ '& td': { borderRight: 0, borderLeft: 0 } }}
                    >
                      {row.cells.map((cell, index) => {
                        return (
                          <TableCell key={index} {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 2 }}
            direction={{ xs: 'column', sm: 'row' }}
          >
            <Typography variant="overline">
              {firstRowNumber()} - {lastRowNumber()} of {rows.length} entries
            </Typography>
            <Pagination
              count={
                rows.length / pageSize > 1
                  ? Math.ceil(rows.length / pageSize)
                  : 1
              }
              page={pageIndex + 1}
              onChange={handleChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Box>
      </Box>
    </>
  );
};
