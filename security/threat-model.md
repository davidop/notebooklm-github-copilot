# Threat model

## Assets

- Google account session used by NotebookLM MCP.
- Local Chrome profile created by NotebookLM MCP.
- NotebookLM notebooks and uploaded source documents.
- Repository code and configuration.
- Customer or internal documentation used for grounded answers.

## Trust boundaries

```text
VS Code / Copilot Chat
  -> local MCP process
  -> local browser automation
  -> Google NotebookLM
  -> uploaded source documents
```

## Key risks

| Risk | Impact | Mitigation |
|---|---|---|
| Sensitive documents uploaded to NotebookLM | Data exposure | Define allowed data classes and approval workflow |
| Local browser profile compromise | Unauthorized notebook access | Use disk encryption, endpoint protection, and device compliance |
| MCP package supply-chain issue | Local code execution | Pin versions, review releases, use trusted registries |
| Hallucinated or unsupported output | Wrong implementation decision | Require citations and evidence checks |
| Wrong notebook selected | Incorrect requirements | Ask Copilot to confirm notebook identity before research |
| UI automation breakage | Tool instability | Use smoke tests and version pinning |

## Minimum controls

- Do not commit credentials, cookies, browser profiles, or `.env` files.
- Do not upload secrets to NotebookLM.
- Use named Google accounts, not shared accounts.
- Keep endpoint protection enabled.
- Pin package versions for production use.
- Require source citations for requirements and decisions.
