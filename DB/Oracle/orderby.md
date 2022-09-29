# DB - Oracle - ORDER BY 절
- Oracle SQL에서 ORDER BY절에 대해 복습하고, 정리가 필요한 내용만 기록한다.

---

## ORDER BY절

- 조회된 데이터를 정렬할 때 사용
- select 쿼리 마지막에 사용
- `asc` (오름차순)가 디폴트 / `desc` (내림차순) 는 명시해야함
    - alias를 기준으로 한다.

```sql
-- 두 쿼리의 결과는 같음
select * 
  from emp
 order by deptno, sal;

select * 
  from emp
 order by 8, 1; -- 컬럼 번호로도 가능
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa332996e-202e-48fe-b7c8-393e7049c164%2FUntitled.png?table=block&id=257f33d8-292e-4f38-bf69-cd30aa519a67&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1310&userId=&cache=v2)

## 1.1. null의 정렬

- `null`은 크기비교가 불가능한 데이터임. (그러나 가장 큰 값처럼 정렬이 되는데…)
- 따라서 `nulls first/last`로 null값의 위치를 정해줄 수 있다.
