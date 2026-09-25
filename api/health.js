export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  return res.status(200).json({
    status: "healthy",
    service: "CapitalPulse AI Loan Default Prediction API",
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
  });
}
