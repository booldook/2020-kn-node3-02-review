const express = require('express');
const app = express();
const path = require('path');

/* 서버구동 */
app.listen(3000, function(){
	console.log("http://127.0.0.1:3000");
});

/* 미들웨어 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* 라우터 */
app.use("/", express.static(	path.join(__dirname, './public')	));
