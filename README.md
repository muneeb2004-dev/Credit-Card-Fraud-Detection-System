# Credit Card Fraud Detection System

An end-to-end machine-learning project for detecting fraudulent credit-card transactions. The notebook explores the public `creditcard.csv` dataset, handles class imbalance, trains multiple models, and combines their predictions into a weighted fraud-detection agent. This repository also includes a Vercel-ready dashboard for demonstrating the project and testing sample transactions.

> Note: the current notebook is for credit-card transaction fraud, not telephone scam detection. The dataset features are anonymized transaction fields (`V1`-`V28`) plus `Time`, `Amount`, and `Class`.

## Live Dashboard

The frontend is a static dashboard in the repository root:

- `index.html` - dashboard layout
- `styles.css` - responsive UI styling
- `app.js` - sample data, demo scoring, and chart rendering

Open `index.html` directly or serve the folder locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project Highlights

- Exploratory data analysis for class imbalance, transaction amounts, correlations, and fraud patterns over time.
- Data preprocessing with `StandardScaler` for `Amount` and `Time`.
- Oversampling strategy to balance 10,000 legitimate and 10,000 fraud transactions for training.
- Deep Neural Network with dense layers, batch normalization, dropout, early stopping, and learning-rate reduction.
- XGBoost ensemble model for strong tabular performance.
- Weighted final agent that combines 40% DNN probability and 60% XGBoost probability.
- Interactive dashboard with sample transactions and a browser-side demo risk score.

## Dataset

The project uses the well-known credit-card fraud dataset with 284,807 transactions:

| Class | Count |
| --- | ---: |
| Legitimate | 284,315 |
| Fraudulent | 492 |
| Fraud rate | 0.173% |

The full CSV is not committed because it is large. Download `creditcard.csv` from the dataset source used in your notebook and place it in a local `data/` directory, or update the notebook path:

```python
df = pd.read_csv("data/creditcard.csv")
```

## Model Results

Saved notebook results:

| Model | Accuracy | Precision | Recall | F1-score | ROC-AUC |
| --- | ---: | ---: | ---: | ---: | ---: |
| Deep Neural Network | 0.99450 | 0.992530 | 0.9965 | 0.994511 | 0.999650 |
| XGBoost Ensemble | 0.99875 | 0.997506 | 1.0000 | 0.998752 | 0.999784 |
| Fraud Agent (Combined) | 0.99825 | 0.996512 | 1.0000 | 0.998253 | 0.999741 |

## Repository Structure

```text
.
├── app.js
├── index.html
├── styles.css
├── notebooks/
│   └── ML-project.ipynb
├── README.md
└── vercel.json
```

## How It Works

1. Load `creditcard.csv`.
2. Inspect the dataset and verify missing values.
3. Visualize class imbalance, transaction amounts, correlation heatmaps, and time patterns.
4. Scale `Amount` and `Time`.
5. Balance the minority fraud class with oversampling.
6. Split features and target into train/test sets.
7. Train a Deep Neural Network.
8. Train an XGBoost classifier.
9. Combine model probabilities into a weighted fraud agent.
10. Evaluate with classification reports, ROC-AUC, confusion matrices, and model comparison charts.

## Dashboard Demo Notes

The deployed dashboard is a frontend companion for the notebook. Because the notebook does not currently export a trained model artifact, the browser demo uses a transparent risk-scoring simulator based on common fraud-driving anonymized features such as `V14`, `V12`, `V10`, `V17`, `V11`, and `V4`.

For production inference, export the trained model and scaler from the notebook, then connect the dashboard to an API endpoint.

## Tech Stack

- Python
- Pandas, NumPy, Matplotlib, Seaborn
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

The `vercel.json` file enables clean static hosting defaults.

## Future Improvements

- Export the trained DNN, XGBoost model, and scalers as versioned artifacts.
- Add a Python or serverless API for real model inference.
- Add automated tests for preprocessing and prediction consistency.
- Add dataset download instructions or a reproducible data pipeline.
- Extend the project to telephone scam detection with a phone-call or telecom-specific dataset.
