# node.js 로 서버 생성하기

## 1.서버란 무엇인가?

클라이언트에게 네트워크를 통해 정보나 서비스를 제공하는 컴퓨터 시스템으로 컴퓨터 프로그램(server program) 또는 장치(device)를 의미한다.(나무 위키)

**간단히 말해서 요청을 처리해줄 수 있는 기계**이다.

ex) 내가 네이버 웹툰 페이지를 요청하면 네이버 서버에서 웹툰 메인 html 을 전송 해준다.

## 서버에게 요청하는 방법 HTTP

### HTTP (HyperText Transfer Protocol)

텍스트 기반의 통신 규약으로 **인터넷에서 데이터를 주고 받을 수 있는 프로토콜** 이렇게 규약을 정해두었기 떄문에 모든 프로그램이 이 규약에 맞춰 개발해서 서로 정보를 교환할 수 있게 되었다.

### HTTP 동작

클라이언트 즉, 사용자가 브라우저를 통하여 어떠한 서비스를 url 또는 다른 것을 통하여 **요청(request)** 하면 서버에서는 해당 요청사항에 맞는 결과를 찾아서 사용자에게 **응답(response)** 하는 형태로 작동한다.

- HTTP 메시지는 HTTP 서버와 HTTP 클라이언트에 의해 해석이 된다.
- TCP/ IP를 이용하는 응용 프로토콜이다.
  (컴퓨터와 컴퓨터간에 데이터를 전송 할 수 있도록 하는 장치로 인터넷이라는 거대한 통신망을 통해 원하는 정보(데이터)를 주고 받는 기능을 이용하는 응용 프로토콜)
- HTTP는 연결 상태를 유지하지 않는 비연결성 프로토콜이다.
  (이러한 단점을 해결하기 위해 Cookie와 Session이 등장하였다.)
  -HTTP는 연결을 유지하지 않는 프로토콜이기 때문에 요청/응답 방식으로 동작한다.

### REQUEST Method

- 읽기 (GET)
- 쓰기 (POST)
- 수정 (PUT)
- 삭제 (DELETE)

### Status Code (상태 코드)

- 1xx (조건부 응답): 요청을 받았으며 작업을 계속한다.
- 2XX (성공): 클라이언트가 요청한 동작을 수신하여 성공적으로 처리 했음
- 3xx (리다이렉션 완료): 클라이언트는 요청을 마치기 위해 추가 동작을 취해야함
- 4XX (요청 오류): 클라이언트에 오류가 있음을 나타낸다.
- 5XX (서버 오류): 서버가 유효한 요청을 명백하게 수행하지 못했음 을 나타낸다.

## 2.NODE.js 란?

Chrome V8 JavaScipt로 엔진으로 만들어진 런타임(실행 도구다)

우선 자바스크립트를 이해기 위해서 HTML을 이해 해보자

### HTML(Hyper Text Markup Language)

웹페이지를 만들기 위한 정적인 마크업 언어(움직이지 안음)

### JavaScript

웹페이지 생동감을 불어넣기 위한 프로그래밍 언어

자바스크립트는 웹브라우저 해석을 하는데 웹브라우저 말고 다른 환경에서도 javaScript를 사용할 수 있도록 하는 런타임이다

## Node.js 시작하기

1. https://nodejs.org/en/ 홈페이지로 가서 다운로드를 해준다.
2. cmd 창에서 프로젝트 디렉토리에서 npm init 입력 후 설정
3. npm i(install) express 설치

- npm (라이브러리를 설치하기 위한 도구)

4. npm i -g(global) nodemon - 서버 장동화 시키는 스크립트 라이브러리

```javascript
    // npm init 입력하면 package.json 파일이 생기게 되는데 설치한 라이브러리들을 기록을 해주는 곳
    {
  "name": "web_server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js", // 앱을 실핼할 곳을 index.js 지정
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.3"
  }
}

```
```javascript

// 서버를 실행 실행 시키기 위해서 적용
const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("listening on 8080");
});
```


```Node.js
nodemon index.js 
```