ex02: Component Styling

1) Inline Styling: src/01
2) Normal CSS
    - css-loader options: {module: false}
    - [ex02]$ npm run debug src=02 css-modules=false
3) CSS Module I
    - css-loader options: {module: true}
    - [ex02]$ npm run debug src=03 (css-modules=true)
4) CSS Module II
    - css-loader options: {module: true}
    - [ex02]$ npm run debug src=03 (css-modules=true)
5) SASS & SCSS
    - css-loader options: {module:true}
    - [ex02]$ npm run debug src=04 (css-modules=true)
6) CSS in JS(Style Component), Less & Styleable
7) Font Awesome
  - 코어 설치
        [ex02]$ npm i @fortawesome/fontawesome-svg-core
        [ex02]$ npm i @fortawesome/react-fontawesome
  - icon(light(유료), regular, solid(기본), brands(기업)) 선택 설치
        [ex02]$ npm i @fortawesome/free-regular-svg-icons
        [ex02]$ npm i @fortawesome/free-solid-svg-icons
        [ex02]$ npm i @fortawesome/free-brands-svg-icons
8) React Modal
    - 설치
        [ex02]$ npm i react-modal

======================================================================================
1. 설치
[ex01]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader node-sass sass-loader babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react
[ex01]$ npm i react react-dom prop-type

2. 설정
babel.config.json
webpack.config.js

3. npm scripting

4. 실행
[ex01]$ npm run debug src=(01|02|...)