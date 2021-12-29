const pool = require('../db');

const sendError5001 = (req, res, error) => {
  const errorResponse = { status: 500, id: 5001, message: error || 'Server error' };
  req.flash('error', { ...errorResponse });
  res.status(500).send({ ...errorResponse });
};

const getAllSuscriptions = (req, res) => {
  const query = `
    select
      user.id as 'id',
      user.first_name as 'firstName',
      user.last_name as 'lastName',
      user.email,
      gender.name as 'genderName',
      periodType.name as 'periodName',
      if(isnull(lastPayment.amount), '-', lastPayment.amount) as 'lastAmount',
      if(isnull(lastPayment.date_created), '-', lastPayment.date_created) as 'lastDate',
      userSuscriptions.nextAmount,
      userSuscriptions.services as 'services',
      periodTime.date as 'nextDate'
    from
      users user
        join
      c_gender gender ON user.gender_id = gender.id and gender.is_active = 1
        join
      c_period_type periodType ON user.period_type_id = periodType.id and periodType.is_active = 1
        join
      (
        select 
          suscriptions.user_id,
          round(sum(platform.monthly_price), 2) as 'nextAmount',
          group_concat(JSON_OBJECT('label', platform.slug, 'bgcolor', platform.bgcolor)) as services
        from
          t_suscriptions suscriptions
            join 
          c_platform platform ON suscriptions.platform_id = platform.id and platform.is_active = 1
        group by user_id
      ) as userSuscriptions ON user.id = userSuscriptions.user_id
        left join
      (
        select
          allPayments.user_id,
          allPayments.amount,
          allPayments.date_created
        from 
          t_lasts_payments allPayments
            join
          (
            select
              user_id,
              max(date_created) as maxDate
            from
              t_lasts_payments
            group by user_id desc
          ) as maxLastPayment on maxLastPayment.maxDate = allPayments.date_created and allPayments.user_id = maxLastPayment.user_id
      ) as lastPayment on lastPayment.user_id = user.id
        join
      c_period_time periodTime on user.period_type_id = periodTime.period_type_id and periodTime.date > DATE_FORMAT(lastPayment.date_created, '%Y-%c-%d')
    where
      user.is_active = 1;
  `;

  pool.query(query, (error, rows) => {
    try {
      if (error) {
        sendError5001(req, res, error);
      } else if (rows[0]?.id === null || rows.length === 0) {
        res.status(200).send({ status: 200, rows: [] });
      } else {
        res.status(200).send({ status: 200, rows });
      }
    } catch (catchError) {
      sendError5001(req, res, catchError);
    }
  });
};

module.exports = getAllSuscriptions;
