# Lambda and SQS

Lambda function for writing messages to SQS and also receiving SQS messages as triggers.

### Prerequisites

- Set up SQS QUEUE and give lambda permissions to SQS
- Set Env variable in Lambda to be the SQS Queue url
- Make sure to set messages in sqs to batches of 1 or if a message fails it will fail all of them

### Example message 
```javascript 
const values = {
  amount: 10,
  members: ["user1", "user2"],
  updatedTotal: 1234,
  timestamp: new Date.toISOString(),
};

await sendSQSMessage(values);
```

### Send SQS Message 
```javascript 
const sendSQSMessage = async (item) => {
  var params = {
    MessageBody: JSON.stringify(item),
    QueueUrl: QUEUE_URL,
  };
  console.log(params);
  return await SQS.sendMessage(params).promise();
};
```

### Test Event

```json
{
  "Records": [
    {
      "messageId": "19dd0b57-b21e-4ac1-bd88-01bbb068cb78",
      "receiptHandle": "MessageReceiptHandle",
      "body": "{\n      \"amount\": \"10\",\n   \"updatedTotal\":\"123\",\n   \"timetamp\":\"2020-01-01T10:00:00z\",\n   \"id\":\"123\"}",
      "attributes": {
        "ApproximateReceiveCount": "1",
        "SentTimestamp": "1523232000000",
        "SenderId": "123456789012",
        "ApproximateFirstReceiveTimestamp": "1523232000001"
      },
      "messageAttributes": {},
      "md5OfBody": "{{{md5_of_body}}}",
      "eventSource": "aws:sqs",
      "eventSourceARN": "arn:aws:sqs:ap-southeast-2:123456789012:MyQueue",
      "awsRegion": "ap-southeast-2"
    }
  ]
}
```
