import { describe, expect, test } from "bun:test";
import { createExpertiseHead, createTeamHead } from "./seo";

describe("removed resources cannot be indexed", () => {
  test("removed expertise pages carry noindex and no canonical", () => {
    for (const id of ["family-business-governance", "succession-planning-founders", "tech-legacy-planning", "cross-border-wealth-planning", "business-legacies-apac", "trusts-foundations-wealth", "singapore-legacy-hub", "ip-business-legacy", "crisis-proofing-legacy", "esg-legacy-business"]) {
      const head = createExpertiseHead(id);
      expect(head.meta).toContainEqual({ name: "robots", content: "noindex" });
      expect(head.links.some((link) => link.rel === "canonical")).toBe(false);
    }
  });
  test("removed team member carries noindex and no canonical", () => {
    const head = createTeamHead("amanda-lee");
    expect(head.meta).toContainEqual({ name: "robots", content: "noindex" });
    expect(head.links.some((link) => link.rel === "canonical")).toBe(false);
  });
  test("active expertise and team pages retain self-canonicals", () => {
    expect(createExpertiseHead("tech-general-counsel").links).toContainEqual({ rel: "canonical", href: "https://beyondhorizons.sg/expertise/tech-general-counsel" });
    expect(createTeamHead("hui-ling-teo").links).toContainEqual({ rel: "canonical", href: "https://beyondhorizons.sg/team/hui-ling-teo" });
  });
});