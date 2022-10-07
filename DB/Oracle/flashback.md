# DB - Oracle - FlashBack query 플래시백 쿼리
-- 실무에서 실수로 데이터를 날려먹었을 때 유용하게 쓰일.. (시간제한은 있지만) 플래시백을 알아보자

---

## 1. ⚡ FLASHBACK QUERY ⚡

- **실수로 `COMMIT`을 했을 경우** 백업 복구를 제외한 **거의 유일한 생명줄..?**
- 오라클은 사용자가 `COMMIT`을 했다고 해서 UNDO DATA를 바로 삭제(약 15분 유지)하지 않기 때문에 바로 실행하면 복구가 가능하다..

```sql
-- FLASHBACK QUERY
-- 15분 전 EMP 테이블의 상태확인
SELECT *
  FROM EMP AS OF TIMESTAMP (SYSDATE - 15/1440);
 
-- 15분 전 20번 부서의 정보만 INSERT
INSERT INTO EMP
SELECT *
  FROM EMP AS OF TIMESTAMP (SYSDATE - 15/1440)
 WHERE DEPTNO = 20;
COMMIT; -- INSERT후 커밋
```
