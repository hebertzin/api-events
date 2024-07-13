import request from "supertest";
import { ExpressApp as app } from "../../../app";
import { prisma } from "../../../api/infraestructure/db/client/PrismaClient";

describe("Delete activity", () => {
  it("Should delete an activity", async () => {
    await prisma.activity.create({
      data: {
        description: "Joguei 10 partidas de futebol com meus amigos",
        location: "São paulo",
        name: "Futebol",
        id: "5a1eab11-19f5-4c00-918a-cb5358a68beb",
        userID: "689c198f-0fdc-4633-9149-4f9def43c893",
      },
    });

    const response = await request(new app().getApp()).delete(
      "/api/v1/activity/5a1eab11-19f5-4c00-918a-cb5358a68beb"
    );
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Activity deleted sucessfully");
  });
});
