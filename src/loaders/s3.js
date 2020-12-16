import AWS from "aws-sdk"


let config = {
    accessKeyId: "123",
    secretAccessKey: "abc",
    endpoint: "shs2.bradenn.com:8333",
    sslEnabled: false,
    s3ForcePathStyle: true
};

AWS.config.update(config);

let s3Client = new AWS.S3();



