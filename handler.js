'use strict';

module.exports.hello = async (event) => {
  const currentStage = process.env.CURRENT_STAGE || 'Unknown';
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `You are executing API on a ${currentStage} stage.`
    }),
  };
  return response;
};
