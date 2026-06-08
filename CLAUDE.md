# Portfolio — Instrucciones del proyecto

Portfolio personal de Lucas Demarré. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 4. Deploy en **Vercel** (auto-deploy desde GitHub).

## ⚠️ Workflow de deploy — SIEMPRE preview primero (regla)

**Nunca pushear cambios directo a `main`.** `main` = producción y **está protegida** (branch ruleset: push directo = rechazado). Todo cambio pasa primero por una branch → preview deployment de Vercel → **Pull Request** → merge del PR.

Flujo obligatorio para cualquier cambio:

```bash
# 1. Branch nueva desde main
git checkout main && git pull
git checkout -b feat/<nombre-corto>

# 2. Hacer los cambios, validar local
npm run build          # tiene que pasar sin errores

# 3. Commit + push de la branch (NO main)
git add -A && git commit -m "..."
git push -u origin feat/<nombre-corto>
```

Al pushear la branch, **Vercel crea un Preview Deployment automático** con una URL propia (`lucas-portfolio-git-<branch>-<scope>.vercel.app`). Ahí se revisa el cambio en vivo, sin tocar producción.

```bash
# 4. Una vez revisado el preview, abrir PR y mergearlo (esto dispara el deploy a prod)
gh pr create --base main --head feat/<nombre-corto> --title "..." --body "..."
gh pr merge <n> --squash --delete-branch
```

`git push origin main` directo **falla** (la branch está protegida) — siempre vía PR. El merge del PR es el único paso que toca producción.

**Resumen:** branch → push → revisar preview → **PR → merge PR** → prod.

## Protección de branch (ACTIVA)

`main` tiene un **branch ruleset** activo ("require a pull request before merging"): no se puede pushear directo, todo entra por PR. Por eso el paso 4 usa `gh pr ...`. Si un `git push origin main` devuelve *"push declined due to repository rule violations"*, es esto: armá branch + PR.

## Stack / convenciones

- **i18n** propio vía React Context (`lib/i18n.tsx`), bilingüe ES/EN.
- **Analytics**: `@vercel/analytics` + `@vercel/speed-insights` (componentes en `app/layout.tsx`). Hay que tenerlos habilitados en el dashboard de Vercel del proyecto.
- **Logos**: `public/personal/` = logo personal (crown-K). `public/krownsoft/` = logo oficial de KrownSoft (solo para la empresa y sus productos).
- **Confidencialidad**: nunca publicar datos de clientes reales, teléfonos, API keys ni refs internas. Los proyectos de cliente van anonimizados por rubro.
- **RTK**: prefijar comandos de shell con `rtk` (regla global).
