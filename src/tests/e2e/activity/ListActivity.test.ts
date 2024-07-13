import request from "supertest";
import { ExpressApp as app } from "../../../src/app";

describe("List activity", () => {
  it("Should list actvity", async () => {
    const response = await request(new app().getApp()).get(
      "/api/v1/activity/689c198f-0fdc-4633-9149-4f9def43c893/all",
    );
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Get a list of activities sucessfully");
  });
});
