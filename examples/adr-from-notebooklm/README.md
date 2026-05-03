# Example: ADR from NotebookLM

This example shows how to use GitHub Copilot + NotebookLM MCP to generate an Architecture Decision Record grounded in prior decisions and constraints stored in NotebookLM.

## Scenario

A team is deciding whether to use Azure API Management or a custom API gateway for a new microservices platform. They have existing architecture principles and prior gateway decisions in NotebookLM.

## Files

- [prompt.md](prompt.md) — The Copilot Chat prompt used
- [expected-output.md](expected-output.md) — Example of the expected output

## What this demonstrates

- Querying NotebookLM for prior decisions before making a new one
- Grounding an ADR in source documents with citations
- Using the ADR template from `templates/adr-template.md`
