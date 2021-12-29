import * as React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

const TableBodySkeleton = () => (
  <TableBody>
    <TableRow sx={{ height: '100px' }}>
      <TableCell colSpan="100%">
        <Skeleton sx={{ width: 1, height: 50 }} />
      </TableCell>
    </TableRow>
    <TableRow sx={{ height: '100px' }}>
      <TableCell colSpan="100%">
        <Skeleton sx={{ width: 1, height: 50 }} />
      </TableCell>
    </TableRow>
    <TableRow sx={{ height: '100px' }}>
      <TableCell colSpan="100%">
        <Skeleton sx={{ width: 1, height: 50 }} />
      </TableCell>
    </TableRow>
  </TableBody>
);

const TableBodyEmpty = () => (
  <TableBody>
    <TableRow sx={{ height: '100px' }}>
      <TableCell colSpan="100%" sx={{ textAlign: 'center' }}>
        No Data
      </TableCell>
    </TableRow>
  </TableBody>
);

const TableBodyFill = ({ page, rowsPerPage, rows }) => {
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const rowKey = `row-${page}-${index}`;
          return (
            <TableRow key={rowKey} tabIndex={-1} hover>
              {row.map((cell) => (
                <TableCell key={cell.id} align={cell.align}>
                  {cell.type === 'services' && (
                    <Stack direction="row" spacing={1}>
                      {cell.value.map((service) => (
                        <Chip
                          key={`${row.id}-${service.label}`}
                          label={service.label}
                          sx={{
                            color: 'white',
                            bgcolor: service.bgcolor,
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                  {cell.type === 'pay' && (
                    <Stack direction="column">
                      <Typography variant="body2" gutterBottom>
                        {cell.value.date}
                      </Typography>
                      <Typography variant="caption">
                        {`$${cell.value.amount} MXN`}
                      </Typography>
                    </Stack>
                  )}
                  {cell.type === 'normal' && cell.value}
                </TableCell>
              ))}
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow
          style={{
            height: 62 * emptyRows,
          }}
        >
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

TableBodyFill.propTypes = {
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export { TableBodySkeleton, TableBodyEmpty, TableBodyFill };
