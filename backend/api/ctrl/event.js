const ctrl = {};
const eventModel = require('../model/event');
const visitorModel = require('../model/visitor');

ctrl.getdata = async (req, res) => {
  try {
    const data = await eventModel.allData(req);
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
ctrl.postdata = async (req, res) => {
  try {
    console.log('=re', req.body);
    const data = req.body;

    res.json({
      ok: 1,
      data,
    });
  } catch (error) {
    res.json({
      ok: 0,
    });
  }
};

ctrl.getdata1 = async (req, res) => {
  try {
    const data = await eventModel.allData1(req);
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
ctrl.getdata2 = async (req, res) => {
  try {
    const data = await eventModel.allData2(req);
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

ctrl.visitorList_1 = async (req, res) => {
  try {
    const eventData = await eventModel.join_visitorList_1(req);
    const visitorList = await visitorModel.visitorList_1(req);
    const result = {
      event: eventData,
      visitorList,
    };
    // console.log('data--: ', data);
    res.json({
      ok: 1,
      result,
    });
  } catch (error) {
    console.log('ee', error.message);
    res.json({
      ok: 0,
      error: error.message,
    });
  }
};

module.exports = ctrl;
