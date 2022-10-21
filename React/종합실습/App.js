import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './App.css';

// 홈(메인)
const Header = () => (
    <h1>이건희의 맛집 리뷰!</h1>
)
const Content = () => (
    <img src="img\review.jpg" width="350" />
)
const Address = () => (
    <h2>서울시 강남구</h2>
)
const Main = () => {
    return <div>
        <Header />
        <Content />
        <Address />
    </div>
}

// 리뷰 목록
const ListItem = ({ datas }) => {
    return (
        <div>
            {
                datas.map((data) => {
                    return (
                        <div key={data.id}>
                            {data.kind} / {data.place} / {data.address} / {data.rate}점 <span className="stars"><Star rate = {data.rate}/></span>
                            <img className="class2" src={data.url} />
                        </div>
                    )
                })
            }
        </div>
    )
}


// 리뷰작성
const AddItem = ({saveData}) => {
    const [id, setId] = useState(0);
    const [place, setPlace] = useState('');
    const [address, setAddress] = useState('');
    const [url, setUrl] = useState('');
    const [kind, setKind] = useState('한식');
    const [rate, setRate] = useState('5');

    // 내용 저장
    const save = ()=>{
        const data = {id, place, address, url, kind, rate}
        const dataArr = [id, place, address, url, kind, rate];
        const mapper = ['아이디', '장소', '주소', '이미지', '종류', '별점']

        // dataArr에서 빈 요소를 찾아 mapper의 값을 empty에 붙이기
        let empty = ''
        for(let i = 0; i < dataArr.length; i++){
            if(dataArr[i] == '')
            empty = `${empty}  ` + mapper[i]
        }

        // 만약 empty의 길이가 0이라면 등록시키기
        if(empty.length === 0){
            saveData(data);
            setId(0); setPlace(""); setAddress("")
            setUrl(""); setKind("한식"); setRate("5")
            alert('등록 완료!')
        }else{
            // console.log(data)
            alert(`${empty} 값은 필수입니다. `)
        }
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            아이디
                        </td>
                        <td>
                            <input type="number" onChange={(e)=>(setId(parseInt(e.target.value)))} value={id}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            장소
                        </td>
                        <td>
                            <input type="text" onChange={(e)=>(setPlace(e.target.value))} value={place}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            주소
                        </td>
                        <td>
                            <input type="text" onChange={(e)=>(setAddress(e.target.value))} value={address}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            이미지
                        </td>
                        <td>
                            <input type="text" onChange={(e)=>(setUrl(e.target.value))} value={url}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            종류/별점
                        </td>
                        <td>
                            <select onChange={(e)=>(setKind(e.target.value))} value={kind}>
                                <option  value="한식" selected>한식</option>
                                <option  value="중식">중식</option>
                                <option  value="일식">일식</option>
                            </select>
                            <select onChange={(e)=>(setRate(e.target.value))} value={rate}>
                                <option value="5" selected>5점</option>
                                <option value="4">4점</option>
                                <option value="3">3점</option>
                                <option value="2">2점</option>
                                <option value="1">1점</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button onClick={save}>등록</button>
        </div>
    )
}



// 검색
const SearchItem = ({temps, /*searchKor,searchJap,searchChi,*/ searchKind, searchAll}) => {
    return (
    <div>
        <button onClick={searchAll}> 전체</button>
        <button onClick={()=>(searchKind("한식"))}> 한식</button>
        <button onClick={()=>(searchKind("일식"))}> 일식</button>
        <button onClick={()=>(searchKind("중식"))}> 중식</button>
        <div>
        {
            temps.map((temp)=>(
                <div key={temp.id}>
                    {temp.kind} / {temp.place} / {temp.address} / {temp.rate}점 <Star rate = {temp.rate}/>
                    <img className=".class1" src={temp.url} width="20px" height="20px"/>
                </div>
            ))
        }
        </div>
    </div>
    )
}

// 메뉴바
const Menu = () => (<div>
    <Link to="/">[Home]</Link>
    <Link to="/list">[리뷰]</Link>
    <Link to="/add">[리뷰작성]</Link>
    <Link to="/search">[검색]</Link>
</div>
)

// 별찍기
const Star= ({rate}) => {
    let stars = '' 
    for(let i = 0; i < rate; i++){
        stars = stars + '★';
    }
    return <span className="stars">{stars}</span>
}


const App = () => {
    // 메인 데이터
    const [datas, setDatas] = useState([
        { id: 1, place: "짬뽕", address: "서울", url: "img/food4.jpg", kind: "중식", rate: 1 },
        { id: 2, place: "짜장면", address: "서울", url: "img/food5.jpg", kind: "중식", rate: 3 },
        { id: 3, place: "된장", address: "부산", url: "img/food6.jpg", kind: "한식", rate: 5 },
        { id: 4, place: "우동", address: "서울", url: "img/food3.jpg", kind: "일식", rate: 2 },
        { id: 5, place: "쌀국수", address: "인천", url: "img/food7.jpg", kind: "중식", rate: 4 }
    ])

    // 임시 데이터 - 검색용
    const [temps, setTemps] = useState(datas)

    // 저장
    const saveData = (data) => {
        setDatas(datas => [...datas, data])
    }

    // 검색 - kind별 검색
    function searchKind(kind){
        const filted = datas.filter(
            (data) => (data.kind === kind)
        )
        setTemps(filted);
    }

    // function searchKor(){
    //     const filted = datas.filter(
    //         (data) => (data.kind === '한식')
    //     )
    //     setTemps(filted);
    // }

    // function searchJap(){
    //     const filted = datas.filter(
    //         (data) => (data.kind === '일식')
    //     )
    //     setTemps(filted);
    // }

    // function searchChi(){
    //     const filted = datas.filter(
    //         (data) => (data.kind === '중식')
    //     )
    //     setTemps(filted);
    // }

    // 검색 - 전체 검색
    const searchAll = ()=>{
        setTemps(datas);
    }

    return <div>
        <Menu />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<ListItem datas={datas} />} />
            <Route path="/add" element={<AddItem saveData = {saveData}/>} />
            <Route path="/search" element={<SearchItem temps={temps} searchAll={searchAll} searchKind={searchKind}/*searchKor={searchKor} searchJap={searchJap} searchChi={searchChi} *//>} />
        </Routes>
    </div>
}

export default App;
