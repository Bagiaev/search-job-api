import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { AuthPage } from "@/pages/auth";
import { ResumeCreatePage } from "@/pages/resume-create";
import { TermsPage } from "@/pages/legal/terms";
import { PrivacyPage } from "@/pages/legal/privacy";
import { SearchPage } from "@/pages/search";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/resume/create" element={<ResumeCreatePage />} />

        <Route path="/search" element={<SearchPage />} />

        {/* Legal */}
        <Route path="/legal/terms" element={<TermsPage />} />
        <Route path="/legal/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
