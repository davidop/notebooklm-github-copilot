# Expected Output

---

## API Details from NotebookLM

- Endpoints documented: POST /orders, GET /orders/{id}, GET /orders, DELETE /orders/{id} (Source: api-reference-v2.pdf, §4)
- Authentication: OAuth 2.0 client credentials flow (Source: integration-guide.pdf, §2.1)
- Retry guidance: Retry on 429 and 503 with exponential backoff, max 3 attempts (Source: integration-guide.pdf, §5.3)

---

## Generated Python Client

```python
from __future__ import annotations
import httpx
from pydantic import BaseModel
# ... full typed client implementation
```

*Citations: api-reference-v2.pdf §4, integration-guide.pdf §2.1 and §5.3*

**Undocumented behaviour to clarify:**
- The DELETE endpoint response schema is not documented — confirm whether it returns 204 or a body.
