import React from 'react';
import { TTabConfig } from "../../accessories/tabs/types";

export const patientDetailTabs: TTabConfig = [
  { label: "Summary", content: (<span>Content 1</span>) },
  { label: "Triage", content: (<span>Content 2</span>) },
  { label: "Admission", content: (<span>Content 3</span>) },
  { label: "Therapy", content: (<span>Content 4</span>) },
  { label: "Vaccination", content: (<span>Content 5</span>) },
  { label: "Lab Exam", content: (<span>Content 6</span>) },
];