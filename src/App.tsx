import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyChooseUsDetail from "./pages/WhyChooseUsDetail";
import WhySpecialistCounselPage from "./pages/WhySpecialistCounselPage";
import AIToolsPage from "./pages/AIToolsPage";
import JoinUsPage from "./pages/JoinUsPage";
import CSRPage from "./pages/CSRPage";
import ExpertiseDetail from "./pages/ExpertiseDetail";
import ExpertiseOverview from "./pages/ExpertiseOverview";
import MarketInsights from "./pages/MarketInsights";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import OurClientsPage from "./pages/OurClientsPage";
import AnnouncementsPage from "./pages/AnnouncementsPage";
import AviationPage from "./pages/industry/AviationPage";
import TransportationPage from "./pages/industry/TransportationPage";
import WellnessHealthPage from "./pages/industry/WellnessHealthPage";
import BlockchainPage from "./pages/industry/BlockchainPage";
import EnergyTransitionPage from "./pages/industry/EnergyTransitionPage";
import TradeTariffPage from "./pages/industry/TradeTariffPage";
import RoboticsPage from "./pages/industry/RoboticsPage";
import CybersecurityPage from "./pages/industry/CybersecurityPage";
import SpacePage from "./pages/industry/SpacePage";
import SingaporeSpaceLawPage from "./pages/SingaporeSpaceLawPage";
import SingaporeEmploymentLawPage from "./pages/SingaporeEmploymentLawPage";
import SingaporeAIGovernancePage from "./pages/SingaporeAIGovernancePage";
import SingaporeRestructuringPage from "./pages/SingaporeRestructuringPage";
import SingaporeNuclearLawPage from "./pages/SingaporeNuclearLawPage";
import SingaporeAviationLawPage from "./pages/SingaporeAviationLawPage";
import SingaporeRoboticsLawPage from "./pages/SingaporeRoboticsLawPage";
import SingaporeAlternativeEnergyPage from "./pages/SingaporeAlternativeEnergyPage";
import TopicsPage from "./pages/TopicsPage";
import FractionalGCPage from "./pages/industry/FractionalGCPage";
import AICodeCounselPage from "./pages/industry/AICodeCounselPage";
import TeamPage from "./pages/TeamPage";
import TeamMemberPage from "./pages/TeamMemberPage";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/en-us/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/why-choose-us/:id" element={<WhyChooseUsDetail />} />
              <Route path="/expertise" element={<ExpertiseOverview />} />
              <Route path="/expertise/:id" element={<ExpertiseDetail />} />
              <Route path="/market-insights" element={<MarketInsights />} />
              <Route path="/industry/aviation" element={<AviationPage />} />
              <Route path="/industry/transportation" element={<TransportationPage />} />
              <Route path="/industry/wellness-health" element={<WellnessHealthPage />} />
              <Route path="/industry/blockchain-digital-assets" element={<BlockchainPage />} />
              <Route path="/industry/energy-transition" element={<EnergyTransitionPage />} />
              <Route path="/industry/trade-tariff" element={<TradeTariffPage />} />
              <Route path="/industry/robotics" element={<RoboticsPage />} />
              <Route path="/industry/cybersecurity-tech" element={<CybersecurityPage />} />
              <Route path="/industry/space" element={<SpacePage />} />
              <Route path="/singapore-space-law" element={<SingaporeSpaceLawPage />} />
              <Route path="/singapore-employment-law" element={<SingaporeEmploymentLawPage />} />
              <Route path="/singapore-ai-governance" element={<SingaporeAIGovernancePage />} />
              <Route path="/singapore-restructuring-insolvency" element={<SingaporeRestructuringPage />} />
              <Route path="/singapore-nuclear-law" element={<SingaporeNuclearLawPage />} />
              <Route path="/singapore-aviation-law" element={<SingaporeAviationLawPage />} />
              <Route path="/singapore-robotics-law" element={<SingaporeRoboticsLawPage />} />
              <Route path="/singapore-alternative-energy-law" element={<SingaporeAlternativeEnergyPage />} />
              <Route path="/topics" element={<TopicsPage />} />
              <Route path="/industry/fractional-gc" element={<FractionalGCPage />} />
              <Route path="/industry/ai-code-counsel" element={<AICodeCounselPage />} />
              <Route path="/why-specialist-counsel" element={<WhySpecialistCounselPage />} />
              <Route path="/ai-tools" element={<AIToolsPage />} />
              <Route path="/join-us" element={<JoinUsPage />} />
              <Route path="/work/csr" element={<CSRPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/our-clients" element={<OurClientsPage />} />
              <Route path="/announcements" element={<AnnouncementsPage />} />
              <Route path="/team/:slug" element={<TeamMemberPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
