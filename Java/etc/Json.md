# JSONObject & JSONArray 
* `org.json` 라이브러리
* javascript에서 데이터를 전달하기 위해 만들어진 타입
* `"key":"value"` 형태의 데이터

## JSONObject
* `put(key,value)` : JSONObject에 데이터를 입력할 때 사용
* `toString()` : JSONObject가 가진 데이터를 json형태로 출력
> ```java
>import org.json.JSONException;
>import org.json.JSONObject;
>
>public class JsonExample {
>
>    public static void main(String[] args) throws JSONException {
>
>        JSONObject json = new JSONObject();
>        json.put("name", "JSON");
>        json.put("type", "JSONObject");
>
>        System.out.println(json.toString()); 
>        // -> {"name":"JSON","type":"JSONObject"}
>    }
> }
> ```
<br>

### `HashMap` to `JSONObject`
* HashMap에 저장된 데이터를 JSON으로 손쉽게 변환할 수 있다.
* `JSONObject json = new JSONObject(map)`과 같이 생성자의 인자로 전달한다.
> ```java
> import org.json.JSONException;
>import org.json.JSONObject;
>
>import java.util.HashMap;
>import java.util.Map;
>
>public class JsonExample2 {
>
>    public static void main(String[] args) throws JSONException {
>
>        Map<String, String> map = new HashMap<>();
>        map.put("name", "map");
>        map.put("type", "hashmap");
>
>        JSONObject json = new JSONObject(map);
>
>        System.out.println(json.toString());
>        // -> {"name":"map","type":"hashmap"}
>    }
>}
> ```

### `POJO`to `SONObject`
* POJO(Plain Old Java Object) : get/set 메서드만 있는 DTO와 같은 자바 클래스
* JSONObject는 POJO객체를 인자로 받아 key, value를 추출할 수 있다.
>```java
>import org.json.JSONException;
>import org.json.JSONObject;
>
>public class JsonExample4 {
>
>    public static class Pojo {
>        private String name;
>        private String type;
>
>        Customer(String name, String type) {
>            this.name = name;
>            this.type = type;
>        }
>        public void setName(String name) {
>            this.name = name;
>        }
>        public void setType(String type) {
>            this.type = type;
>        }
>        public String getType() {
>            return type;
>        }
>        public String getName() {
>            return name;
>        }
>    }
>
>
>    public static void main(String[] args) throws JSONException {
>
>        Pojo pojo = new Pojo("Pojo", "Class");
>
>        JSONObject json = new JSONObject(Pojo);
>
>        System.out.println(json.toString());
>        // -> {"name":"Pojo","type":"Class"}
>    }
>}
>``` 
<br>

## JSONArray
* JSON은 key-value형태로 데이터를 갖는데, 여기서 value는 `Array`타입이 될 수 있다.    
`"friends":["tom","sam"]`
* JSONArray에 `put(value)`로 0개 이상의 데이터를 배열에 추가할 수 있다.
* 그리고 JSONObject의 value로 JSONArray가 되도록 다시 추가 가능하다.
* 반대로, JSONArray에 JSONObject가 들어갈 수도 있다.
`"jsonArray":"["tom":"sam"]"`
>```java
>import org.json.JSONArray;
>import org.json.JSONException;
>import org.json.JSONObject;
>
>public class JsonExample5 {
>
>    public static void main(String[] args) throws JSONException {
>
>        JSONArray jArray = new JSONArray();
>        jArray.put("jsonarray1");
>        jArray.put("jsonarray2");
>
>        JSONObject json = new JSONObject();
>        json.put("name", "json");
>        json.put("type", "jsonObject");
>        json.put("array", jArray);
>
>        System.out.println(json.toString());
>        // -> {"name":"json","type":"jsonObject","array":["jsonarray1","jsonarray2"]}
>    }
>}
>```
<br>

### `List` to `JSONArray`
* JSONArray 생성자의 인자로 List를 보내면 List의 모든 데이터가 JSONArray에 추가된다.
>```java
>import org.json.JSONArray;
>import org.json.JSONException;
>import org.json.JSONObject;
>
>import java.util.ArrayList;
>import java.util.List;
>
>public class JsonExample6 {
>
>    public static void main(String[] args) throws JSONException {
>
>        List<String> list = new ArrayList<>();
>        list.add("list1");
>        list.add("list2");
>
>        JSONArray jsonArray = new JSONArray(list); // 여기서 인자로 'list'를 전달
>
>        JSONObject json = new JSONObject();
>        jo.put("name", "json");
>        jo.put("type", "JSONObject");
>        jo.put("array", jsonArray);
>
>        System.out.println(json.toString());
>        // -> {"name":"json","type":"JSONObject","array":["list1","list2"]}
>    }
>}
>```
