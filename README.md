# Lambda and SQS

Lambda function for writing messages to SQS and also receiving SQS messages as triggers.

### Prerequisites

Set up SQS QUEUE and give lambda permissions to SQS
Make sure to set messages in sqs to batches of 1 or if a message fails it will fail all of them

```
npm install uuid
```

### Test Event

```json
{
  "Records": [
    {
      "messageId": "19dd0b57-b21e-4ac1-bd88-01bbb068cb78",
      "receiptHandle": "MessageReceiptHandle",
      "body": "{\n      \"amount\": \"100000\",\n   \"id\":\"123\"}",
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
