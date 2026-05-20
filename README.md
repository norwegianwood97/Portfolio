# 최준혁 Portfolio

배포 링크: https://norwegianwood97.github.io/Portfolio/

React, Vite, Tailwind CSS로 만든 Backend / AI Agent Engineer 포트폴리오입니다.

## 프로젝트 소개

Java/JSP 기반 백엔드 유지보수, Python 자동화, 소형 LLM 챗봇 프로토타입, AWS EC2 기반 AI Agent 운영 실습, Node.js 기반 모의 주식 투자 서비스 경험을 정리한 포트폴리오 웹사이트입니다.

주요 섹션은 다음과 같습니다.

- Home: 포지셔닝 문구, 프로필 사진, GitHub / Email 버튼
- About: 백엔드 실무와 AI 활용 경험 설명
- Skills: 프로젝트 기반 기술 스택 분류
- Projects: 프로젝트별 기간, 기술 스택, 담당 업무, 성과

## 기술 스택

- React
- Vite
- Tailwind CSS
- GitHub Pages
- GitHub Actions
- lucide-react

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

로컬에서 빌드 결과를 확인하려면 다음 명령어를 사용할 수 있습니다.

```bash
npm run preview
```

## GitHub Pages 배포 방법

이 저장소는 `.github/workflows/deploy.yml`을 통해 GitHub Pages에 배포할 수 있습니다.

1. 변경사항을 `main` 브랜치에 push합니다.
2. GitHub 저장소의 `Settings > Pages`로 이동합니다.
3. `Build and deployment`의 Source를 `GitHub Actions`로 설정합니다.
4. workflow가 실행되면 `npm run build` 결과물인 `dist/`가 GitHub Pages로 배포됩니다.

Vite base 설정은 GitHub Pages 프로젝트 주소에 맞춰 유지합니다.

```js
base: "/Portfolio/",
```

## 정보 수정

포트폴리오의 주요 데이터는 `src/data/portfolio.js`에서 수정합니다.

- 이름, 타이틀, Home/About 문구
- Skills
- Projects

Home 버튼 링크와 이메일 주소는 `src/components/Home.jsx`에서 수정합니다.

각 페이지 공통 배경 이미지는 `public/assets/home-ai-engineer.png`에 있습니다.

Home 프로필 이미지는 `public/assets/profile.png`에 있습니다.

페이지 이동은 GitHub Pages 새로고침 404를 피하기 위해 Hash route 방식으로 구성했습니다.

- Home: `#/`
- About: `#/about`
- Skills: `#/skills`
- Projects: `#/projects`

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
https://norwegianwood97.github.io/Portfolio/
```

Topics:

```text
portfolio, react, vite, tailwindcss, github-pages, backend, ai-agent, llm
```
