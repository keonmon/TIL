# jqGrid Plugin

## jqGrid란?
* `jqGrid`는 `jQuery라이브러리 기반 Grid Plugin`이다.
* jqGrid는 웹에서 편리하게 `테이블 형식`의 데이터를 표시하고 조작하기 위한 `Ajax기반의 자바스크립트 컨트롤러`다.
* jqGrid는 기본적으로 `jQuery UI를 이용`하기 때문에 원한느 테마를 만들어 사용 가능하다.
<br>

## jqGrid 환경설정
* 그리드를 사용하기 위해서는 우선 라이브러리를 다운받는다. (jQuery & jqGrid)
* 그리드는 jQuery기반이기 때문에 `jQuery, jqGrid순으로 선언`해야한다.
> ```jsp
> // jQuery js파일을 jqGrid js보다 먼저 선언한다.
> <link rel="stylesheet" type="text/css" media="screen" href="../resources/css/jquery-ui-1.10.4.custom.css" />
> <link rel="stylesheet" type="text/css" media="screen" href="../resources/css/ui.jqgrid.css" />
> <script src="../resources/js/jquery-1.11.0.min.js" type="text/javascript"></script> 
> <script src="../resources/js/i18n/grid.locale-kr.js" type="text/javascript"></script>
> <script src="../resources/js/jquery.jqGrid.min.js" type="text/javascript"></script>
> ```
<br>

## Option
* 우선 view에 그리드를 그리기 위해서는 그려줄 table이 있어야 한다.
* 선언한 테이블에 id값을 주고, 그 id에 그리드를 설정하면 된다.
* 그리드를 그리기 위한 설정 시 기본 옵션들의 규칙은 `name : value` 형태인데, 여기서 value는 변수 또는 함수이다.
* 그리드의 옵션 개수는 상당히 많지만 중요한 것만 정리하면...
<br>

    url : 데이터를 가져오는 주소   
    mtype : 데이터 요청 방식 ( GET/POST )  
    datatype : 가져오는 데이터의 타입을 설정한다. (보통 xml, json, local 을 주로 사용한다.)
    colNames : 그리드 각각의 컬럼에 출력되는 이름 (배열로 설정한다)
    colModel : 각 컬럼에 대한 상세 정보. (서버로부터 받은 데이터를 매핑하여 출력한다)
    jsonReader/xmlReader : 데이터 타입이 json/xml일 경우 reader를 통해 데이터를 어떻게 읽을지 설정한다.
    rowNum : 초기에 출력할 데이터 개수를 설정
    pager : 그리드 대표기능인 페이저를 설정한다 (그리드 테이블 밑에 div를 추가하고 그 div의 id를 넣는다)
    multiselect : row마다 selectbox가 생긴다.
    postData : 서버에 파라미터로 넘길 데이터를 설정한다. (배열의 형태로 설정 가능)
    
## colModel Option
* data와 직접 관련있는 colModel은 굉장히 중요하다.
* 그리드에는 colModel만을 위한 옵션들이 있는데, colModel의 기본적인 특징은 데이터를 매핑한다는 것.
* 매핑이 이뤄지는 방식은 colModel의 옵션 중 하나인 `"name"`을 이용하여 이뤄진다.
* 이때 `"name"의 value값 을 데이터의 변수명과 일치`시켜주면 `자동으로 매핑`이 된다.
<br>

    name : 출력할 데이터의 이름 (서버에서 받은 데이터의 변수명을 명시한다.
    index : 컬럼 정렬 시 서버에 넘어가는 값 (index를 설정하지 않으면 name값이 넘어간다.
    width : 컬럼의 넓이 설정
    align : 컬럼 내 데이터 정렬 설정
    hidden : 데이터 값은 설정하나 화면에서 숨겨진다
    formatter : 데이터로 들어온 값을 특정 형식으로 변환하여 보여줄 수 있다.
    
> ```javascript
> // jqGrid option, jqGrid colModel option 포함
> <table id="grid"></table>
> <div id="pager"></div>
> <script type="text/javascript">
> var $Grid = {};
> $(document).ready(function(){
>      $Grid = $('#grid');
>      $Grid.jqGrid({
>           url : '../resources/server.json',
>          datatype : "json",
>           mtype : "get",
>           jsonReader : {
>                id : "id" // 대표 아이디를 설정
>                ,root : "employee" // 데이터의 시작을 설정
>           },
>           colNames : [
>                           '아이디',
>                           '이름',
>                           '나이',
>                           '성별',
>                           '직위'
>                      ],
>           colModel : [
>                     { name : 'id',        width:40,  align:'center'},
>                     { name : 'name',      width:80,  align:'left'  },
>                     { name : 'age',       width:80,  align:'left'  },
>                     { name : 'sex',       width:80,  align:'right' }, 
>                     { name : 'position',  width:50,  align:'right' }
>             ],
>           pager : '#pager',
>           rowNum : '10',
>           multiselect : true,
>           postData : {
>                id : 'id',
>                name : 'name'
>           }
>     });
> });
> ````
<br>
  
## Event
* 그리드에서 이벤트가 발생할 때의 옵션
* 옵션을 주는 것과 방법이 같다.
* `옵션명(파라미터)`이다.
<br>
      
    afterInsertRow(rowId,rowData,rowElement) : 각 줄이 삽입된 후 일어나는 이벤트.(데이터가 5개있어서 5줄이 삽입되면, 이벤트도 5번 발생)
    beforeRequest() : 서버로 데이터를 요청하기 전에 발생하는 이벤트
    gridComplete() : 그리드가 모든 작업이 마친 후 발생하는 이벤트
    loadComplete(data) : 서버에 요청을 보낸 직후 호출하는 이벤트 (data는 Ajax호출 후 받아오는 데이터)
    loadError(xhr,status,error) : 서버에 보낸 요청이 실패할 때 발생하는 이벤트
    onCellSelect(rowId,index,Column,cellContent,eventObject) : 그리드 셀을 선택했을 때 발생하는 이벤트.(선택한 컬럼의 정보와 셀의 정보도 반환해 줄 수 있다.
    onSelectRow(rowId,status,eventObject) : 그리드의 행을 선택했을 때 발생하는 이벤트(option중 multiselect로 셀렉박스가 활성화되었다면, 체크박스의 상태도 반환 가능하다.)
    onSortCol(index,indexColumn,sortOrder) : 정렬하기 전에(컬럼 헤더 클릭 후) 발생하는 이벤트

(참고 자료 : https://velog.io/@kjy991/JqGrid )
