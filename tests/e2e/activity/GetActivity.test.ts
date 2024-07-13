import request from "supertest";
import { ExpressApp as app } from "../../../src/app";

describe("Get activity", () => {
  it("Should get an actvity", async () => {
    const response = await request(new app().getApp()).get(
      "/api/v1/activity/a0d7d41f-acb8-4eb1-9157-5869162e3839"
    );
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Get activity sucessfully");
  });
});
