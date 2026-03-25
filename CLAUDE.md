# FlowBoost -- Claude Code Context

## Issue Tracking

Issues are tracked on **GitHub** (not Linear):
- Upstream: https://github.com/johrld/flowboost/issues
- Fork: https://github.com/MagnusHL/flowboost/issues

## Stack

- **Backend**: Fastify (TypeScript, ESM), file-based JSON store, Sharp
- **Frontend**: Next.js 16, React 19, Shadcn/UI, TipTap Editor
- **AI**: Claude Agent SDK (`@anthropic-ai/claude-agent-sdk`), Google Imagen 4
- **Deployment**: Docker Compose (dev), Dokploy (prod)

## Conventions

- Commit messages: Conventional Commits (`<type>(<scope>): <description>`)
- Language: All code, comments, commits, and documentation in English
- Branch model: `main` <- feature branches (fork workflow with upstream)
