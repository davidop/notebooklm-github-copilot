# Prompt Used

Open Copilot Chat in Agent mode with the `notebooklm` MCP tools enabled, then paste this prompt:

```text
Use NotebookLM. In the "platform-architecture" notebook, answer with citations:
1. What prior decisions exist related to API gateways or API management?
2. What architecture principles apply to API exposure and security?
3. What constraints exist around third-party SaaS services in our platform?

Then generate an ADR titled "ADR-012: API Gateway Selection for Microservices Platform" using the template at templates/adr-template.md.

The decision context is: We need to expose 15 internal microservices through a unified API layer. The options are:
- Option A: Azure API Management (APIM) Premium tier
- Option B: Custom Nginx-based gateway on AKS
- Option C: AWS API Gateway (hybrid consideration)

Return: complete ADR draft, source citations, and open questions.
```
