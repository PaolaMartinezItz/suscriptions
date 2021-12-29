import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';

const Header = ({ heads }) => (
  <TableHead>
    <TableRow>
      {heads.map((column) => (
        <TableCell
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);

Header.propTypes = {
  heads: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
