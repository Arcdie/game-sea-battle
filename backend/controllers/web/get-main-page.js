const path = require('path');

const log = require('../../libs/logger')(module);

const frontFolder = path.join(__dirname, '../../../frontend');

module.exports = async (req, res, next) => {
  try {
    res.sendFile(`${frontFolder}/html/main-page.html`);
  } catch (error) {
    log.warn(error.message);

    return res.json({
      status: false,
      message: error.message,
    });
  }
};
