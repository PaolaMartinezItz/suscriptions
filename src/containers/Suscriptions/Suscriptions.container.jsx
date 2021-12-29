import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import SuscriptionsTemplate from './Suscriptions.template';
import { createRows } from './Suscriptions.list';
import dbApi from '../../constants';

const SuscriptionsContainer = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [tableData, setTableData] = useState({ loaded: false, empty: true, data: [] });

  const handleChangePage = (_, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    fetch(dbApi.suscriptions, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 200) {
          const empty = response.rows.length === 0;
          const rowsFiltered = [];

          response.rows.forEach((row) => {
            const userExist = rowsFiltered.find((value) => value.id === row.id);
            if (!userExist) {
              const allUserRows = response.rows.filter((value) => value.id === row.id);
              rowsFiltered.push({
                ...row,
                nextDate: allUserRows.sort((a, b) => a.nextDate - b.nextDate)[0].nextDate,
              });
            }
          });

          setTableData({
            loaded: true,
            empty,
            rows: createRows(rowsFiltered),
          });
        } else {
          enqueueSnackbar(response, { persist: true });
        }
      })
      .catch(() => enqueueSnackbar({ id: 3500 }), { persist: true });
  }, []);

  return (
    <SuscriptionsTemplate
      page={page}
      rowsPerPage={rowsPerPage}
      tableData={tableData}
      handleChangePage={handleChangePage}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default SuscriptionsContainer;
