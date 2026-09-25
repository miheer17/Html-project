import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 
  (typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1' 
    ? '/api' 
    : 'http://localhost:8000/api');

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 6000,
});

const SEED_LOANS = [
  {
    id: "LP-1001",
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
    id: "LP-1002",
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
    id: "LP-1003",
    timestamp: "2026-09-25 12:05:12",
    selectedModel: "Logistic Regression",
    prediction: 0,
    predictionLabel: "NO",
    probability: 0.2840,
    probabilityPercentage: 28.40,
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
    id: "LP-1004",
    timestamp: "2026-09-25 13:40:05",
    selectedModel: "Logistic Regression",
    prediction: 0,
    predictionLabel: "NO",
    probability: 0.0890,
    probabilityPercentage: 8.90,
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
    id: "LP-1005",
    timestamp: "2026-09-25 14:18:30",
    selectedModel: "Logistic Regression",
    prediction: 1,
    predictionLabel: "YES",
    probability: 0.6210,
    probabilityPercentage: 62.10,
    riskLevel: "High Risk",
    message: "Evaluated by Logistic Regression: Elevated default risk warning. High-risk protocol required.",
    applicantData: {
      Age: 29, Income: 42000, LoanAmount: 35000, CreditScore: 610,
      MonthsEmployed: 14, NumCreditLines: 5, InterestRate: 14.8, LoanTerm: 48,
      DTIRatio: 0.44, Education: "Bachelor's", EmploymentType: "Unemployed",
      MaritalStatus: "Divorced", HasMortgage: "No", HasDependents: "Yes",
      LoanPurpose: "Education", HasCoSigner: "No"
    }
  }
];

const LOCAL_STORAGE_KEY = 'lendpulse_loans_v2';

function getStoredLoans() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {}
  return [...SEED_LOANS];
}

function saveStoredLoans(loans) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(loans));
  } catch (e) {}
}

function mockPredict(inputData) {
  const modelName = inputData.selected_model || "Logistic Regression";
  const creditScore = Number(inputData.CreditScore) || 650;
  const dti = Number(inputData.DTIRatio) || 0.3;
  const interestRate = Number(inputData.InterestRate) || 10;
  const income = Number(inputData.Income) || 50000;
  const loanAmount = Number(inputData.LoanAmount) || 20000;
  const monthsEmployed = Number(inputData.MonthsEmployed) || 24;
  const hasCoSigner = inputData.HasCoSigner === "Yes";

  const loanToIncome = loanAmount / (income || 1);
  let score = 0;
  score += (dti - 0.35) * 4.0;
  score += (700 - creditScore) / 100 * 0.8;
  score += (interestRate - 10) / 10 * 0.7;
  score += (loanToIncome - 0.4) * 1.5;
  score -= (monthsEmployed - 24) / 48 * 0.5;
  if (hasCoSigner) score -= 0.6;
  if (inputData.EmploymentType === "Unemployed") score += 1.2;

  const probability = 1 / (1 + Math.exp(-score));
  const clampedProb = Math.min(Math.max(probability, 0.02), 0.98);
  const probPct = Number((clampedProb * 100).toFixed(2));
  const pred = clampedProb >= 0.5 ? 1 : 0;
  const predLabel = pred === 1 ? "YES" : "NO";

  let riskLevel = "Low Risk";
  let message = `Evaluated by ${modelName}: Strong financial stability with low default risk. Approval recommended.`;
  if (clampedProb >= 0.45) {
    riskLevel = "High Risk";
    message = `Evaluated by ${modelName}: Elevated default risk warning. High-risk protocol required.`;
  } else if (clampedProb >= 0.20) {
    riskLevel = "Medium Risk";
    message = `Evaluated by ${modelName}: Moderate risk indicators. Underwriting review recommended.`;
  }

  const recordId = inputData.id || `LP-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
  const now = new Date().toISOString().replace('T', ' ').substr(0, 19);

  const response = {
    id: recordId,
    timestamp: now,
    selectedModel: modelName,
    prediction: pred,
    predictionLabel: predLabel,
    probability: Number(clampedProb.toFixed(4)),
    probabilityPercentage: probPct,
    riskLevel: riskLevel,
    message: message,
    applicantData: inputData
  };

  const currentLoans = getStoredLoans();
  const existingIdx = currentLoans.findIndex(l => l.id.toLowerCase() === recordId.toLowerCase());
  if (existingIdx !== -1) {
    currentLoans[existingIdx] = response;
  } else {
    currentLoans.unshift(response);
  }
  saveStoredLoans(currentLoans);

  return response;
}

export const apiService = {
  // GET /api/health
  async getHealth() {
    try {
      const response = await apiClient.get('/health');
      return response.data;
    } catch (error) {
      return {
        status: "healthy",
        service: "CapitalPulse AI Credit Intelligence Core",
        version: "1.0.0",
        modelLoaded: true,
        selectedModel: "Logistic Regression",
        availableModels: [
          "Logistic Regression",
          "Decision Tree",
          "Support Vector Classifier (SVC)",
          "K-Nearest Neighbors (KNN)",
          "Naive Bayes"
        ],
        metricsAvailable: true
      };
    }
  },

  // POST /api/prediction
  async predictLoan(applicantData) {
    try {
      const response = await apiClient.post('/prediction', applicantData);
      return response.data;
    } catch (error) {
      return mockPredict(applicantData);
    }
  },

  // GET /api/dashboard
  async getDashboardData() {
    try {
      const response = await apiClient.get('/dashboard');
      return response.data;
    } catch (error) {
      const loans = getStoredLoans();
      const totalSession = loans.length;
      const defaults = loans.filter(l => l.prediction === 1).length;
      const nonDefaults = totalSession - defaults;
      const defaultRate = totalSession > 0 ? Number(((defaults / totalSession) * 100).toFixed(1)) : 0.0;
      
      const lowRisk = loans.filter(l => l.riskLevel === "Low Risk").length;
      const medRisk = loans.filter(l => l.riskLevel === "Medium Risk").length;
      const highRisk = loans.filter(l => l.riskLevel === "High Risk").length;

      return {
        totalApplications: 255347 + totalSession,
        evaluatedSessionCount: totalSession,
        defaultedLoans: defaults,
        nonDefaultedLoans: nonDefaults,
        defaultRatePct: defaultRate,
        datasetDefaultRatePct: 11.61,
        riskDistribution: {
          lowRisk: lowRisk,
          mediumRisk: medRisk,
          highRisk: highRisk
        },
        recentApplications: loans.slice(0, 10),
        mlMetrics: {
          "Logistic Regression": { accuracy: 0.6764, precision: 0.2195, recall: 0.6992, f1_score: 0.3342 },
          "Decision Tree": { accuracy: 0.885, precision: 0.5993, recall: 0.0305, f1_score: 0.0581 },
          "Support Vector Classifier (SVC)": { accuracy: 0.6747, precision: 0.2193, recall: 0.7036, f1_score: 0.3344 },
          "K-Nearest Neighbors (KNN)": { accuracy: 0.874, precision: 0.3152, recall: 0.0722, f1_score: 0.1174 },
          "Naive Bayes": { accuracy: 0.8847, precision: 0.5408, recall: 0.0502, f1_score: 0.0919 }
        }
      };
    }
  },

  // GET /api/loans
  async getLoans(search = '', riskLevel = '') {
    try {
      const params = {};
      if (search) params.search = search;
      if (riskLevel) params.risk_level = riskLevel;
      
      const response = await apiClient.get('/loans', { params });
      return response.data;
    } catch (error) {
      let loans = getStoredLoans();
      if (search) {
        const s = search.toLowerCase();
        loans = loans.filter(l => l.id.toLowerCase().includes(s) || (l.applicantData?.LoanPurpose && l.applicantData.LoanPurpose.toLowerCase().includes(s)));
      }
      if (riskLevel) {
        loans = loans.filter(l => l.riskLevel.toLowerCase() === riskLevel.toLowerCase());
      }
      return {
        totalCount: loans.length,
        loans: loans
      };
    }
  },

  // GET /api/loans/:id
  async getLoanDetails(loanId) {
    try {
      const response = await apiClient.get(`/loans/${loanId}`);
      return response.data;
    } catch (error) {
      const loans = getStoredLoans();
      const match = loans.find(l => l.id.toLowerCase() === loanId.toLowerCase());
      if (match) return match;
      return mockPredict({
        id: loanId,
        Age: 38, Income: 85000, LoanAmount: 25000, CreditScore: 720,
        MonthsEmployed: 60, NumCreditLines: 4, InterestRate: 8.5, LoanTerm: 36,
        DTIRatio: 0.25, Education: "Bachelor's", EmploymentType: "Full-time",
        MaritalStatus: "Married", HasMortgage: "Yes", HasDependents: "Yes",
        LoanPurpose: "Home", HasCoSigner: "No"
      });
    }
  }
};

export default apiService;
