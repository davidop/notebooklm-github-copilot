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

## Novedades en v0.3

v0.3 convierte el repositorio en un kit de adopción enterprise, no sólo en un starter.

| Área | Novedad |
|---|---|
| **Seguridad** | Guía de endurecimiento, modelo de amenazas MCP, seguridad del perfil del navegador |
| **Privacidad** | Guía de tratamiento de datos, consideraciones de cumplimiento |
| **Gobierno** | Plantillas de políticas, política de fuentes aprobadas, libro de jugadas de adopción por equipos |
| **Flujos multi-notebook** | Consultas cruzadas entre cuadernos, triangulación de fuentes, resolución de conflictos |
| **Paquetes de prompts por equipo** | Prompts listos para usar: ingeniería de plataforma, arquitectura cloud, preventa, seguridad, gestión de entregas, habilitación de desarrolladores |
| **Marco de evaluación** | Rúbricas de puntuación para respuestas de arquitectura, propuestas de preventa y generación de código |
| **Listas de verificación** | Checklists operativos para aprobación de servidores MCP, fuentes y despliegue enterprise |

---

## Adopción enterprise

Para organizaciones que despliegan esto en múltiples desarrolladores:

1. Lee el [libro de jugadas de adopción por equipos](governance/team-adoption-playbook.md).
2. Completa la [lista de verificación de seguridad para despliegue enterprise](checklists/security/enterprise-rollout-security-checklist.md).
3. Adapta las [plantillas de gobierno](governance/) a los requisitos de tu organización.
4. Forma a los desarrolladores sobre [tratamiento de datos y privacidad](docs/privacy-and-data-handling.md).

---

## Endurecimiento de seguridad

- [Guía de endurecimiento de seguridad](docs/security-hardening.md)
- [Privacidad y tratamiento de datos](docs/privacy-and-data-handling.md)
- [Consideraciones de cumplimiento normativo](docs/compliance-considerations.md)
- [Seguridad del perfil del navegador](docs/browser-profile-security.md)
- [Modelo de amenazas MCP](docs/mcp-threat-model.md)

---

## Gobierno y políticas

Plantillas de políticas genéricas y reutilizables para equipos enterprise:

- [Política de ingeniería asistida por IA](governance/ai-assisted-engineering-policy.md)
- [Política de fuentes aprobadas](governance/approved-sources-policy.md)
- [Política de uso de NotebookLM](governance/notebooklm-usage-policy.md)
- [Gobierno de servidores MCP](governance/mcp-server-governance.md)
- [Libro de jugadas de adopción por equipos](governance/team-adoption-playbook.md)

---

## Flujos multi-notebook

Trabaja con varios cuadernos de NotebookLM especializados en un único flujo de trabajo:

- [Guía de flujos multi-notebook](docs/multi-notebook-workflows.md)
- [Investigación multi-notebook](recipes/multi-notebook-research.md)
- [Triangulación de fuentes](recipes/source-triangulation.md)
- [Resolución de conflictos entre fuentes](recipes/conflict-resolution-between-sources.md)

---

## Paquetes de prompts por equipo

| Equipo | Paquete |
|---|---|
| Ingeniería de plataforma | [prompt-packs/team/platform-engineering.md](prompt-packs/team/platform-engineering.md) |
| Arquitectura cloud | [prompt-packs/team/cloud-architecture.md](prompt-packs/team/cloud-architecture.md) |
| Preventa | [prompt-packs/team/presales.md](prompt-packs/team/presales.md) |
| Seguridad | [prompt-packs/team/security.md](prompt-packs/team/security.md) |
| Gestión de entregas | [prompt-packs/team/delivery-management.md](prompt-packs/team/delivery-management.md) |
| Habilitación de desarrolladores | [prompt-packs/team/developer-enablement.md](prompt-packs/team/developer-enablement.md) |

---

## Evaluación de calidad

Rúbricas de puntuación para revisar la calidad de los outputs generados con asistencia de IA:

- [Tarjeta de puntuación de fundamentación en fuentes](evals/source-grounding-scorecard.md)
- [Evaluación de respuestas de arquitectura](evals/architecture-answer-evaluation.md)
- [Evaluación de propuestas de preventa](evals/presales-output-evaluation.md)
- [Evaluación de generación de código](evals/code-generation-from-docs-evaluation.md)

---

## Novedades en v0.4

v0.4 convierte el repositorio en un producto listo para demostrar, configurar y adoptar en equipo.

| Área | Novedad |
|---|---|
| **Asistente de configuración** | `npm run setup:wizard` — genera configuración MCP para VS Code, OpenCode, Cursor o clientes genéricos |
| **Generador de configuración** | Comandos no interactivos: `setup:vscode`, `setup:opencode`, `setup:cursor` |
| **Comando doctor** | `npm run doctor` — comprueba Node.js, npm, Chrome, archivos de configuración y scripts |
| **Kit de demo** | Scripts de 2, 5 y 15 minutos, salidas de ejemplo, checklist de grabación en `demo/` |
| **Recetas de integración** | Flujos de trabajo para GitHub Issues y Azure DevOps en `integrations/` |
| **Fuentes de ejemplo** | Documentos ficticios y seguros para demos en `sample-sources/` |
| **Esquemas de salida** | Definiciones JSON Schema para ADRs, backlog, registros de riesgo y propuestas |
| **Prompts de formato de salida** | Paquetes de prompts estructurados en `prompt-packs/output-formats/` |
| **Modelo de madurez de adopción** | Marco de 5 niveles en `docs/adoption-maturity-model.md` |
| **Documentación GitHub Pages** | Sitio estático en `site/` con `_config.yml` |
| **Validación mejorada** | `check:schemas`, `check:site` añadidos a `check:repo` |

---

## Asistente de configuración

El asistente de configuración genera los archivos de configuración MCP sin editar JSON manualmente:

```bash
npm run setup:wizard                                     # interactivo
npm run setup:vscode                                     # VS Code / GitHub Copilot
npm run setup:opencode                                   # OpenCode
npm run setup:cursor                                     # Cursor
npm run setup:wizard -- --client vscode --version 0.1.0 # versión fijada
```

Consulta [docs/setup-wizard.md](docs/setup-wizard.md) para la documentación completa.

---

## Comando doctor

Comprueba tu entorno local antes de empezar:

```bash
npm run doctor
```

Verifica la versión de Node.js, npm/npx, estructura del repositorio, archivos de configuración, scripts de paquete y detección opcional de Chrome. Proporciona sugerencias de resolución para cada problema.

Consulta [docs/doctor.md](docs/doctor.md) para más detalles.

---

## Kit de demo

Todo lo necesario para grabar una demo sin datos confidenciales:

- [README del kit](demo/README.md) — Descripción general y requisitos previos
- [Script de 2 minutos](demo/demo-script-2-min.md) — Demo de introducción rápida
- [Script de 5 minutos](demo/demo-script-5-min.md) — Demo estándar para equipos
- [Script de 15 minutos](demo/demo-script-15-min.md) — Demo técnica en profundidad
- [Prompts de ejemplo](demo/sample-prompts.md) — Prompts listos para pegar
- [Checklist de grabación](demo/recording-checklist.md) — Guía antes, durante y después de grabar

---

## Fuentes de ejemplo

Documentos ficticios seguros para subir a NotebookLM en demos:

> **Aviso:** Estos archivos son fuentes de demo ficticias y no representan a ningún cliente real.

| Archivo | Descripción |
|---|---|
| [cloud-modernization-brief.md](sample-sources/cloud-modernization-brief.md) | Briefing de modernización cloud ficticio |
| [architecture-principles.md](sample-sources/architecture-principles.md) | Principios de arquitectura ficticios |
| [security-requirements.md](sample-sources/security-requirements.md) | Requisitos de seguridad ficticios |
| [customer-meeting-notes.md](sample-sources/customer-meeting-notes.md) | Notas de reunión ficticias |
| [vendor-implementation-guide.md](sample-sources/vendor-implementation-guide.md) | Guía de proveedor ficticia |
| [previous-proposal-summary.md](sample-sources/previous-proposal-summary.md) | Resumen de propuesta ficticia anterior |

---

## Recetas de integración

Flujos de trabajo basados en prompts para GitHub Issues y Azure DevOps:

**GitHub Issues:**

| Receta | Descripción |
|---|---|
| [Crear issues](integrations/github/recipes/create-issues-from-notebooklm.md) | Convierte salidas de NotebookLM en GitHub Issues |
| [Triaje de issues](integrations/github/recipes/triage-issues-with-notebooklm.md) | Fundamenta el triaje en tu base de conocimiento |
| [Descripción de PR](integrations/github/recipes/generate-pr-description.md) | Genera descripciones de pull request fundamentadas |
| [Notas de versión](integrations/github/recipes/generate-release-notes.md) | Crea notas de versión desde fuentes de NotebookLM |
| [ADR a Issues](integrations/github/recipes/adr-to-github-issues.md) | Convierte ADRs en GitHub Issues trazables |

**Azure DevOps:**

| Receta | Descripción |
|---|---|
| [Work items de notas](integrations/azure-devops/recipes/create-work-items-from-meeting-notes.md) | Crea work items desde notas de reunión |
| [Épicas, características, historias](integrations/azure-devops/recipes/epics-features-user-stories.md) | Genera jerarquía de backlog desde requisitos |
| [Criterios de aceptación](integrations/azure-devops/recipes/generate-acceptance-criteria.md) | Genera criterios de aceptación fundamentados |
| [Planificación de sprint](integrations/azure-devops/recipes/sprint-planning-from-notebooklm.md) | Planifica sprints usando fuentes de NotebookLM |
| [Revisión de riesgos](integrations/azure-devops/recipes/delivery-risk-review.md) | Revisa riesgos de entrega con contexto de NotebookLM |

---

## Esquemas de salida

Definiciones JSON Schema para outputs estructurados de IA:

| Esquema | Descripción |
|---|---|
| [adr.schema.json](schemas/adr.schema.json) | Architecture Decision Record |
| [backlog-items.schema.json](schemas/backlog-items.schema.json) | Elementos de backlog de sprint |
| [risk-register.schema.json](schemas/risk-register.schema.json) | Registro de riesgos |
| [presales-proposal.schema.json](schemas/presales-proposal.schema.json) | Propuesta de preventa |

---

## Modelo de madurez de adopción

Marco de cinco niveles para adoptar NotebookLM + MCP en equipos:

| Nivel | Etapa |
|---|---|
| 0 | Experimentos locales ad hoc |
| 1 | Configuración individual del desarrollador |
| 2 | Prompts y recetas compartidos por el equipo |
| 3 | Despliegue enterprise gobernado |
| 4 | Flujos evaluados y mejorados continuamente |

Consulta [docs/adoption-maturity-model.md](docs/adoption-maturity-model.md) para el modelo completo.

---

## Documentación GitHub Pages

La carpeta `site/` contiene un sitio de documentación estático compatible con GitHub Pages:

- [Inicio rápido](site/getting-started.md)
- [Configuración de clientes](site/clients.md)
- [Resumen de recetas](site/recipes.md)
- [Seguridad](site/security.md)
- [Gobierno](site/governance.md)
- [Preguntas frecuentes](site/faq.md)

---

## Contribuir

Consulta [CONTRIBUTING.md](CONTRIBUTING.md). Las contribuciones son bienvenidas, especialmente nuevas recetas y ejemplos del mundo real.

## Licencia

MIT. Consulta [LICENSE](LICENSE).
