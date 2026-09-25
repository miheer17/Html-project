export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const sampleApps = [
    {
      id: "LN-1001",
      timestamp: "2026-09-25 10:15:20",
      selectedModel: "Logistic Regression",
      prediction: 0,
      predictionLabel: "NO",
      probability: 0.1245,
      probabilityPercentage: 12.45,
      riskLevel: "Low Risk",
      message: "Evaluated by Logistic Regression: Strong financial stability with low default risk. Approval recommended.",
      applicantData: {
        Age: 45, Income: 125000, LoanAmount: 25000, CreditScore: 780,
        MonthsEmployed: 84, NumCreditLines: 4, InterestRate: 6.5, LoanTerm: 36,
        DTIRatio: 0.18, Education: "Master's", EmploymentType: "Full-time",
        MaritalStatus: "Married", HasMortgage: "Yes", HasDependents: "Yes",
        LoanPurpose: "Home", HasCoSigner: "Yes"
      }
    },
    {
      id: "LN-1002",
      timestamp: "2026-09-25 11:20:44",
      selectedModel: "Logistic Regression",
      prediction: 1,
      predictionLabel: "YES",
      probability: 0.7842,
      probabilityPercentage: 78.42,
      riskLevel: "High Risk",
      message: "Evaluated by Logistic Regression: Elevated default risk warning. High-risk protocol required.",
      applicantData: {
        Age: 24, Income: 32000, LoanAmount: 45000, CreditScore: 580,
        MonthsEmployed: 6, NumCreditLines: 7, InterestRate: 18.5, LoanTerm: 60,
        DTIRatio: 0.55, Education: "High School", EmploymentType: "Part-time",
        MaritalStatus: "Single", HasMortgage: "No", HasDependents: "No",
        LoanPurpose: "Other", HasCoSigner: "No"
      }
    },
    {
      id: "LN-1003",
      timestamp: "2026-09-25 12:05:12",
      selectedModel: "Logistic Regression",
      prediction: 0,
      predictionLabel: "NO",
      probability: 0.284,
      probabilityPercentage: 28.4,
      riskLevel: "Medium Risk",
      message: "Evaluated by Logistic Regression: Moderate risk indicators. Underwriting review recommended.",
      applicantData: {
        Age: 36, Income: 75000, LoanAmount: 30000, CreditScore: 690,
        MonthsEmployed: 48, NumCreditLines: 3, InterestRate: 10.2, LoanTerm: 48,
        DTIRatio: 0.32, Education: "Bachelor's", EmploymentType: "Full-time",
        MaritalStatus: "Single", HasMortgage: "Yes", HasDependents: "No",
        LoanPurpose: "Auto", HasCoSigner: "No"
      }
    },
    {
      id: "LN-1004",
      timestamp: "2026-09-25 13:40:05",
      selectedModel: "Logistic Regression",
      prediction: 0,
      predictionLabel: "NO",
      probability: 0.089,
      probabilityPercentage: 8.9,
      riskLevel: "Low Risk",
      message: "Evaluated by Logistic Regression: Strong financial stability with low default risk. Approval recommended.",
      applicantData: {
        Age: 52, Income: 160000, LoanAmount: 80000, CreditScore: 810,
        MonthsEmployed: 120, NumCreditLines: 2, InterestRate: 5.4, LoanTerm: 36,
        DTIRatio: 0.15, Education: "PhD", EmploymentType: "Self-employed",
        MaritalStatus: "Married", HasMortgage: "Yes", HasDependents: "Yes",
        LoanPurpose: "Business", HasCoSigner: "Yes"
      }
    },
    {
      id: "LN-1005",
      timestamp: "2026-09-25 14:18:30",
      selectedModel: "Logistic Regression",
      prediction: 1,
      predictionLabel: "YES",
      probability: 0.621,
      probabilityPercentage: 62.1,
      riskLevel: "High Risk",
      message: "Evaluated by Logistic Regression: Elevated default risk warning. High-risk protocol required.",
      applicantData: {
        Age: 29, Income: 42000, LoanAmount: 35000, CreditScore: 610,
        MonthsEmployed: 14, NumCreditLines: 5, InterestRate: 14.8, LoanTerm: 48,
        DTIRatio: 0.44, Education: "Bachelor's", EmploymentType: "Unemployed",
        MaritalStatus: "Divorced", HasMortgage: "No", HasDependents: "Yes",
        LoanPurpose: "Auto", HasCoSigner: "No"
      }
    }
  ];

  return res.status(200).json({
    totalApplications: 255352,
    defaultedLoans: 29653,
    nonDefaultedLoans: 225699,
    datasetDefaultRatePct: 11.61,
    defaultRatePct: 11.61,
    riskDistribution: {
      lowRisk: 198420,
      mediumRisk: 38210,
      highRisk: 18722
    },
    mlMetrics: {
      "Logistic Regression": { accuracy: 0.6764, precision: 0.2196, recall: 0.6995, f1_score: 0.3343 },
      "Decision Tree": { accuracy: 0.8850, precision: 0.5993, recall: 0.0305, f1_score: 0.0581 },
      "Support Vector Classifier (SVC)": { accuracy: 0.6747, precision: 0.2193, recall: 0.7036, f1_score: 0.3344 },
      "K-Nearest Neighbors (KNN)": { accuracy: 0.8740, precision: 0.3152, recall: 0.0722, f1_score: 0.1174 },
      "Naive Bayes": { accuracy: 0.8847, precision: 0.5408, recall: 0.0502, f1_score: 0.0919 }
    },
    recentApplications: sampleApps
  });
}
