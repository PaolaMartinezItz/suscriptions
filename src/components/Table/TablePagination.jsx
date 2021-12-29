import React from 'react';
import TablePagination from '@mui/material/TablePagination';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const {
    rowsLength,
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
  } = props;

  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component="div"
      count={rowsLength}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

Pagination.propTypes = {
  rowsLength: PropTypes.number,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  rowsLength: 0,
};

export default Pagination;
