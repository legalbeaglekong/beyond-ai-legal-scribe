import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { createExpertiseHead, createTeamHead } from "./seo";

describe("removed resources cannot be indexed", () => {
  test("removed expertise pages carry noindex and no canonical", () => {
    for (const id of ["family-business-governance", "succession-planning-founders", "tech-legacy-planning", "cross-border-wealth-planning", "business-legacies-apac", "trusts-foundations-wealth", "singapore-legacy-hub", "ip-business-legacy", "crisis-proofing-legacy", "esg-legacy-business"]) {
      const head = createExpertiseHead(id);
      assert.ok(head.meta.some((meta) => "name" in meta && meta.name === "robots" && meta.content === "noindex"));
      assert.equal(head.links.some((link) => link.rel === "canonical"), false);
    }
  });
  test("removed team member carries noindex and no canonical", () => {
    const head = createTeamHead("amanda-lee");
    assert.ok(head.meta.some((meta) => "name" in meta && meta.name === "robots" && meta.content === "noindex"));
    assert.equal(head.links.some((link) => link.rel === "canonical"), false);
  });
  test("active expertise and team pages retain self-canonicals", () => {
    assert.deepEqual(createExpertiseHead("tech-general-counsel").links, [{ rel: "canonical", href: "https://beyondhorizons.sg/expertise/tech-general-counsel" }]);
    assert.deepEqual(createTeamHead("hui-ling-teo").links, [{ rel: "canonical", href: "https://beyondhorizons.sg/team/hui-ling-teo" }]);
  });
});