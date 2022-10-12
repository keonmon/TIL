# CSS - animation 애니메이션
- CSS의 애니메이션(keyframe, transition, transform)에 대해 복습하고 정리한다.

---

## 1.4. 애니메이션 - animation

- css3로 html 태그의 동적 변화 가능
    - 애니메이션 animation
    - 전환 transition
    - 변환 transform

### 1.4.1. @keyframes - animation

```css
@keyframes name {
		시간비율{스타일1; 스타일2;}
		시간비율{스타일1; 스타일2;}
		시간비율{스타일1; 스타일2;}
}

/*-----적용------*/

@keyframes textColorAnimation {
    0%{color:blue;}
    30%{color:green;}
    100%{color:red;}
}

span{
    animation-name: textColorAnimation;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    font-weight: bold;
}
```

```html
<body>
	  <p>
				<span>span</span>
				텍스트를 3초에 blue-green-red로 무한반복
		</p>
</body>
```

![Honeycam 2022-10-12 15-54-00.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7e5aff3a-8472-4d8a-a293-aeb6c8ee38d6/Honeycam_2022-10-12_15-54-00.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221012T083317Z&X-Amz-Expires=86400&X-Amz-Signature=f97cf6567346fc36f9059162a0ac70b6a5b0287d41ba977e06b6c7931f452f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### 1.4.2. 전환 - transition

- html 태그에 적용된 css3 프로퍼티 값의 변화를 서서히 진행시켜 애니메이션 효과 생성

```css
span{
		transition:font-size:5s;
}

span:hover{
		font-size:500%;
}
```

```html
<body>
    <h3>font-size에 대한 전환(transition)</h3>
    <hr>

    <p><span>꽝!</span><br>
    위 글자에 마우스를 대봐~~</p>
</body>
```

![Honeycam 2022-10-12 16-16-29.gif](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0eb09616-cb25-464f-9fff-5e2c4059c9c4/Honeycam_2022-10-12_16-16-29.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221012T083317Z&X-Amz-Expires=86400&X-Amz-Signature=22716db7adba2b713aa68ddbf17a75cf34146ed009df407de7301bec76d85129&X-Amz-SignedHeaders=host&x-id=GetObject)

### 1.4.3. transform

- 텍스트나 이미지를 회전, 확대 등 다양한 기하학적 모양으로 출력
    - 회전 각도 단위는 deg이며 시계방향의 회전을 한다.

```css
div{
		transform:rotate(20deg);
}

div{
		transform:skew(0deg, -20deg);
}

div{
		transform:translateY(100px);
}

div{
		transform:scale(3,1);
}
```

```html
<body>
    <div id="rotate">rodate 20deg</div>
    <div id="skew">skew(0deg, -20deg)</div>
    <div id="translate">translateY(100px)</div>
    <div id="scale">scale(3,1)</div>
</body>
```

![Untitled](https://lgh.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1c7b22b7-de02-4ace-95a8-d7721e455d99%2FUntitled.png?table=block&id=10085c16-7e8e-49fa-ab74-53b53da2eff7&spaceId=d2c21b63-4fd7-4cc8-b09a-a59a09d82a76&width=1100&userId=&cache=v2)
