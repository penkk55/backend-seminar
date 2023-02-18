const ctrl = {};
const visitorModel = require('../model/visitor');

ctrl.getdata = async (req, res) => {
  try {
    const data = await visitorModel.allData(req);
    console.log('data--: ', data);
    res.json({
      ok: 1,
      data,
    });
  } catch (error) {
    console.log('ee', error.message);
    res.json({
      ok: 0,
      error: error.message,
    });
  }
};

ctrl.addNewVisitor = async (req, res, trxPostgress) => {
  try {
    await req.postgress.transaction(async (trxPostgress) => {
      try {
        console.log('=re', req.body);
        const payloads = req.body;
        const data = await visitorModel.insertNewVisitor(req, payloads);
        await trxPostgress.commit();
        res.json({
          ok: 1,
          data,
        });
      } catch (error) {
        console.log('-->rollback', error.message);
        await trxPostgress.rollback(error.message);
      }
    });
  } catch (error) {
    res.json({
      ok: 0,
      err: error.message,
    });
  }
};

module.exports = ctrl;
