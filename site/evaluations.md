# Evaluations

This page explains how to evaluate the quality of NotebookLM + GitHub Copilot outputs and track improvement over time.

## Why evaluate?

AI-generated outputs vary in quality depending on:
- The quality and completeness of sources in the notebook
- The specificity of the prompt
- The version of the MCP server and Copilot model

Regular evaluation helps you identify regressions, improve prompts, and build trust with stakeholders.

## Evaluation documents

All evaluation resources are in the `evals/` folder.

Browse the [evals/ folder](../evals/).

## Evaluation approaches

### Citation accuracy

Check that every cited source actually supports the claim in the output. Use the source comparison recipe to automate this check.

### Completeness

Compare the output against a known-good baseline or the source document directly. Are all key requirements reflected?

### Consistency

Run the same prompt twice with different phrasings. Are the results consistent? Large divergence indicates a prompt quality issue.

### Hallucination detection

Ask a question that has a known answer in the sources. Verify the answer and citation match the source exactly.

## Running evaluations

```bash
npm run compare-answers
```

This script runs a set of reference prompts against the configured notebook and compares outputs to baselines. See `scripts/compare-notebook-answers.md` for usage.

## Smoke tests

```bash
npm run smoke-test
```

Runs a lightweight set of end-to-end checks to verify the MCP connection and basic output quality.

## Continuous evaluation

For teams at adoption maturity Level 4, integrate evaluations into CI using the `validate.yml` workflow.
