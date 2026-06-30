# Credit Card Fraud Detection System

A complete Fraud Detection Agent built for identifying fraudulent credit-card transactions. The project follows an Agentic AI style: the system observes transaction features from a banking stream, processes them through two machine-learning models, and decides whether each transaction should be treated as legitimate or fraudulent.

The solution combines Deep Learning with a Deep Neural Network and Ensemble Learning with XGBoost. A final decision layer merges both model probabilities so the agent can make a more reliable fraud-detection decision than either model alone.

## Team Members

- Muneeb Tahir - SP24-BCS-146
- Ishtiaq Ahmad - SP24-BCS-053
- Abdullah Azhar - SP24-BCS-070
- Rao Zain Ali - SP24-BCS-107

## Live Dashboard

The frontend is a static Vercel dashboard for presenting the project and demonstrating sample transaction checks:

- `index.html` - dashboard layout and project sections
- `styles.css` - responsive dashboard styling
- `app.js` - sample transactions, demo score logic, and visual model bars

Open `index.html` directly or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project Objective

Fraud detection is difficult because fraudulent transactions are rare compared with legitimate activity. This project addresses that challenge by training models on a highly imbalanced credit-card dataset, applying resampling techniques, and using an agent-style decision layer to improve classification reliability.

The goal of the agent is to maximize fraud detection while minimizing false alarms.

## Dataset

The project uses the Credit Card Fraud Detection dataset from Kaggle, provided by the ULB Machine Learning Group.

| Item | Value |
| --- | ---: |
| Total transactions | 284,807 |
| Legitimate transactions | 284,315 |
| Fraud transactions | 492 |
| Fraud rate | 0.172% |
| Input features | 30 |

The dataset includes:

- `V1` to `V28`: PCA-transformed anonymized features used to protect sensitive customer information.
- `Time`: elapsed seconds from the first transaction in the dataset.
- `Amount`: transaction amount in euros.
- `Class`: target label where `0` means legitimate and `1` means fraud.

Additional normalized features, including `Amount_Scaled` and `Time_Scaled`, are used during model training to improve learning performance.

The full CSV is not committed because it is large. Place `creditcard.csv` in a local `data/` directory or update the notebook path:

```python
df = pd.read_csv("data/creditcard.csv")
```

## Core Features

- Fraud Detection Agent for classifying transactions as legitimate or fraudulent.
- Agentic AI workflow based on perception, processing, and decision-making.
- Deep Neural Network model for learning complex hidden fraud patterns.
- XGBoost ensemble model for strong structured-data performance.
- Weighted decision layer that combines both models into a final fraud probability.
- Resampling strategy for handling extreme class imbalance.
- Feature scaling for transaction amount and elapsed time.
- More than 10 visualizations for dataset analysis, feature behavior, model comparison, ROC curves, and confusion matrices.
- Interactive dashboard for sample transaction testing and project explanation.

## Methodology

### Deep Neural Network

The Deep Neural Network is a four-layer fully connected architecture:

| Layer | Size | Activation |
| --- | ---: | --- |
| Input hidden layer | 64 | ReLU |
| Hidden layer | 32 | ReLU |
| Hidden layer | 16 | ReLU |
| Output layer | 1 | Sigmoid |

Batch Normalization and Dropout are applied to reduce overfitting. The model is trained with the Adam optimizer using a learning rate of `0.001`, and Binary Cross-Entropy is used as the loss function.

### XGBoost Ensemble

The XGBoost model is a Gradient Boosted Decision Tree classifier. It uses `200` estimators with a maximum tree depth of `6`. XGBoost builds trees sequentially, where each new tree helps correct the errors of earlier trees, making it effective for structured tabular fraud data.

### Agent Decision Layer

The final Fraud Detection Agent combines model outputs with weighted averaging:

```text
Final probability = (0.40 * DNN probability) + (0.60 * XGBoost probability)
```

A threshold of `0.5` is used for the final decision:

- probability `< 0.5` -> legitimate transaction
- probability `>= 0.5` -> fraudulent transaction

## Agentic AI Framework

| Agent Component | Project Meaning |
| --- | --- |
| Environment | Banking transaction stream |
| State / Observation | 30 transaction features from the dataset |
| Policy / Brain | Combined DNN and XGBoost decision system |
| Action | Classify transaction as fraud or legitimate |
| Goal | Detect fraud accurately while reducing false alarms |

The agent follows this workflow:

```text
Transaction arrives -> Features are observed -> Models process the data -> Final decision is generated
```

## Results Summary

Project report results show that the combined agent performs best overall:

| Model | Approx. Accuracy | Approx. F1-score | ROC-AUC |
| --- | ---: | ---: | ---: |
| Deep Neural Network | 92% | 92% | 0.97 |
| XGBoost Ensemble | 94% | 94% | 0.98 |
| Fraud Detection Agent | 95% | 95% | > 0.98 |

These results show that combining Deep Learning and Ensemble Learning improves overall fraud detection performance.

## Repository Structure

```text
.
|-- app.js
|-- index.html
|-- styles.css
|-- notebooks/
|   `-- ML-project.ipynb
|-- README.md
`-- vercel.json
```

## How It Works

1. Load the Kaggle credit-card fraud dataset.
2. Inspect dataset shape, class balance, missing values, and feature types.
3. Visualize class distribution, transaction amount behavior, correlations, feature importance, time patterns, confusion matrices, ROC curves, and model comparisons.
4. Scale `Amount` and `Time` into normalized training features.
5. Apply resampling to reduce the impact of the extreme fraud-class imbalance.
6. Split data into training and testing sets.
7. Train the Deep Neural Network.
8. Train the XGBoost classifier.
9. Combine both model probabilities through the Agent Decision Layer.
10. Classify transactions as legitimate or fraud and evaluate the final results.

## Dashboard Demo Notes

The deployed dashboard is a frontend companion for the notebook and project report. Because the notebook does not currently export a trained production model artifact, the browser tester uses a transparent demo scoring function to simulate the agent decision experience.

For production inference, export the trained DNN, XGBoost model, and scalers from the notebook, then connect the dashboard to a Python or serverless API endpoint.

## Tech Stack

- Python
- Pandas and NumPy
- Matplotlib and Seaborn
- Scikit-learn
- TensorFlow / Keras
- XGBoost
- HTML, CSS, JavaScript
- Vercel for static dashboard deployment

## Deployment

This project is ready for Vercel static hosting. No build step is required.

```bash
vercel deploy
vercel deploy --prod
```

## Future Improvements

- Add real-time transaction stream processing.
- Use Reinforcement Learning for adaptive threshold adjustment.
- Add Explainable AI techniques such as SHAP values for model interpretability.
- Export trained model artifacts for production inference.
- Add a backend API for live fraud checks from the dashboard.
