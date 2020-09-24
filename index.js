const express = require("express");
const app = express();
const fs = require('fs');
const pdf = require('html-pdf');
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


let getReq = app.get("/get", async (req, res) => {
  const html = req.query.html;
  const name = req.query.name;

  pdf.create(html).toFile(`./${name}-${new Date().getUTCMilliseconds()}-${(Math.random() * 10000).toFixed(0)}.pdf`, function (err, final) {
    // console.log(final.filename);
    res.download(final.filename, () => {
      try {
        fs.unlinkSync(final.filename)
        //file removed
      } catch (err) {
        console.error(err)
      }
    });
  });
});


let getFile = app.get("/getFile", async (req, res) => {
  const filename = req.query.filename;
  const isDelete = req.query.delete;

  res.download(filename, () => {
    try {
      if (isDelete) {
        fs.unlinkSync(final.filename)
        //file removed
      }
    } catch (err) {
      console.error(err)
    }
  });
});


let postReq = app.post("/post", urlencodedParser, async (req, res) => {
  const name = req.query.name;
  const isDownload = req.query.download | 1;
  const isDelete = req.query.delete | 1;
  const html = req.body.html;

  pdf.create(html).toFile(`./${name}-${new Date().getUTCMilliseconds()}-${(Math.random() * 10000).toFixed(0)}.pdf`, function (err, final) {
    console.log(final.filename);
    if (isDownload) {
      res.download(filename, () => {
        try {
          if (isDelete) {
            fs.unlinkSync(final.filename);
            //file removed
          }
        } catch (err) {
          console.error(err);
        }
      });
    } else{
      var downloadUrl = req.protocol + '://' + req.get('host') + '/getFile?filename=' +filename + '&delete=1';
      res.send(downloadUrl);
    } 
  });
});

app.listen(process.env.PORT || 3000, '0.0.0.0');
console.log('Node server running on port 3000');


