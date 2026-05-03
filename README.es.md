# NotebookLM + GitHub Copilot + MCP

> **GitHub Copilot + NotebookLM + MCP = ingeniería de software con fuentes verificadas, dentro de VS Code.**

Convierte GitHub Copilot en un agente de ingeniería de software basado en fuentes reales, usando NotebookLM como capa de inteligencia documental y MCP como protocolo de integración.

> **Proyecto comunitario no oficial.** No está afiliado con Google, GitHub, Microsoft ni OpenAI.

---

## Qué hace este proyecto

Conecta GitHub Copilot Chat (en VS Code) con Google NotebookLM a través del protocolo MCP. El resultado: Copilot puede consultar tus cuadernos de NotebookLM, obtener respuestas basadas en tus documentos y citar las fuentes, todo desde el editor.

Casos de uso habituales:

- Generar ADRs (Architecture Decision Records) basados en decisiones anteriores.
- Reutilizar propuestas comerciales y responder RFPs citando documentación existente.
- Generar código Bicep o Terraform a partir de especificaciones de arquitectura cargadas en NotebookLM.
- Convertir notas de reuniones en backlogs de sprint.
- Hacer revisiones de arquitectura Azure fundamentadas en documentación real.

---

## Por qué existe

GitHub Copilot es excelente para escribir código. No está diseñado para razonar sobre documentos privados: propuestas de clientes, especificaciones de arquitectura, notas de reuniones o documentación de proveedores.

Claude Code Skills resuelve esto para usuarios de Anthropic. Este proyecto resuelve el mismo problema para usuarios de **GitHub Copilot**, usando **NotebookLM como capa RAG** y **MCP como protocolo de integración**.

---

## Comparación con Claude Code Skills

| Característica | Este proyecto | Claude Code Skills |
|---|---|---|
| **Asistente de IA** | GitHub Copilot | Claude Code |
| **Editor** | VS Code (cualquier plan) | Terminal / cualquier editor |
| **Fundamentación documental** | NotebookLM via MCP | Herramientas RAG de Anthropic |
| **Citas de fuentes** | ✅ via NotebookLM | ✅ |
| **Copilot Business/Enterprise** | ✅ (con política MCP de org) | ❌ |
| **Complejidad de instalación** | Baja (npx + Chrome) | Media |
| **Coste** | Planes Copilot + NotebookLM | Suscripción Claude |

---

## Inicio rápido

**Requisitos previos:** GitHub Copilot activo, VS Code, Node.js 18+, Chrome estable, cuenta de Google con acceso a NotebookLM.

```bash
git clone https://github.com/davidop/notebooklm-github-copilot.git
cd notebooklm-github-copilot
npm install
npm run validate
```

1. Abre el repositorio en VS Code.
2. Abre `.vscode/mcp.json` y haz clic en **Start** en el CodeLens para arrancar el servidor MCP.
3. Abre Copilot Chat → selecciona modo **Agent** → activa las herramientas `notebooklm`.
4. Autentícate la primera vez:
   ```
   Use the NotebookLM MCP server to run setup_auth. Open the browser visibly so I can log in.
   ```
5. Verifica que funciona:
   ```
   Use NotebookLM to list my available notebooks and confirm whether I am authenticated.
   ```

Consulta [docs/setup.md](docs/setup.md) para la guía completa de instalación.

---

## Casos de uso típicos

### Arquitectura

Carga tus especificaciones de arquitectura, restricciones de la plataforma y decisiones anteriores en un cuaderno de NotebookLM. Pide a Copilot que genere diagramas, evalúe opciones o redacte ADRs basándose en esos documentos.

```text
Use NotebookLM. En el cuaderno "arquitectura-azure", responde: ¿qué restricciones de red se definieron para los entornos de producción? Devuelve hallazgos con citas.
```

### Preventa

Carga propuestas anteriores y descripciones de servicios en NotebookLM. Cuando llegue un nuevo RFP, pide a Copilot que identifique casos de uso similares y reutilice el lenguaje aprobado.

```text
Use NotebookLM. En el cuaderno "propuestas", busca proyectos de migración a Azure similares al RFP actual. Devuelve secciones reutilizables con fuentes.
```

### Generación de código

Carga documentación de proveedores o especificaciones técnicas en NotebookLM. Pide a Copilot que genere Bicep, Terraform o código de aplicación alineado con esas especificaciones.

### Documentación

Carga plantillas de documentación y guías de estilo. Pide a Copilot que produzca documentación coherente que reutilice los estándares existentes.

---

## Limitaciones

- **Fragilidad de la automatización del navegador** — `notebooklm-mcp` usa automatización del navegador contra la interfaz de NotebookLM. Los cambios en la UI de Google pueden romperlo hasta que se actualice el paquete.
- **Sin modo offline** — Requiere una sesión activa de Google y conexión a internet.
- **Autenticación por desarrollador** — No existe una cuenta de servicio centralizada para NotebookLM.
- **Límites de NotebookLM** — Los cuadernos tienen límites de número y tamaño de fuentes impuestos por Google.
- **Codespaces** — La autenticación interactiva del navegador funciona mejor desde VS Code local, no desde GitHub Codespaces.

---

## Seguridad y privacidad

- **Nunca subas secretos a NotebookLM.** No cargues claves API, credenciales, cadenas de conexión ni datos personales regulados a Google NotebookLM.
- **La autenticación es local.** El servidor MCP almacena un perfil de Chrome en tu máquina. No se guarda en este repositorio.
- **Se aplican los términos de Google.** Los documentos cargados en NotebookLM están sujetos a los términos de servicio y la política de privacidad de Google.
- **Clasifica los documentos con cuidado.** Solo carga documentos que tu organización haya aprobado para almacenamiento en la nube y procesamiento con IA.

Consulta [SECURITY.md](SECURITY.md) y [security/threat-model.md](security/threat-model.md) para más detalles.

---

## Contribuir

Consulta [CONTRIBUTING.md](CONTRIBUTING.md). Las contribuciones son bienvenidas, especialmente nuevas recetas y ejemplos del mundo real.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
