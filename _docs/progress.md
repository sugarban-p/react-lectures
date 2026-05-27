# Progress

## 目前狀態

| 項目 | 狀態 |
|------|------|
| 框架 | Next.js 16.2.6 + React 19.2.4 |
| 語言 | TypeScript (strict mode) |
| 樣式 | Tailwind CSS v4 + `@tailwindcss/postcss` |
| 格式化/檢查 | ESLint (flat config) + Prettier |
| 套件管理 | pnpm (workspace 已設定) |
| AI 輔助 | Kilo (kilo.jsonc + agent-manager.json) |
| Git Branch | `exciting-cushion` (自 `main` 分出) |
| 專案本質 | `create-next-app` 產生的樣板，尚無任何客製化程式碼 |

## 最近完成

- `2026-05-27` — 初始化專案（`4f45822`），僅包含 Next.js 樣板檔案。
- 建立 `_docs/` 目錄，包含：
  - `code-style/` — 開發規則（TypeScript/React、Prisma 等 9 份規則 + SKILL.md）
  - `task-problem-log/` — sandbox 問題記錄基礎設施（error-log.md + git-sandbox.md 參考）
- 建立 `.kilo/` — Kilo 組態（kilo.jsonc、agent-manager.json、worktrees/）
- AGENTS.md — Agent 協作準則
- `.vscode/` — 編輯器設定（formatOnSave、顏色主題、Tailwind 輔助等）
- `types/env.d.ts` — 環境變數型別（NEXT_PUBLIC_API_URL、NEXT_PUBLIC_APP_NAME）與 CSS module 宣告

## 重要決策

1. **pnpm** 為主要套件管理工具（`pnpm-workspace.yaml` 設定允許 `sharp` 與 `unrs-resolver` 建置）。
2. **Tailwind CSS v4** 搭配 PostCSS（`@tailwindcss/postcss`），非 v3 的 `tailwind.config` 方式。
3. **ESLint flat config**（`eslint.config.mjs`）整合 Next.js core-web-vitals + TypeScript + Prettier plugin。
4. **嚴格 TypeScript**（`strict: true`），路徑別名 `@/*` 對應專案根目錄。
5. **`_docs/` 目錄**存放非執行期文件（設計規範、記錄等），遵循 project-structure.md 規則。
6. **Kilo** 作為 AI Agent 框架，包含自訂指令與技能（code-style、task-problem-log）。
7. **branch 命名**：功能開發在獨立 branch 進行，本分支為 `exciting-cushion`。

## 已知問題

- 尚無已知問題 — 專案處於初始階段，尚未加入任何業務邏輯或客製化功能。

## 問題解決方案建議

- 本專案已建立 `_docs/task-problem-log/SKILL.md` 與 `error-log.md`，未來遇到 sandbox 限制或執行期錯誤時，應優先查閱 `error-log.md` 及 `references/` 目錄下的已知解決方案。

## 需要我確認的事項

- **專案目標**：此專案的具體用途為何？（例如：個人作品集、商業專案、學習專案等）
- **資料庫**：是否需要整合 Prisma 或其他 ORM？（`_docs/code-style/rules/prisma.md` 已建立但尚未引入 Prisma 套件）
- **頁面與路由規劃**：是否需要開始實作具體頁面與功能，或先維持目前樣板狀態？
- **部署目標**：是否部署至 Vercel，或有其他部署平台需求？
