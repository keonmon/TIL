

# Dataset
- 보통 ds_로 시작하도록 명명하며, 컴포넌트(edit, combo, grid 등)에 뿌리기 위해(binding이라고 표현) 데이터를 담는 테이블 형태의 그릇이라고 생각하면 됨.
- 데이터를 합치고(`getSum()`), 복사하고(`copyData()`), 추출하고(`getAvg()`, `getMax()`, `getMin()` 등), 필터링하는(`filter()`, `filterRow()`) 등 여러가지 정제하는 함수를 가지고 있음.
- 바인딩 : dataset과 컴포넌트를 연결하는 것.
  - 바인딩된 컴포넌트에서 데이터를 수정하면 연결된 dataset의 데이터도 함께 변경된다.

## Dataset의 주요 함수

- `ds.getRowType(nRow)` : 해당 행의 타입(기존/추가/수정/삭제 등의 상태값)을 구하는 메서드
- `ds.getColumn(nRow, 열 Idx/Id)` : 해당 행의 특정 열의 값을 구하는 메서드
- `ds.setColumn(nRow,  열 Idx/Id, 변경값)` : 해당 행의 특정 열을 변경하는 메서드
- `ds.getCaseCount(조건식, nStart, nEnd)` : 조건식을 만족하는 행의 수를 구하는 메서드
  - 예시 `this.Dataset00.getCaseCount("dept_cd == 'A1'");`
  - 예시 `this.Dataset00.getCaseCount("dept_cd == 'A1'", 3, 50);`
- `ds.findRow(rowId, 검색값, startRowIdx, endRowIdx)` : 해당 열에서 값이 일치하는 첫 행을 구하는 메서드 (검색 시작/종료idx는 생략 가능)
- `ds.getCaseMax(조건식, 열 Idx/Id)` : 조건식을 만족하는 행에서, 특정 열의 최대값을 구하는 메서드
- `ds.deleteRow(nRow)` : 해당 행을 제거하는 메서드 
- `getRowCount` : 
- `clearData` : 열 정보를 제외하고 모든 행을 제거하는 메서드
- filter 메서드
  - `filter(조건식)` : 조건식을 만족하는 행만 보이게 하는 메서드 
    - 조건식 대신 `filter("")`를 입력하면 필터링이 해제된다.
    - 필터링 된 이후 다시 다른 필터링을 하면 이전에 적용된 필터링은 관계없이 `새로운 조건이 적용`됨.
  - `filterRow(행의 위치)` : 지정된 행을 보이지 않게 필터링하는 메서드 
  - `` : 
  - `` : 

---

# Grid


---
