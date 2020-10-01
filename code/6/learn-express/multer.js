
const multer = require('multer');
const fs = reqire('fs');

// uploads 파일이 없다면 fs모듈로 생성해주는 코드
try{
    fs.readdirSync('uploads');
} catch(error){
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
}

// multer설정하면 upload에 다양한 미들웨어가 생김
const upload = multer({
  strage: multer.diskStorage({
    destination(req, file, done){
      done(null, 'uploads/');
    }.
    filename(req, file, done){
      donst ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now()+ext);
        // 파일이름+저장시간으로 저장
    },
  }),
  limits: {fileSize: 5*1024*1024}, //5MB
});

// multer 미들웨어 사용
app.post('/uploads', upload.single('image'), (req, res) => {
    console.log(req.file, req.body);
    res.send('ok');
});

app.post('/uploads', upload.array('many'), (req, res) => {
    console.log(req.files, req.body); // files 배열에 저장됨
    res.send('ok');
});

app.post('/uploads', 
    upload.fields([{name:'image1'}, {name:'image2'}]),
    (req, res) => {
        console.log(req.files, req.body); // files.image1, files.image2에 저장됨
        res.send('ok');
    },
);

app.post('/uploads', upload.none(), (req, res) => {
    console.log(req.body); // 파일 업로드하지 않았으므로 body만 존재
    res.send('ok');
});
