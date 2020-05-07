import AWS from "aws-sdk";
// Set the region
AWS.config.update({ region: "us-east-2" });

// Create an SQS service object
const sqs = new AWS.SQS({ apiVersion: "2012-11-05" });

function sendToSQS(message) {
  const params = {
    MessageBody: JSON.stringify(message),
    QueueUrl: process.env.AWS_SQS_URL,
  };

  sqs.sendMessage(params, (err, data) => {
    if (err) {
      return console.log(err, err.stack);
    }

    console.log(`Message id: ${data.MessageId}`);
  });
}

export default sendToSQS;
