//

import { getEnvManifests } from "@socialgouv/kosko-charts/testing";
import { project } from "@socialgouv/kosko-charts/testing/fake/gitlab-ci.env";

jest.setTimeout(1000 * 60);
test("kosko generate --dev", async () => {
  process.env.RANCHER_PROJECT_ID = "c-kk8xm:p-2h6lh";
  expect(
    await getEnvManifests("dev", "", project("siret2idcc").dev)
  ).toMatchSnapshot();
});