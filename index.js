const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("listening on 8080");
});

// 누군가가 /pet 으로 get 요청을 보내면  관련된 안내문을 띄어주자.

app.get("/pet", (request, response) => {
  response.send("펫 용품을 쇼핑 할 수 있는 페이지 입니다.");
});

app.get("/beauty", (request, response) => {
    response.send("뷰티 용품을 쇼필 할 수 있는 페이지 입니다.")
});

app.get("/", (request, response) => {
    // response.sendFile('')
    response.sendFile(__dirname + '/index.html');
});
