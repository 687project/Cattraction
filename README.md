<p align="left"><img width="800" alt="logo" src="https://user-images.githubusercontent.com/38336855/97132695-14c75e80-171e-11eb-997b-44e4ad28e193.png"></p>

# Cattraction

**Cattraction** is an website that allow users to share images, post texts, and explore all kinds of cat information.

The main killer app idea is a comprehensive information service and trendy pet social system.

Cattraction not only means our website is a wonderful place for cat breeders and cattery owners, but also targeted




## Tech Stack
Java/SpringBoot, React, MongoDB, AWS.

## Installation
To run our code, run the two commands in two terminals
```
./backend.sh
./frontend.sh
```
The frontend is connect to our server which address is **216.171.38.35**, if you wanna connect it the localhost, you need to modify two lines in **/frontend/src/index.js**. In line 10-11, you could select one address setting. If you comment the first one and uncomment the 
second one, the frontend will be connect to the localhost.
```
localStorage.setItem("ip",'http://216.171.38.35:8080')
//localStorage.setItem("ip",'http://localhost:8080')
```
