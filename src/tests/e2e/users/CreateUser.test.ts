import request from "supertest";
import { ExpressApp as app } from "../../../app";
import { prisma } from "../../../api/infraestructure/db/client/PrismaClient";

describe("Create user", () => {
  it("Should return error if user already exist", async () => {
    const user = {
      email: "hebert@teste.com",
      password: "20304050",
      name: "Hebert",
    };

    const response = await request(new app().getApp())
      .post("/api/v1/users")
      .send(user);
    expect(response.status).toBe(209);
    expect(response.body.message).toBe("User already exist");
  });

  it("Should Create a new user", async () => {
    const user = {
      email: "heberdevelopro@gmail.com",
      password: "20304050",
      name: "Hebert",
    };

    const response = await request(new app().getApp())
      .post("/api/v1/users")
      .send(user);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User created successfully");
  });

  afterAll(async () => {
    await prisma.user.delete({
      where: {
        email: "heberdevelopro@gmail.com",
      },
    });
  });
});
