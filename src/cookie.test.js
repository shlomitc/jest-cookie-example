import axios from "axios";
import {
  setup as setupDevServer,
  teardown as teardownDevServer,
} from "jest-dev-server";

describe("cookie test", () => {
  beforeEach(async () => {
    const port = 3000;
    await setupDevServer({
      command: `PORT=${port} node server/start.js`,
      launchTimeout: 50000,
      port,
    });
  });

  afterEach(async () => {
    await teardownDevServer();
  });

  it("should set a cookie the domain", async () => {
    const res = await axios.get("http://localhost:3000/register", {
      withCredentials: true, //This is important
    });
    expect(res.data).toBe("OK");
    const res2 = await (
      await axios.get("http://localhost:3000/has-cookie", {
        withCredentials: true, //This is important
      })
    ).data;
    expect(res2).toBe("Yes");
  });
});
