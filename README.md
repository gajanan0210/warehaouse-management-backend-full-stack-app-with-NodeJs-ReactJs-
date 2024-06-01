# React and Node.js with MongoDB Application

## Table of Contents
- Introduction
- Features
- Prerequisites
- Installation
- Running the Application
- Usage
- Database Configuration
- Project Structure
- Technologies Used
- Contributing
- License

## Introduction
This project is a full-stack web application built using React for the frontend and Node.js with Express for the backend. MongoDB is used as the database. The application features user authentication and includes a login screen and a home page.

## Features
- User authentication (login and signup)
- Protected home page accessible only after login
- Database connectivity using MongoDB

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- Node.js
- npm (Node Package Manager)
- MongoDB instance or MongoDB Atlas account

## Installation
1 .Clone the repository:
```
git clone <repository-url>
cd <repository-directory>
```

2 .Install backend packages

```
    cd backend
    npm install
```

3 .Install frontend packages

```
    cd ../frontend
    npm install
```

## Running the Application

Start the backend server:

```
    cd backend
    node server.js
```

 Start the frontend application

 ```
    cd ../frontend
    npm start
```

When you start the frontend application, the user will see the default login screen. After logging in, the user can access the main home page. To directly access the home page, you can add /home to the URL bar after the port number.



### Usage

Navigate to http://localhost:3000 to access the login screen.

After logging in, the user will be redirected to the home page.

If you want to directly access the home page, go to http://localhost:3000/home.

### Database Configuration

To connect the application to your MongoDB database, you need to update the database credentials in the backend configuration.


Open the backend/config/db.js file.
Update the MONGO_URI environment variable with your MongoDB connection string.

### Technologies Used

    Frontend: React
    Backend: Node.js, Express
    Database: MongoDB
    Others: Axios for HTTP requests, bcrypt for password hashing


# UI Images
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/digitalflake-assignment-ui-images/q8scj4k7tq8e7p3lifas.png)

![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251354/digitalflake-assignment-ui-images/i3ym6kp2x6lun7mdd7tw.png)

![img](https://res.cloudinary.com/dzurqbpi6/image/upload/digitalflake-assignment-ui-images/zp1ccwp2n4qmqvovuj2x.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251355/digitalflake-assignment-ui-images/nze1zsm22rsvk7otmrzd.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251355/digitalflake-assignment-ui-images/navzhcg6vwyxk9zfarhu.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251355/digitalflake-assignment-ui-images/rby0tslzetx2qtklgcsp.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251355/digitalflake-assignment-ui-images/n5zq68baoeqfzqpz2lep.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251355/digitalflake-assignment-ui-images/wxm6lxlvctrpe0n9qzrb.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251355/digitalflake-assignment-ui-images/jjzaqbbzpvs4bhsgkv2k.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251355/digitalflake-assignment-ui-images/le0ivzhvgmz7byg9xoov.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251356/digitalflake-assignment-ui-images/gcxv46buir2odtlhnqpq.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251356/digitalflake-assignment-ui-images/qvtlqdksqewduntyzpda.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251356/digitalflake-assignment-ui-images/fbtjsmjearte5txuaaa4.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251357/digitalflake-assignment-ui-images/vigpy2tivdxgim2mhhf0.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251354/digitalflake-assignment-ui-images/qhgntnsvcqsf8hrzuift.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251354/digitalflake-assignment-ui-images/u8arowdlmobwfs64cyta.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251358/digitalflake-assignment-ui-images/eb1p21i7x3jrghlik5vy.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251358/digitalflake-assignment-ui-images/ltekdvyythd3d4erazfd.png)
![img](https://res.cloudinary.com/dzurqbpi6/image/upload/v1717251357/digitalflake-assignment-ui-images/kqkvpeqx5mfzen2jss6m.png)

