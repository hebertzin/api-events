## e-church

## Overview

church is a task management application that combines simplicity and efficiency. With an intuitive interface, it allows users to easily create, organize and monitor tasks. Through personalized filters and detailed reports, Syncro provides a clear view of progress, helping teams and individuals stay focused and productive. Ideal for those looking for a practical and collaborative solution, Syncro transforms the way we manage our daily activities.

## **Techs**

- **Node js**
- **Typescript**
- **Docker**
- **Express**
- **Git**
- **Github actions**
- **Husky**
- **Prettier**
- **Eslint**
- **Zod**
- **Postgres**
- **Jest**
- **Supertest**
- **Render\***
- **Railway**

## **Features**

- [x] It is possible to create an activity
- [x] Is it possible to delete an activity
- [x] Is it possible to update an activity
- [x] Is it possible to retrieve a list of activities
- [x] Is it possible to recover an activityall files
- [x] A user is able to authenticate to the system by generating a token

## **Endpoints**

- **POST** `/api/v1/authentication/user`: Auth a user
- **POST** `/api/v1//user`: Create a user
- **POST** `/api/v1/events/` : Create an activity
- **GET** `/api/v1/events/:id`: Returns data from an activity
- **GET** `/api/v1/events/:userId/all` : Returns all activities from a user
- **DELETE** `/api/v1/envents/:id` : Deletes an activity

## How to run this project

- Make sure you have the **node**, **docker** installed
- Clone this repository `git clone https://github.com/hebertsanto/Alvadorn-Backend.git`

- Navigate to the project and run the following command `npm install`
- Create a `.env` file and create environment variables.
- See how to define the variables in the `.env.exemple` file
- Then just run the server with the following command: `npm run start:dev`

## Run with docker

- In the json package I created a script to run docker, all you need to do is run the command `npm run docker:build`
- After that, the application image will be created.

## Running tests

- You can run integration tests with this script `npm run tests:e2e`

## Pipilines/Github Actions

- **Lint**

  In this pipeline I implemented code lint to maintain the quality and organization of the code

- **Build**

  In this pipeline the code is transpiled to JavaScript and the project image is created
