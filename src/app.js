
/**
 * express야 나 ejs 쓸거야
 */
/**
 * ejs의 파일의 위치는 이프로젝트의 src 폴더에 client 폴더에 html 폴더 안에 있어
 */
import express from "express";
import viewRouter from "./router/viewRouter";
import apiRouter from "./router/apiRouter";

const app = express();

app.set("view engine", "ejs");
app.set("views", process.cwd() + "/src/client/html");

app.use("/api", apiRouter);
app.use("/", viewRouter);

app.listen(8080, () => {
  console.info("8080 포트 서버 열림 http://localhost:8080");
});
