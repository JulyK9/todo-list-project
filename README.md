# todo list 구현 및 연습

### 10. 8. (토) 투두리스트 플젝 개선 작업 내용
- input 창에 내용이 있을 때만 추가 되도록 구현(text && 코드 추가)
- 추가목록 데이터를 data.js로 따로 빼서 적용

### 10. 10.(월) 
- 작성된 todo 리스트 할일 별로 내용 수정 구현
- 수정 모드(input)로 전환시 자동 포커스 되도록 구현(useRef 활용)
- 작성후 엔터로 반영할 수 있도록 구현(onKeyPress 활용)
- 완료 체크시 수정 버튼 숨김(삼항연산으로 분기, className 활용, disabled까지 작성)
- 작성중인 상황 인지하도록 버튼과 input창 글자색 반영

### 10. 11.(화)
- 메인 입력창과 리스트 할일 창 입력시 글자수 제한 input에 maxlength
    => [생각] 단순히 디자인 때문에 사용자의 입력을 제한하는 것은 좋지 않을 것 같다.. 대체 방안은??
- 리스트 할일별 수정시 input 바깥쪽 클릭시에도 입력완료 되도록 수정 (onBlur 활용)
- json-server 설치 및 data.json 파일 작성
    => 데이터를 서버에서 받아오는 방식으로 코드 수정 작성하기

### 10. 13.(목)
- 데이터를 fetching하여 crud 처리(axios 라이브러리 활용)
- [에러] 현재 계속 toDos.map is not a function 에러 이슈 해결이 안되고 있음

### 10.16.(일)
- [에러] 할일 추가 부분 에러 해결 완료
- [확인방법] addToDo 함수에서 axios를 통해 데이터를 가져온 data 형태 콘솔로 확인
- [원인] 가져온 데이터가 추가한 객체인데 그대로 setToDos 해줘서 오류가 생김
- [해결] 가져온 객체를 기존 toDos에 추가하여 setToDos 하여 오류 해결

### 10.18.(화)
- Footer 추가 및 할일 추가시 Footer 가리는 현상 처리(+ 할일 스크롤 처리 및 스크롤바 안보이게 처리)
- 간단한 CSS 디자인 추가(메인 이미지 및 배경 이미지 추가(linear-gradient))
- proxy 우회할 주소(서버쪽 주소) 예시로 반영(클라이언트쪽 package.json에 추가)

### 추가 구현 검토
- 리덕스 툴킷 활용한 상태 관리 도입 해보기(꼭 추가로 해볼 것)
- 상단 Nav에 검색 ui 구현해보기
- 검색 기능 반영시 결과 페이지 추가, 할일별 화면 구현도 해볼 것
- + 완료된 일 체크시 화면에서 숨겨지고 다른 페이지에서 보기 기능 구현하기 : 정렬, 검색 방식
    => 검색 기능 구현시 작성된 할일 목록 데이터에서 Autocomplete 방식 구현 해보기
- 코드 리팩토링 해보고 코드 리뷰 받아보기