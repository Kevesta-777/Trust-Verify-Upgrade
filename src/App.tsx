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
import { Dashboard } from "./screens/Dashboard";
import { IdVerification } from "./screens/IDVerification";

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
        <Route path="/id-verification" element={<IdVerification />} />

      </Routes>
    </Router>
  );
}

export default App;
