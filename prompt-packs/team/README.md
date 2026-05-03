# Team Prompt Packs

Team prompt packs provide ready-to-use, copy-paste prompts for common workflows in specific engineering and delivery roles. Each pack is self-contained: it describes the team profile, the NotebookLM sources to prepare, the recommended agent or client, and a set of realistic prompts you can use immediately.

## Who should use this

These packs are for teams adopting `notebooklm-mcp` with GitHub Copilot, OpenCode, or Cursor. If your team has collected knowledge in NotebookLM notebooks—architecture decisions, coding standards, meeting notes, proposals, vendor docs—these packs help you turn that knowledge into grounded, source-cited AI output.

## How to use a pack

1. Open the relevant pack for your team role.
2. Set up the recommended NotebookLM sources.
3. Copy any prompt and paste it into your agent or coding client.
4. Review the quality checklist before sharing output.

Each pack is independent. You do not need to read others first.

## Available packs

| Pack | Description |
|------|-------------|
| [platform-engineering.md](./platform-engineering.md) | IaC generation, ADRs, and platform standards for infrastructure and CI/CD teams |
| [cloud-architecture.md](./cloud-architecture.md) | Architecture reviews, Well-Architected assessments, and ADR generation for cloud architects |
| [presales.md](./presales.md) | RFP analysis, proposal drafting, and capability mapping for solution engineers and bid managers |
| [security.md](./security.md) | Threat modeling, compliance gap analysis, and security reviews for security teams |
| [delivery-management.md](./delivery-management.md) | Meeting notes to backlog, risk identification, and status reporting for delivery and project managers |
| [developer-enablement.md](./developer-enablement.md) | Onboarding guides, coding standards, and API usage examples for developer advocates and DX teams |

## Notes

All prompts use generic, realistic examples. Replace bracketed placeholders like `[module name]` or `[requirement type]` with your own context before running. No real customer data should be added to NotebookLM without confirming that the data is approved for that system.
