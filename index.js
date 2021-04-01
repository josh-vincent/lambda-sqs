const AWS = require("aws-sdk", { region: "ap-southeast-2" });
const uuid = require("uuid");
const QUEUE_URL = process.env.SQS_QUEUE;

const values = {
  amount: 10,
  members: ["user1", "user2"],
  updatedTotal: 1234,
  timestamp: new Date.toISOString(),
};

exports.handler = async (event) => {
  const { body } = event.Records[0];
  const parsedBody = JSON.parse(body); // Now contains JSON object from SQS Message

  sendSQSMessage(values);
};

const sendSQSMessage = async (item) => {
  var params = {
    MessageBody: JSON.stringify(item),
    QueueUrl: QUEUE_URL,
  };
  console.log(params);
  return await SQS.sendMessage(params).promise();
};
