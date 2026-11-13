import React from "react";
import ParticipantPreview from "./components/ParticipantPreview";
import EducationPage from "./components/EducationPage";
import WizardContainer from "./components/campaign/wizard/WizardContainer";

function App() {
  const path = window.location.pathname;

  // Education page
  if (path === "/education") {
    return <EducationPage />;
  }

  // Campaign Creation Wizard
  if (path === "/campaign") {
    return <WizardContainer />;
  }

  // Default page
  return <ParticipantPreview />;
}

export default App;