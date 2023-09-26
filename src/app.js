import express, { response } from "express";

const app = express();

/* node는 meddieware 시스템으로 이루어져있음 */ 
app.use((request, response, next)=> {
    console.log("지나갑니다")
    next();
})


/*--------------------
-ejs 템플릿 엔진
-구멍이 있는 페이지 -> 구멍에 데이터를 넣을 수 있는 것
-node ejs
-npm install ejs
--------------------*/

//express야 나 ejs쓸꺼야
app.set("view engine", "ejs")
//ejs 파일의 위치는 여기야 절대위치 src폴더->client->html->a.ejs
app.set("views",process.cwd()+ "/src/client/html");

app.get("/", (request, response)=> {
    const homeData ={
        data : [{name:"민짱"},{name: "민짱민"},{name: "짱민"}],
    }
    response.render("home", homeData);
    
});

app.get("/introduce", (request, response)=> {
    response.render("introduce");
});


app.listen(8080, () => {
    console.log("8080 포트 서버 열림 http://localhost:8080")
}); 


