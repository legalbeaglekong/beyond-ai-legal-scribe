import { createFileRoute } from "@tanstack/react-router";
import BlockchainPage from "@/pages/industry/BlockchainPage";

export const Route = createFileRoute("/industry/blockchain-digital-assets")({
  component: BlockchainPage,
});
