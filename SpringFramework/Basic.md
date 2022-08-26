# SpringFramework
* 스프링프레임워크와 관련하여 기억하고자 하는 내용을 자유롭게 기록합니다.

## Controller, Service, ServiceImpl, Mapper, Entity 등의 역할
* 브라우저가 데이터를 요청, 반환할 때,
  * 요청 : `View` -> `Controller` -> `Service`(Impl에 구현) -> `Mapper(DAO)`(xml파일을 활용해 쿼리를 매핑(MyBatis)) -> `DB`
  * 반환 : `View` <- `Controller` <- `Service` <- `Mapper(DAO)` <-`DB`

* Contorller
  * @Controller으로 명시
  * @Autowired로 Service를 DI함

* Service
  * Service는 `Service(interface)`, `ServiceImpl(service의 구현체)`로 구성된다.
  * `@Service` 어노테이션은 `ServiceImpl`에 박혀있음
  * Controller에서 `@Autowired`하는 것은 당연히 구현체(ServiceImpl)이 아닌 `Service`이다.

* Mapper(DAO)
  * MyBatis는 Mapper interface를 제공한다. 
  * DAO 대신 Mapper를 활용하면 더욱 편리하게 쿼리를 관리할 수 있다.
  * @Mapper로 명시
  * SQL문은 xml파일로 관리하며 xml에서 해당 Mapper를 `<mapper namespace=" ... ">`로 지정하게 된다.
  * 따라서 id(xml) - 메서드명(mapper), resultType(xml) - 메서드 반환타입(mapper)은 일치해야만 한다.

* Entity vs DTO
  * Entity : DB의 테이블과 1:1로 매핑되는 클래스 (JPA에서 그 역할이 명확해지는 것 같다)
  * DTO(Data Transfer Object)는 이름 그대로 Data 전달/전송 목적의 객체이지만,
  
