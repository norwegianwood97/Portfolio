# 최준혁 Portfolio

배포 링크: https://norwegianwood97.github.io/Portfolio_260514/

React, Vite, Tailwind CSS로 만든 Backend / AI Agent Engineer 포트폴리오입니다.

## 프로젝트 소개

백엔드 개발, AI/LLM 프로토타입, 데이터 자동화, 인프라 운영 실습 경험을 채용 담당자가 빠르게 확인할 수 있도록 구성한 개인 포트폴리오 웹사이트입니다.

주요 섹션은 다음과 같습니다.

- Hero: 핵심 포지션, 주요 링크, 이메일 복사 버튼
- About: 개발 방향성과 경험 요약
- Skills: Backend, AI/LLM, Database/Cache, Automation, Infra/Tools 분류
- Projects: 프로젝트별 역할, 기술 스택, 성과, 상세 링크
- Experience: 업무 및 연구/데이터 경험 타임라인

## 기술 스택

- React
- Vite
- Tailwind CSS
- lucide-react
- GitHub Actions
- GitHub Pages

## 로컬 실행 방법

```bash
npm install
npm run dev
```

Vite 개발 서버가 출력하는 로컬 주소로 접속해 확인할 수 있습니다.

## 빌드 방법

```bash
npm run build
```

빌드 결과물은 `dist/` 디렉터리에 생성됩니다.

빌드 결과를 로컬에서 미리 확인하려면 다음 명령어를 사용할 수 있습니다.

```bash
npm run preview
```

## GitHub Pages 배포 방법

이 저장소는 `.github/workflows/deploy.yml`을 통해 GitHub Pages에 배포할 수 있습니다.

1. 변경사항을 `main` 브랜치에 push합니다.
2. GitHub 저장소의 `Settings > Pages`로 이동합니다.
3. `Build and deployment`의 Source를 `GitHub Actions`로 설정합니다.
4. workflow가 실행되면 `npm run build` 결과물인 `dist/`가 GitHub Pages로 배포됩니다.

현재 Vite base 설정은 GitHub Pages 프로젝트 주소에 맞춰 유지되어 있습니다.

```js
base: "/Portfolio_260514/",
```

프로젝트 페이지 주소:

```text
https://norwegianwood97.github.io/Portfolio_260514/
```

## 정보 수정

포트폴리오의 주요 내용은 `src/data/portfolio.js`에서 수정합니다.

- 이름, 타이틀, 소개 문구
- Skills
- Projects 및 상세 링크
- Experience
- Hero 버튼 링크 및 이메일 주소

Hero 배경 이미지는 `public/assets/hero-ai-engineer.png`에 있습니다.

## Git 추적 제외

로컬 산출물과 캐시 파일은 `.gitignore`에서 제외합니다.

- `node_modules/`
- `dist/`
- `.env`, `.env.*`, `!.env.example`
- `.DS_Store`, `Thumbs.db`
- `.history/`
- `.lh/`
- `.cache/`
- `.vite/`
- `coverage/`
- `*.log`

이미 `.history/` 또는 `.lh/` 같은 로컬 파일이 Git에 추적 중이라면 아래 명령으로 인덱스에서만 제거합니다.

```bash
git rm -r --cached .history .lh
```

## GitHub Repository About 설정 추천

Description:

```text
Backend / AI Agent Engineer portfolio built with React, Vite, Tailwind CSS
```

Website:

```text
https://norwegianwood97.github.io/Portfolio_260514/
```

Topics:

```text
portfolio, react, vite, tailwindcss, github-pages, backend, ai-agent, llm
```
