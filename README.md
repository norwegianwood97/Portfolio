# 최준혁 Portfolio

React, Vite, Tailwind CSS로 만든 Backend / AI Agent Engineer 포트폴리오입니다.

## 기술 스택

- React
- Vite
- Tailwind CSS
- GitHub Actions
- GitHub Pages

## 로컬 실행

```bash
npm install
npm run dev
```

빌드 확인:

```bash
npm run build
npm run preview
```

## 정보 수정

포트폴리오 내용은 `src/data/portfolio.js`에서 수정합니다.

- 이름, 타이틀, 소개 문구
- Skills
- Projects
- Experience
- Contact placeholder 링크

Hero 배경 이미지는 `public/assets/hero-ai-engineer.png`에 있습니다.

## GitHub Pages 배포

이 저장소는 `.github/workflows/deploy.yml`을 통해 GitHub Pages에 배포할 수 있습니다.

1. GitHub 저장소에 코드를 push합니다.
2. GitHub 저장소의 `Settings > Pages`로 이동합니다.
3. `Build and deployment`의 Source를 `GitHub Actions`로 설정합니다.
4. `main` 브랜치에 push하면 workflow가 실행되고 `dist` 결과물이 Pages에 배포됩니다.

`vite.config.js`는 GitHub Actions 환경에서 저장소 이름을 읽어 `base` 경로를 자동 설정합니다. 로컬 개발 환경에서는 `/`를 사용합니다.
