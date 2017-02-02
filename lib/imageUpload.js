const s3 = require('./s3');
const uuid = require('uuid');

function imageUpload(req, res, next){
  if(!req.body.image) return next();

  const imageData = req.body.image.match(/base64,(.*)$/)[1];
  const mime = req.body.image.match(/^data:(.*);/)[1];
  const extension = mime.replace('image/', '');
  const filename = `${uuid.v1()}.${extension}`;

  s3.upload({
    Bucket: 'swishlist-bucket',
    Key: filename,
    Body: new Buffer(imageData, 'base64'),
    ContentType: mime
  }, (err) => {
    if (err) return next(err);
    req.file = filename;
    next();
  });
}

module.exports = imageUpload;
