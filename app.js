const FEATURE_NAMES = [
  "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10",
  "V11", "V12", "V13", "V14", "V15", "V16", "V17", "V18", "V19", "V20",
  "V21", "V22", "V23", "V24", "V25", "V26", "V27", "V28"
];

const SAMPLE_TRANSACTIONS = [
  {
    label: "Dataset row 0 - legitimate",
    source: "Notebook head() sample",
    actual: "Legitimate",
    values: {
      Time: 0, Amount: 149.62,
      V1: -1.359807, V2: -0.072781, V3: 2.536347, V4: 1.378155, V5: -0.338321,
      V6: 0.462388, V7: 0.239599, V8: 0.098698, V9: 0.363787, V10: 0.090794,
      V11: -0.5516, V12: -0.617801, V13: -0.99139, V14: -0.311169, V15: 1.468177,
      V16: -0.470401, V17: 0.207971, V18: 0.025791, V19: 0.403993, V20: 0.251412,
      V21: -0.018307, V22: 0.277838, V23: -0.110474, V24: 0.066928, V25: 0.128539,
      V26: -0.189115, V27: 0.133558, V28: -0.021053
    }
  },
  {
    label: "Dataset row 1 - legitimate",
    source: "Notebook head() sample",
    actual: "Legitimate",
    values: {
      Time: 0, Amount: 2.69,
      V1: 1.191857, V2: 0.266151, V3: 0.16648, V4: 0.448154, V5: 0.060018,
      V6: -0.082361, V7: -0.078803, V8: 0.085102, V9: -0.255425, V10: -0.166974,
      V11: 1.612727, V12: 1.065235, V13: 0.489095, V14: -0.143772, V15: 0.635558,
      V16: 0.463917, V17: -0.114805, V18: -0.183361, V19: -0.145783, V20: -0.069083,
      V21: -0.225775, V22: -0.638672, V23: 0.101288, V24: -0.339846, V25: 0.16717,
      V26: 0.125895, V27: -0.008983, V28: 0.014724
    }
  },
  {
    label: "Dataset row 2 - legitimate",
    source: "Notebook head() sample",
    actual: "Legitimate",
    values: {
      Time: 1, Amount: 378.66,
      V1: -1.358354, V2: -1.340163, V3: 1.773209, V4: 0.37978, V5: -0.503198,
      V6: 1.800499, V7: 0.791461, V8: 0.247676, V9: -1.514654, V10: 0.207643,
      V11: 0.624501, V12: 0.066084, V13: 0.717293, V14: -0.165946, V15: 2.345865,
      V16: -2.890083, V17: 1.109969, V18: -0.121359, V19: -2.261857, V20: 0.52498,
      V21: 0.247998, V22: 0.771679, V23: 0.909412, V24: -0.689281, V25: -0.327642,
      V26: -0.139097, V27: -0.055353, V28: -0.059752
    }
  },
  {
    label: "Dataset fraud row - high risk",
    source: "Public creditcard.csv fraud sample",
    actual: "Fraud",
    values: {
      Time: 406, Amount: 0,
      V1: -2.312227, V2: 1.951992, V3: -1.609851, V4: 3.997906, V5: -0.522188,
      V6: -1.426545, V7: -2.537387, V8: 1.391657, V9: -2.770089, V10: -2.772272,
      V11: 3.202033, V12: -2.899907, V13: -0.595222, V14: -4.289254, V15: 0.389724,
      V16: -1.140747, V17: -2.830056, V18: -0.016822, V19: 0.416956, V20: 0.126911,
      V21: 0.517232, V22: -0.035049, V23: -0.465211, V24: 0.320198, V25: 0.044519,
      V26: 0.17784, V27: 0.261145, V28: -0.143276
    }
  },
  {
    label: "High-risk stress test",
    source: "Demo-only scenario",
    actual: "Unlabeled",
    values: {
      Time: 82143, Amount: 1499.25,
      V1: -3.05, V2: 2.55, V3: -3.8, V4: 5.1, V5: -1.4,
      V6: -1.9, V7: -3.2, V8: 1.2, V9: -2.6, V10: -5.2,
      V11: 4.7, V12: -6.1, V13: -0.8, V14: -8.4, V15: 0.2,
      V16: -4.2, V17: -6.8, V18: -1.6, V19: 0.5, V20: 0.9,
      V21: 0.6, V22: -0.4, V23: -0.2, V24: -0.1, V25: 0.4,
      V26: 0.1, V27: 0.2, V28: -0.1
    }
  }
];

const MODEL_RESULTS = [
  { name: "Deep Neural Network", metric: "Accuracy", value: 99.45 },
  { name: "XGBoost Ensemble", metric: "Accuracy", value: 99.88 },
  { name: "Fraud Agent", metric: "Accuracy", value: 99.82 }
];

const SCORE_WEIGHTS = {
  V14: -0.9,
  V12: -0.55,
  V10: -0.55,
  V17: -0.45,
  V16: -0.25,
  V3: -0.18,
  V7: -0.18,
  V11: 0.33,
  V4: 0.28,
  V2: 0.16,
  V21: 0.08,
  Amount: 0.0002
};

const els = {
  coreInputs: document.querySelector("#coreInputs"),
  featureInputs: document.querySelector("#featureInputs"),
  form: document.querySelector("#transactionForm"),
  sampleSelect: document.querySelector("#sampleSelect"),
  loadSample: document.querySelector("#loadSample"),
  resetForm: document.querySelector("#resetForm"),
  riskTitle: document.querySelector("#riskTitle"),
  riskChip: document.querySelector("#riskChip"),
  riskFill: document.querySelector("#riskFill"),
  riskScore: document.querySelector("#riskScore"),
  riskDescription: document.querySelector("#riskDescription"),
  predictedClass: document.querySelector("#predictedClass"),
  reviewAction: document.querySelector("#reviewAction"),
  actualClass: document.querySelector("#actualClass"),
  driverList: document.querySelector("#driverList"),
  modelBars: document.querySelector("#modelBars")
};

function createInput(name, parent) {
  const label = document.createElement("label");
  label.textContent = name;

  const input = document.createElement("input");
  input.type = "number";
  input.id = name;
  input.name = name;
  input.step = "0.000001";
  input.inputMode = "decimal";
  input.value = "0";
  input.required = true;

  label.appendChild(input);
  parent.appendChild(label);
}

function setupInputs() {
  ["Time", "Amount"].forEach((name) => createInput(name, els.coreInputs));
  FEATURE_NAMES.forEach((name) => createInput(name, els.featureInputs));
}

function setupSamples() {
  SAMPLE_TRANSACTIONS.forEach((sample, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = `${sample.label} (${sample.source})`;
    els.sampleSelect.appendChild(option);
  });
}

function setupModelBars() {
  MODEL_RESULTS.forEach((model) => {
    const item = document.createElement("div");
    item.className = "model-metric";
    item.innerHTML = `
      <header>
        <strong>${model.name}</strong>
        <span>${model.metric}: ${model.value.toFixed(2)}%</span>
      </header>
      <div class="bar"><span style="width: ${model.value}%"></span></div>
    `;
    els.modelBars.appendChild(item);
  });
}

function loadSample(index = Number(els.sampleSelect.value)) {
  const sample = SAMPLE_TRANSACTIONS[index];
  const values = sample.values;

  ["Time", "Amount", ...FEATURE_NAMES].forEach((name) => {
    const input = document.querySelector(`#${name}`);
    input.value = values[name] ?? 0;
  });

  analyzeTransaction(sample);
}

function getFormValues() {
  return ["Time", "Amount", ...FEATURE_NAMES].reduce((acc, name) => {
    const input = document.querySelector(`#${name}`);
    acc[name] = Number(input.value || 0);
    return acc;
  }, {});
}

function sigmoid(value) {
  return 1 / (1 + Math.exp(-value));
}

function scoreTransaction(values) {
  const contributions = Object.entries(SCORE_WEIGHTS).map(([feature, weight]) => {
    const value = Number(values[feature] || 0);
    return {
      feature,
      value,
      contribution: value * weight
    };
  });

  const logit = contributions.reduce((sum, item) => sum + item.contribution, -3.2);
  const probability = Math.max(0.001, Math.min(0.999, sigmoid(logit)));
  const drivers = contributions
    .sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution))
    .slice(0, 5);

  return { probability, drivers };
}

function classify(probability) {
  if (probability >= 0.75) {
    return {
      chip: "High risk",
      chipClass: "is-high",
      title: "Likely fraud",
      predicted: "Fraud",
      action: "Block and review",
      description: "The transaction pattern is close to known fraud signals in the demo scoring model."
    };
  }

  if (probability >= 0.35) {
    return {
      chip: "Review",
      chipClass: "is-review",
      title: "Needs review",
      predicted: "Suspicious",
      action: "Manual review",
      description: "The score is not decisive enough for an automatic approval."
    };
  }

  return {
    chip: "Low risk",
    chipClass: "is-low",
    title: "Likely legitimate",
    predicted: "Legitimate",
    action: "Approve",
    description: "The transaction pattern is closer to legitimate examples in the demo scoring model."
  };
}

function renderDrivers(drivers) {
  els.driverList.innerHTML = "";
  drivers.forEach((driver) => {
    const item = document.createElement("li");
    const impact = driver.contribution >= 0 ? "raises risk" : "lowers risk";
    item.innerHTML = `
      <span>${driver.feature} = ${driver.value.toFixed(4)}</span>
      <strong>${impact}</strong>
    `;
    els.driverList.appendChild(item);
  });
}

function analyzeTransaction(sample = null) {
  const values = getFormValues();
  const result = scoreTransaction(values);
  const state = classify(result.probability);
  const riskPercent = result.probability * 100;

  els.riskTitle.textContent = state.title;
  els.riskChip.textContent = state.chip;
  els.riskChip.className = `risk-chip ${state.chipClass}`;
  els.riskFill.style.width = `${riskPercent}%`;
  els.riskScore.textContent = `${riskPercent.toFixed(1)}%`;
  els.riskDescription.textContent = state.description;
  els.predictedClass.textContent = state.predicted;
  els.reviewAction.textContent = state.action;
  els.actualClass.textContent = sample ? sample.actual : "Manual entry";

  renderDrivers(result.drivers);
}

function resetForm() {
  ["Time", "Amount", ...FEATURE_NAMES].forEach((name) => {
    document.querySelector(`#${name}`).value = "0";
  });
  analyzeTransaction({ actual: "Manual entry" });
}

setupInputs();
setupSamples();
setupModelBars();
loadSample(0);

els.loadSample.addEventListener("click", () => loadSample());
els.sampleSelect.addEventListener("change", () => loadSample());
els.resetForm.addEventListener("click", resetForm);
els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  analyzeTransaction();
});
