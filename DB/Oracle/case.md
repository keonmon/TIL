# DB - Oracle - CASE문
- Oracle SQL에서 CASE문에 대해 복습하고, 정리가 필요한 내용만 기록한다.
- 
---

# 3. CASE식

- `CASE`로 **CASE문의 시작을 알리는 키워드**
- `WHEN` IF문의 조건절( )해당하는 키워드 **조건문을 작성**
- `THEN` IF문의 BODY({ })에 해당한다. **연산문을 작성(결과값)**
- `ELSE` 는 **ELSE에 해당**
- `END` 로 **CASE문을 종료**한다.

```sql
SELECT empno, ename, job, sal
      ,CASE JOB WHEN 'SALESMAN' THEN SAL * 1.1
                WHEN 'MANAGER'  THEN SAL * 1.2
                                ELSE SAL * 1.3
       END AS NEW_SAL    
  FROM emp;

SELECT empno, ename, sal
      ,CASE WHEN SAL >= 3000 THEN '상'
            WHEN SAL >= 2000 THEN '중'
                             ELSE '하'
       END AS 등급    
  FROM emp;
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd0e93927-a7c9-441c-bb1b-b49e4f18a3a7%2FUntitled.png?table=block&id=32a748ef-6d71-49f3-a02f-3d02f311ff08&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=830&userId=&cache=v2)

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e7e769c-d53d-49fa-9777-87caeec43817%2FUntitled.png?table=block&id=4fc49f9c-6ec8-400f-b4d0-fe1dc305dd70&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=610&userId=&cache=v2)
