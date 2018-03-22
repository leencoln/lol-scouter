# lol-scouter

search stack in league of legends

## Intro

lol-scouter 는 세계 최대 인기 게임 중 하나인 리그오브레전드 유저에 대한 정보를 검색 할 수 있는 프로젝트 입니다.

![main-view](./mainview.png, "lol-scouter")

## Installation

### Client

```
npm run install:client
```

or

```
cd client
npm install
```

### Server

```
npm run install:server
```

or

```
cd server
npm install
```

## Link

localhost:8080

## Using Stack

>- Vue.js 2.5
>- Express.js 4.15

## Features

>- vue-cli를 이용하여 클라이언트 코드 작성
>- express-generator를 이용하여 서버 코드 작성
>- axios 를 이용하여 입력된 유저이름으로 비동기 처리를 통해 유저에 대한 정보 확인
>- 라이엇게임즈가 제공하는 api에 대한 효율적인 접근을 위해 kayn.js 라이브러리를 활용 ( 비동기 처리 지원 )

### Component

>- Header: CSS를 활용하여 동적인 헤더를 작성
>- UserNameInput: 입력받은 유저네임을 통해 유저의 정보 요청을 위해 App 컴포넌트로 유저네임 이벤트 전달, Bootstrap Awesome 아이콘의 저작권 문제로 svg 코드를 참고하여 버튼 아이콘 구현
>- UserInfo: UserNameInput 컴포넌트에서 입력받은 유저네임은 App 컴포넌트에서 유저정보를 요청하며 다시 props 데이터로 UserInfo 컴포넌트로 전달받아 페이지에 바인딩
>- PlayedChampions: 유저의 최근 100게임에 대한 데이터를 전달받아 캐릭터 숙련도를 반지름으로 하는 숙련도정보를 d3를 이용하여 구현할 예정입니다.
(현재는 svg태그내에 캐릭터 수 만큼 node가 임의의 반지름을 가지고 구현되어있는 상태)

## Command

```
npm run install:client : client 모듈 설치

npm run install:server : server 모듈 설치

npm run client : client 실행

npm run server : server 실행

npm run lol : client&server 실행
```

### Client

```
npm run dev : client 실행
npm run build : webpack 실행
```

### Server

```
npm run start : server 실행
```

## ISSUE

>- concurrently를 이용한 client와 server의 병렬 설치 실행 오류
>- 하위 컴포넌트에서 상위 컴포넌트로부터 전달받은 props 데이터 수정 방법 미해결
>- Vue.js는 DOM 직접 접근하는 것을 권장하지 않기 떄문에 D3.js와 함께 사용 할 때, 좀 더 나은 코드를 작성하는 방법 고민
>- 라이엇 게임즈가 제공하는 API KEY 값은 24시간의 유효 기간이 있습니다.

## Things to do

>- router 활용을 하여 유저 정보가 보여지는 페이지에서 url에 유저 네임 제공 
>- 유저 숙련도 정도를 보여주는 데이터를 D3를 활용하여 제공
>- Modal 컴포넌트를 활용하여 alert 제공
>- 테스트 코드 작성
>- OAuth 를 이용한 로그인 구현

## Reference

>- https://developer.riotgames.com/
>- https://fow.kr
>- https://op.gg
>- https://github.com/cnguy/kayn
>- https://codepen.io/nw/pen/jhKtk
>- https://github.com/d3/d3/blob/master/API.md#forces-d3-force
    (http://d3indepth.com/force-layout/)