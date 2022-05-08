# Introduction

This project will introduce you to the basic elements of blog implementation. Learning something new is always a little daunting at first. but I think that things will start to become familiar in no time.

## Server application

In this directory named `backend` will finish off the features of our server by adding a lot of controllers, services, pipes of `Nest.js` for blog service.

-   Nest.js
-   TypeORM
-   MariaDB
-   Redis

Before start the server application, you have to create some file such as `.development.env` and `.env` and then you should set the following environment variables.

```bash
DB_HOST=localhost
DB_PASSWORD=1234
DB_USER=admin
DB_NAME=test
DB_PORT=3306
DOCS_USERNAME=admin
DOCS_PASSWORD=1234
JWT_SECRET=<YOUR_SECRET>
JWT_SECRET_EXPIRATION_TIME=2h
JWT_REFRESH_TOKEN_SECRET=<YOUR_SECRET>
JWT_REFRESH_TOKEN_EXPIRATION_TIME=14d
PUBLIC_SERVER_IP=http://localhost:3000
PASSWORD_JWT_SECRET=<YOUR_SECRET>
MAIL_XOR_KEY=<6_digit_number>
GMAIL_USERNAME=<YOUR_ID>@gmail.com
GMAIL_PASSWORD=<ENCRYPTED_PASSWORD>
DAUM_USERNAME=<YOUR_ID>@daum.net
DAUM_PASSWORD=<ENCRYPTED_PASSWORD>
NAVER_USERNAME=<YOUR_ID>@naver.com
NAVER_PASSWORD=<ENCRYPTED_PASSWORD>
AES_256_KEY=<YOUR_SECRET>
AES_256_IV=<YOUR_SECRET>
```

However it is hard to set the environment variables manually, so I recommend you to use terminal command that can set them automatically.

To set the environment variables automatically, you can use the command line.

```
yarn start env
```

The Nest.js version is using a version released in March 2021.

## Devops environment

`devops`와 `rdb-devops` 폴더에는 `Docker` 기반 개발 환경 구축을 위한 파일들이 있습니다.

-   Nginx
-   Docker

웹 서버는 도커를 사용할 수 있는 리눅스(**우분투 서버 20.04**)나 맥 환경에서 실행해야 합니다.

실무와는 거리가 먼 구성이지만 블로그 서버를 돌리기에는 적합하다고 생각합니다.

하지만 인증서는 직접 연동해야 합니다. 보안 문제로 일부로 제외하였습니다.

## Frontend application

In this frontend application will finish off the look and feel of our blog by adding a lot of Components, Stylesheet files, Redux and Recoil state management system of NextJS.

-   API Proxy
-   SWR
-   TOAST UI Editor
-   Recoil
-   TailwindCSS
-   Typescript

잘 쓸 수 있는 프론트엔드 프레임워크는 뷰이지만, 일부로 지금까지 전혀 사용해보지 않았던 전혀 모르는 리액트 라이브러리로 구성했습니다.

써드 파티 라이브러리들도 지금까지 전혀 써보지 않았던 것으로 구성하였습니다.

전혀 모르는 분야에서 새로운 것을 배울 수 있을 거라고 생각했습니다.
