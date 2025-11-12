import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { ContactUS } from "./screens/ContactUS";
import { HelpCenter } from "./screens/HelpCenter";
import { IndustrySolutions } from "./screens/IndustrySolutions";
import { LegalDisclaimer } from "./screens/LegalDisclaimer";
import { OurMission } from "./screens/OurMission";
import { PlatformSuite } from "./screens/PlatformSuite";
import { PressMedia } from "./screens/Press&Media";
import { PricingDetail } from "./screens/PricingDetail";
import { PrivacyPolicy } from "./screens/PrivacyPolicy";
import { RegulatoryCompliances } from "./screens/RegulatoryCompliances";
import { TermsOfServices } from "./screens/Terms";
import { Training } from "./screens/Training";
import { ConsumerProtection } from "./screens/ConsumerProtection";
import { Login } from "./screens/Login";
import { Signup } from "./screens/Signup";
import { DeveloperCenter } from "./screens/DeveloperCenter";
import { Messages } from "./screens/Messages";
import { MessagesChat } from "./screens/MessagesChat";
import { SupportCenter } from "./screens/SupportCenter";
import { ReportScam } from "./screens/ReportScam";
import { SecureTransactions } from "./screens/SecureTransactions";
import { CreateNewTransaction } from "./screens/CreateNewTransaction";
import { Dashboard } from "./screens/Dashboard";
import { IdVerification } from "./screens/IDVerification";
import { ApiReferences } from "./screens/API references";
import { SecureEscrow } from "./screens/SecureEscrow";
import { FraudPrevention } from "./screens/FraudPrevention";
import { DeveloperPortal } from "./screens/DeveloperPortal";
import { TrustverifyLive } from "./screens/TrustverifyLive";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUS />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/industry" element={<IndustrySolutions />} />
        <Route path="/legal" element={<LegalDisclaimer />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/platform" element={<PlatformSuite />} />
        <Route path="/media" element={<PressMedia />} />
        <Route path="/pricing" element={<PricingDetail />} />
        <Route path="/policies" element={<PrivacyPolicy />} />
        <Route path="/compliances" element={<RegulatoryCompliances />} />
        <Route path="/terms" element={<TermsOfServices />} />
        <Route path="/training" element={<Training />} />
        <Route path="/consumer-protection" element={<ConsumerProtection />} />
        <Route path="/developer-center" element={<DeveloperCenter />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages-chat" element={<MessagesChat />} />
        <Route path="/support-center" element={<SupportCenter />} />
        <Route path="/report-scam" element={<ReportScam />} />
        <Route path="/secure-transaction" element={<SecureTransactions />} />
        <Route path="/create-new-transaction" element={<CreateNewTransaction />} /> 
        <Route path="/id-verification" element={<IdVerification />} />
        <Route path="/api-references" element={<ApiReferences />} />
        <Route path="/secure-escrow" element={<SecureEscrow />} />
        <Route path="/fraud-prevention" element={<FraudPrevention />} />
        <Route path="/developer-portal" element={<DeveloperPortal />} />
        <Route path="/trustverify-live" element={<TrustverifyLive />} />
      </Routes>
    </Router>
  );
}

export default App;
