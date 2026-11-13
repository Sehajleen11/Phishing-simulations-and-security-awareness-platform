import "./Wizard.css";
import React, { useState } from "react";

import Step1_TemplateSelection from "./Step1_TemplateSelection";
import Step2_TargetSelection from "./Step2_TargetSelection";
import Step3_Scheduling from "./Step3_Scheduling";
import Step4_Preview from "./Step4_Preview";


const WizardContainer = () => {

  const [currentStep, setCurrentStep] = useState(1);

  const [campaignData, setCampaignData] = useState({
    template: null,
    targets: [],
    schedule: {},
    settings: {}
  });


  // Update campaign information from each step
  const updateCampaignData = (stepData) => {

    setCampaignData((prev) => ({
      ...prev,
      ...stepData
    }));

  };


  // Move forward
  const nextStep = () => {

    setCurrentStep((prev) =>
      Math.min(prev + 1, 4)
    );

  };


  // Move backward
  const prevStep = () => {

    setCurrentStep((prev) =>
      Math.max(prev - 1, 1)
    );

  };


  // Render current wizard step
  const renderStep = () => {

    switch (currentStep) {

      case 1:

        return (
          <Step1_TemplateSelection
            data={campaignData}
            updateData={updateCampaignData}
            nextStep={nextStep}
          />
        );


      case 2:

        return (
          <Step2_TargetSelection
            data={campaignData}
            updateData={updateCampaignData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );


      case 3:

        return (
          <Step3_Scheduling
            data={campaignData}
            updateData={updateCampaignData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );


      case 4:

        return (
          <Step4_Preview
            data={campaignData}
            prevStep={prevStep}
          />
        );


      default:

        return null;
    }

  };


  return (

    <div className="wizard-container">

      {/* =========================
          PROGRESS BAR
      ========================== */}

      <div className="progress-bar">


        {/* STEP 1 */}

        <div
          className={`step ${
            currentStep >= 1 ? "active" : ""
          }`}
        >

          <span>1</span>

          <label>
            Template
          </label>

        </div>


        {/* STEP 2 */}

        <div
          className={`step ${
            currentStep >= 2 ? "active" : ""
          }`}
        >

          <span>2</span>

          <label>
            Targets
          </label>

        </div>


        {/* STEP 3 */}

        <div
          className={`step ${
            currentStep >= 3 ? "active" : ""
          }`}
        >

          <span>3</span>

          <label>
            Schedule
          </label>

        </div>


        {/* STEP 4 */}

        <div
          className={`step ${
            currentStep >= 4 ? "active" : ""
          }`}
        >

          <span>4</span>

          <label>
            Preview
          </label>

        </div>

      </div>


      {/* =========================
          CURRENT STEP
      ========================== */}

      {renderStep()}

    </div>

  );

};


export default WizardContainer;