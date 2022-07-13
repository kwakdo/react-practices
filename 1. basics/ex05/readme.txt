ex05: React API 기반으로 애플리케이션 리팩토링

1. webpack은 작게 분리된 많은 애플리케이션의 모듈(js, css, images, font)들의 '의존성 분석'하여 하나의 JS 파일로 도구
2. 최종 결과물인 하나의 JS파일을 번들(bundle)이라고 부르고 묶는 작업을 번들링(bundling)이라 한다.
3. 번들링은 단순히 모듈을 하나의 파일로 묶는 작업을 의미 하지 않는다.
4. 빌드 작업(js 모듈)
    1) linting(ESLint, 문법체크) 작업
    2) document 작업(JSDoc) 작업
    3) test(Mocha, jest) 작업
    4) 난독화/압축(uglify) 작업
    5) 번들링
5. js 모듈뿐만 아니라 다양한 에셋(images, css, sass/scss, font)들도 모듈로 취급한다.
6. 설치
[ex04]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader
7. 설치 확인
[ex04]$ npx webpack --version
8. webpack 설정(webpack.config.js)
9. 스크립팅(package.json)
10. 애플리케이션 실행(테스트 서버 실행)
    [ex04]$ npm start
10. 빌브(번들링)
    [ex04]$ npm run build