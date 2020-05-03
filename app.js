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

app.get("/", (req, res, next) => {
	const navis = [
		{id: 1, title: "About", link:"#"},
		{id: 2, title: "Board", link:"#"},
		{id: 3, title: "Gallery", link:"#"},
	];
	const title = "index.html"
	const headTitle = "PUG페이지"
	res.render("index.pug", {navis, title, headTitle});
});