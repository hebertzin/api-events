import request from "supertest";
import { ExpressApp as app } from "../../../app";

describe("Authentication", () => {
  it("Should return a error if user not exist", async () => {
    const user = {
      email: "hebertnotexist@teste.com",
      password: "20304050",
    };
    const response = await request(new app().getApp())
      .post("/api/v1/authentication/user")
      .send(user);
    expect(response.status).toBe(404);
    expect(response.body.message).toBe("User not found");
  });

  it("Sould return error if user credential are invalid", async () => {
    const user = {
      email: "hebertsantosdeveloper@gmail.com",
      password: "2030405060",
    };
    const response = await request(new app().getApp())
      .post("/api/v1/authentication/user")
      .send(user);
    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid credentials");
  });

  it("Should generate token if user exist", async () => {
    const user = {
      email: "hebertzin@gmail.com",
      password: "20304050",
    };
    const response = await request(new app().getApp())
      .post("/api/v1/authentication/user")
      .send(user);
    expect(response.body.message).toBe("User log in");
    expect(response.body.body.token).toBeDefined();
    expect(typeof response.body.body.token).toBe("string");
  });
});
