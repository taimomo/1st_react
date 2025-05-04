# 1st React

Podman＋Dev Container で動く **Vite × React (TypeScript 予定)** の学習用リポジトリです。  
モダンなフロントエンド開発フローを色んなアプリ制作交えて段階的に整備していきます。


---

# 開発環境

## 1. 使用PC
- macOS Ventura 13.7.5 / Apple Silicon
- Podman ≥ 5.4.1 (作成時)
- VS Code + Dev Containers 拡張

## 2. 各種バージョン等

| 種別 | バージョン | 備考 |
|------|-----------|------|
| Node.js | **23.11.0** |  |
| パッケージマネージャ | **npm 10.9.2** | `package-lock.json` 使用 |
| React / React DOM | **19.1.0** | Server Components 対応 |
| Vite | **6.3.4** | Dev server 5173 |
| Dev Container | **node:23‑bullseye-slim** | Podman rootless |
| ブラウザ | Chrome 135.0+ | Edge・IE は未検証 |

---

## 3. クイックスタート

```bash
# Podman が無い場合（macOS）
brew install podman podman-compose
podman machine init
podman machine start

# クローン & VS Code で開く
git clone git@github.com:taimomo/1st_react.git
cd 1st_react
code .

# VS Code: ⌘⇧P → “Dev Containers: Reopen in Container”

# コンテナ内ターミナル
npm install
npm run dev -- --host

# ブラウザ
open http://localhost:5173
```

## 4. 学習記録


学習記録は Wikiの Learning‑Log/YYYY‑MM‑Wn に週次でまとめています。
