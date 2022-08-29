# SpringFramework - `@RequestBody`란?
* `@ResponseBody`는 Controller에서 뷰(jsp 등)가 아닌 `데이터(json타입 등)을 리턴`하고 싶을 때 사용하는 어노테이션
<br>

* Controller에 아래와 같은 코드가 있다면 스프링은 `return "home";`을 보고 `뷰(home.jsp)`를 찾을 것이다.
> ```java
> @RequestMapping(value="/home")
> public String home(@RequestParam("name") String name, Model model){
>     return "home";
> }
> ```
<br>
      
* 아래 코드는 뷰(jsp)를 찾는 것이 아닌 `String "home" 그대로를 리턴`한다.
> ```java
> @RequestMapping(value="/home")
> @ResponseBody
> public String home(@ReqeustParam("name") String name, Model model){
>     return "home";
> }
> ```
<br>

* `@ResponseBody`를 활용한 API 예시
> ```java
> @RequestMapping(value="/nameApi")
> @ResponseBody
> public String nameApi(@ReqeustParam("kName") String kName, @RequestParam("eName") String eName, Model model){
>     Name name = new Name();
>     name.setKname(kName);
>     name.setEname(eName);
>     return "name";
> }
> 
> static class Name{
>     private String kName;
>     private String eName;
> 	
>     public void setKname(String kName){
>         this.kName = kName;
>     }
>     public void setEname(String eName){
>         this.eName = eName;
>     }
> }
> 
> // url  => localhost:8080/nameApi?kName=길동&eName=gildong
> // 결과 => {"kName":"길동","eName":"gildong"}
> 
> ```
(참고자료 : https://blog.naver.com/ljy9378/222828550313 )

