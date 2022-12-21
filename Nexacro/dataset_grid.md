

# Dataset
- 보통 `ds_`로 시작하도록 정의하며, 컴포넌트(edit, combo, grid 등)에 뿌리기 위해(binding이라고 표현) 데이터를 담는 테이블 형태의 그릇이라고 생각하면 됨.
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


---

# Grid 컴포넌트
- Dataset의 데이터를 테이블형태로 표현하는 컴포넌트
- 반드시 Dataset과 바인딩되어 사용됨
  - 따라서 Grid ↔ Dataset는 변동됨에 따라 서로에게 영향을 주며 반영된다.

## Grid 컴포넌트의 주요 함수
- `Grid.setCellPos(nCellIdx)` : 해당 셀을 선택한다. (true/false)를 리턴
- `Grid.moveToNextCell()` : 포커스를 다음 셀로 이동 (true/false)를 리턴
- `Grid.showEditor(boolean)` : 선택된 셀이 편집이 가능할 경우, 편집모드로 설정해주는 메서드
- `Grid.getCellProperty(cell영역('head'/'body'/'summ'), nCellIdx, 프로퍼티명 )` : 셀의 속성(프로퍼티)값을 가져오는 메서드
- `Grid.setCellProperty(cell영역('head'/'body'/'summ'), nCellIdx, 프로퍼티명, value )` :  셀의 속성(프로퍼티)값을 변경하는 메서드
  - `nCellIdx` : 해당 행 내에서 셀이 나열된 순서(합쳐진 셀은 인덱스에서 제외)
- setter 메서드
  - `(Grid.set_속성명)` : 넥사크로에서는 별도의 `set_`메서드를 지원한다. 속성명 앞에 `set_`을 붙여 속성에 접근할 수 있다.
  - `this.Button00.set_text("text");`
## Tip
- `this.objects[Object.속성명]` 이런 방식으로 공통 속성을 지정하는 범용메서드를 만들 수 있겠다.
- expr 스크립트 : 
  - 기본적으로 내부적으로 바인딩된 dataset을 기준으로 처리되므로, 별도의 유효범위를 지정하지 않아도 사용 가능하다.
  - 단 바인딩 되지 않은 Dataset에 직접 접근하려면 유효범위를 지정한다.
    > `expr:Column00` <br>
    > `expr:Column00.min` <br>
    > `expr:currow` <br>
    > `expr:rowposition` <br>
    > `expr:getSumNF('col0')`

    > `expr:Dataset.set_filterstr("Column00=='test'")` <br>
    > `expr:Dataset.filter("Column00=='test'")` <br>


  - 바인딩 된 `Grid`, `Dataset`, `Cell`을 지정하는 경우에는 아래와 같은 지시자를 사용
    > Grid: `comp` <br>
    > dataset: `dataset` <br>
    > Cell: `this`

  - form에 대한 지시자를 별도로 제공하지 않으며 필요하면 comp.parent 또는 dataset.parent 와 같이 접근한다.
    > `expr:this.col` <br>
    > `expr:dataset.rowcount` <br>
    > `expr:comp.currentcell` <br>
    > `expr:dataset.parent.func1()` <br>
    > `expr:comp.parent.func1()`

