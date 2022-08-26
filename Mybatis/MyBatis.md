# 마이바티스
* 마이바티스와 관련하여 내용을 자유롭게 기록한다.

# mybatis.mapper-location 설정 (mapper.xml 위치 관련)
* `mybatis.mapper-locations 경로` / `mapper.xml파일 위치를 'resources' 하위에 위치` 해야함
* `datasource.url=` - db주소 뒤에 스키마 경로를 설정해야 함 
  * ex) `jdbc:postgresql://localhost:5432/db_test?currentSchema=스키마명`
