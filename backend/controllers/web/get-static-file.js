const fs = require('fs');
const path = require('path');

const log = require('../../libs/logger')(module);

const frontFolder = path.join(__dirname, '../../../frontend');

module.exports = async (req, res, next) => {
  try {
    const pathToFile = `${frontFolder}/${req.originalUrl.split('/static/')[1]}`;

    if (!fs.existsSync(pathToFile)) {
      return res.sendStatus(404);
    }

    res.sendFile(pathToFile);
  } catch (error) {
    log.warn(error.message);

    return res.json({
      status: false,
      message: error.message,
    });
  }
};
