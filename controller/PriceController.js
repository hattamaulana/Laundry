const priceModel = require("../models/PriceModel.js");
const response = require("./response");

module.exports = {
  fetchAllPriceDatas: async (req, res) => {
    await priceModel
      .findAll()
      .then(datas => {
        const message = "Success Load Data Price";
        res.status(response.CODE_UNAUTHORIZED)
            .json(response.set(response.CODE_UNAUTHORIZED, message, datas));
      })
      .catch(err => {
        const message = "Success Load Data Price";
        res.status(response.CODE_FAILURE)
            .json(response.set(response.CODE_FAILURE, message, null));
      });
  },
  carryPriceData: async (req, res) => {
    await priceModel
      .create({
        kelas: req.body.kelas,
        tipe: req.body.tipe,
        harga: req.body.harga
      })
      .then(datas => {
        res.status(200).json(datas);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  }
};
