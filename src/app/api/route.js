/* eslint-disable import/no-anonymous-default-export */
import AWS from 'aws-sdk';

export default async (req, res) => {
    const s3 = new AWS.S3({
        accessKeyId: process.env.ACCESS_KEY_ID,
        secretAccessKey: process.env.SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });

    const bucketName = 'cga-photos'

    try {
        const data = await s3.listObjectsV2({ Bucket: bucketName }).promise();
        const photos = data.Contents.map(photo => ({
            key: photo.Key,
            url: `https://${bucketName}.s3.amazonaws.com/${photo.Key}`
        }));
        console.log('photos', photos)
        res.status(200).json(photos)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch photos from S3'});
    }
};

