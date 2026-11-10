<script>
  const today = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const dateString = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
    day: today.getDay(),
  };

  //비구조화 할당 처리
  const { year, month, date, day } = dateString;
</script>

<div class="bucketheader">
  <h1>My Bucket List</h1>
  <h2>{year}년 {month}월 {date}일 {week[day]}요일</h2>
  <p>할 일 3개 남음</p>
</div>
