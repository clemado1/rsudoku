#!/bin/bash

# Rust 프로젝트 빌드
cargo build --release --target wasm32-unknown-unknown

# wasm-pack 실행
wasm-pack build --target web 

# www 디렉토리로 이동
cd www

# npm 패키지 설치
npm install

# webpack으로 프로젝트 빌드
npm run build
