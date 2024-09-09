import request from "supertest";
import { ExpressApp as app } from "../../../app";
import { prisma } from "../../../api/infraestructure/db/client/PrismaClient";

describe("Create activity", () => {
  it("Should create a new actvity", async () => {
    const activity = {
      name: "Corrida na praia",
      description: "Corri 10km em uma praia da cidade, em 30 minutos",
      userID: "689c198f-0fdc-4633-9149-4f9def43c893",
      location: "Praia grande",
    };
    const response = await request(new app().getApp())
      .post("/api/v1/activity")
      .send(activity);
    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Activity Created sucessfully");

    const createdActivity = await prisma.activity.findFirst({
      where: { name: activity.name, userID: activity.userID },
    });

    expect(createdActivity).not.toBeNull();

    if (createdActivity) {
      await prisma.activity.delete({
        where: { id: createdActivity.id },
      });
    }
  });
});
