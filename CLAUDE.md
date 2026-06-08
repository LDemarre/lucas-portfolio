# Portfolio — Instrucciones del proyecto

Portfolio personal de Lucas Demarré. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind 4. Deploy en **Vercel** (auto-deploy desde GitHub).

## ⚠️ Workflow de deploy — SIEMPRE preview primero (regla)

**Nunca pushear cambios directo a `main`.** `main` = producción. Todo cambio pasa primero por una branch → preview deployment de Vercel → recién ahí merge a `main`.

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
# 4. Una vez aprobado el preview, merge a main (esto dispara el deploy a prod)
git checkout main
git merge --no-ff feat/<nombre-corto>
git push origin main
git branch -d feat/<nombre-corto>          # limpiar
git push origin --delete feat/<nombre-corto>
```

**Resumen:** branch → push → revisar preview → merge a `main` → prod. El merge a main es el único paso que toca producción.

## Protección de branch (opcional, recomendado)

Para que `main` quede protegida y se *obligue* el flujo de arriba (no se pueda pushear directo), ver `git status` y activar branch protection en GitHub. Está documentado el cómo en el chat / memoria. Para un proyecto de una sola persona es opcional: la regla de arriba alcanza con disciplina.

## Stack / convenciones

- **i18n** propio vía React Context (`lib/i18n.tsx`), bilingüe ES/EN.
- **Analytics**: `@vercel/analytics` + `@vercel/speed-insights` (componentes en `app/layout.tsx`). Hay que tenerlos habilitados en el dashboard de Vercel del proyecto.
- **Logos**: `public/personal/` = logo personal (crown-K). `public/krownsoft/` = logo oficial de KrownSoft (solo para la empresa y sus productos).
- **Confidencialidad**: nunca publicar datos de clientes reales, teléfonos, API keys ni refs internas. Los proyectos de cliente van anonimizados por rubro.
- **RTK**: prefijar comandos de shell con `rtk` (regla global).
