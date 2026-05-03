# Prompt Used

```text
Use NotebookLM. In the "vendor-api-docs" notebook, answer with citations:
1. What are the available API endpoints for the Orders resource?
2. What authentication method is required?
3. What are the request and response schemas for POST /orders and GET /orders/{id}?
4. What error codes and retry behaviour does the vendor document?

Then generate a Python client class that:
- Uses httpx for HTTP calls
- Implements typed Pydantic models for request/response
- Handles authentication as documented
- Implements retry logic as documented
- Includes docstrings referencing the vendor documentation

Return: Python code, citations to source docs, and any undocumented behaviour I should clarify with the vendor.
```
