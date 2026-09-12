import { createFileRoute } from "@tanstack/react-router";
import { createStaticPageHead } from "@/lib/seo";
import BlockchainPage from "@/pages/industry/BlockchainPage";

export const Route = createFileRoute("/industry/blockchain-digital-assets")({
  head: () => createStaticPageHead("/industry/blockchain-digital-assets"),
  component: BlockchainPage,
});
