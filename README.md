## Events API

## Overview

events api is a task management application that combines simplicity and efficiency. With an intuitive interface, it allows users to easily create, organize and monitor events. Through personalized filters and detailed reports, Events provides a clear view of progress, helping teams and individuals stay focused and productive. Ideal for those looking for a practical and collaborative solution, Syncro transforms the way we manage our daily activities.

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

- [x] It is possible to create an events
- [x] Is it possible to delete an event
- [x] Is it possible to update an event
- [x] Is it possible to retrieve a list of events
- [x] Is it possible to recover an eventsall files
- [x] A user is able to authenticate to the system by generating a token

## **Endpoints**

- **POST** `/api/v1/authentication`: Auth a user
- **POST** `/api/v1//user`: Create a user
- **POST** `/api/v1/events/` : Create an events
- **GET** `/api/v1/events/:id`: Returns data from an events
- **GET** `/api/v1/events/:id/all` : Returns all events from a user
- **DELETE** `/api/v1/envents/:id` : Deletes an events

## How to run this project

- Make sure you have the **node**, **docker** installed
- Clone this repository `git clone https://github.com/hebertsanto/api-events`

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
