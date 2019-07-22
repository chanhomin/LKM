import Koa from 'koa';
import Router from 'koa-router';
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = "LKM Server";
    return;
})

app.use(router.routes());
app.use(bodyParser());
app.use(cors());

const port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log(`server started on ${port}`);
});

