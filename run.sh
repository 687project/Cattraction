#!/bin/sh

nohup mvn spring-boot:run &
cd ./src/main/frontend/
yarn start
