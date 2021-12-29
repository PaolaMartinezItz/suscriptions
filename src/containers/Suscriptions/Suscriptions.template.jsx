import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import PropTypes from 'prop-types';
import { heads } from './Suscriptions.list';
import {
  TableHeader,
  TablePagination,
  TableBodySkeleton,
  TableBodyEmpty,
  TableBodyFill,
} from '../../components/Table';

const SuscriptionsTemplate = (props) => {
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    tableData,
  } = props;
  const { loaded, empty, rows } = tableData;

  return (
    <Paper sx={{ mt: { md: 3, xl: 6 }, width: 1 }}>
      <TableContainer sx={{ maxHeight: { lg: 440, xl: 700 } }}>
        <Table stickyHeader>
          <TableHeader heads={heads} />
          {!loaded && <TableBodySkeleton />}
          {loaded && empty && <TableBodyEmpty />}
          {loaded && !empty && <TableBodyFill page={page} rowsPerPage={rowsPerPage} rows={rows} />}
        </Table>
      </TableContainer>
      {loaded && !empty && (
        <TablePagination
          rowsLength={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </Paper>
  );
};

SuscriptionsTemplate.propTypes = {
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  tableData: PropTypes.shape({
    loaded: PropTypes.bool.isRequired,
    empty: PropTypes.bool.isRequired,
    rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  }).isRequired,
  handleChangePage: PropTypes.func.isRequired,
  handleChangeRowsPerPage: PropTypes.func.isRequired,
};

export default SuscriptionsTemplate;
