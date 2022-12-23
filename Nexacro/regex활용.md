# nexacro에서 regex를 활용하기

```javascript

// 그리드 값 변경시
this.ds_grid1_oncolumnchanged = function(obj:Dataset, e:nexacro.DSColChangeEventInfo)
{
	trace("컬럼 : " + e.columnid + ", 값 : " + e.newvalue);
	
	if(e.columnid == "datetime1" || e.columnid == "datetime2"){
	
		// 입력 값 regex로 확인 (match() : 불일치하면 null return)
		var value = e.newvalue.trim();
		var match = value.match(/\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]) (0[0-9]|1[0-9]|2[0-4]):([0-5][0-9]):([0-5][0-9])/);
		
		if(match==null){
			// 정규식과 일치하지 않음(메시지 호출)(에러를 표출하는 메서드)
			gfn_showError(this, "Please enter it correctly. 'YYYY-MM-DD HH:mm:SS'", "", function (sPopupId, sResult) {
      
				if(sResult == "OK") {
					// 입력값 초기화
					obj.setColumn(e.row, e.columnid, e.oldvalue)
				}
			});
		}

	}else if(e.columnid == "countTime"){
	
		if(e.newvalue >= 25) {
			// 입력되는 값이 24 이상이면 alert 발생(에러를 표출하는 메서드)
			gfn_showError(this, "Enter a value less than 25", "", function (sPopupId, sResult) {
      
				if(sResult == "OK") {
					// 입력값 초기화
					obj.setColumn(e.row, e.columnid, e.oldvalue)
				}
			});
		}
		
	}
	
}
```
