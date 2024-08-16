// common js
// 1. nav>gnb 복제 
// 2. 복제대상을 변수 저장
// 3. m_nav_wrap 위 변수 붙여넣기
// pc용 nav .gnb 태그 복제 후 mobile용 태그 위치에 붙여넣기
const gnb = document.querySelector('nav .gnb')
const m_wrap = document.querySelector('.m_nav_wrap')
const gnbClone = gnb.cloneNode(true)
//복제대상.cloneNode() //괄호안 true 자식, 자손 추가 복제
console.log(gnb, m_wrap, gnbClone)
//복제 gnb 붙여넣기
m_wrap.appendChild(gnbClone)