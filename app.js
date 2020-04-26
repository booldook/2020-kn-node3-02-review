const express = require('express');
const app = express();
const path = require('path');

/* 서버구동 */
app.listen(3000, function(){
	console.log("http://127.0.0.1:3000");
});

/* View Engine 세팅 */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.locals.pretty = true;


/* 미들웨어 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/* 라우터 */
app.use("/", express.static(	path.join(__dirname, './public')	));

app.get("/pug", (req, res, next) => {
	const user = [
		{id: 1, name: "홍길동"},
		{id: 2, name: "홍길순"},
		{id: 3, name: "홍길만"},
	];
	const title = "PUG로 만든 페이지 입니다."
	const headTitle = "PUG페이지"
	res.render("index.pug", {user, title, headTitle});
});