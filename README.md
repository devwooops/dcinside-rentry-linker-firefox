# DCInside Rentry Linker (Firefox)

디시인사이드 게시글 본문에 적힌 영문+숫자 코드(예: `mesiok38`) 를 `https://rentry.co/코드` 링크로 바꿍주는 Firefox 확장 프로그램입니다.

## 다운로드

- 소스: 이 저장소 전체 ZIP
  - https://github.com/devwooops/dcinside-rentry-linker-firefox/archive/refs/heads/main.zip

## Firefox Android 설치

1. 위 ZIP을 폰에 다운로드합니다. (구글 드라이브 / 크롬 / PC→폰 전송 권장)
2. Firefox 실행 → 메뉴(⋮) → **설정** → **Firefox 정보**
3. **Firefox 로고를 5번 연속 탭** (디버그 메뉴 활성화)
4. 설정으로 돌아가 **「파일에서 확장 기능 설치」** 선택
5. 다운로드한 ZIP 파일 선택 후 설치

> **주의:** 서명되지 않은 확장은 정식 Firefox에서 설치가 거부될 수 있습니다.  
> 영구 사용을 위해서는 AMO Unlisted 서명이 필요합니다. Nightly에서는 일부 가능할 수 있습니다.

## Firefox 데스크톱 (임시 로드)

1. ZIP 압축 해제
2. 주소창에 `about:debugging#/runtime/this-firefox` 입력
3. **임시 부가 기능 로드** → `manifest.json` 선택

## 동작

- `gall.dcinside.com`, `m.dcinside.com` 게시글 본문
- 영문+숫자가 섞인 5~20자 코드를 `https://rentry.co/코드` 링크로 변환
- 새 탭에서 열림 (`target="_blank"`)

## 파일

- `manifest.json`
- `content.js`
- `styles.css`
