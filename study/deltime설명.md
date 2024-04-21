https://inyongs.tistory.com/18

1. Time.deltaTime이란?

 Time.deltaTime은 "한 프레임 당 실행하는 시간"을 뜻하는데, 값을 float형태로 반환합니다. 단위는 초를 사용합니다.

 2. Time.deltaTime의 원리

 유니티의 Update함수는 매 프레임마다 호출하여 해당 코드를 실행하게 됩니다. 예를 들어 캐릭터의 이동을 Update함수에 구현했다고 가정해봅니다. 그렇다면 성능이 좋은 컴퓨터와 나쁜 컴퓨터에선 어떤 차이가 일어나게 될까요?
  <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTjyk9%2FbtqzYLPjkP2%2F75TVnonjPUdQta8J9sJjsK%2Fimg.png">
  ![deltimeImg](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FTjyk9%2FbtqzYLPjkP2%2F75TVnonjPUdQta8J9sJjsK%2Fimg.png)
 
  다음 이미지와 같이 성능 좋은 컴퓨터는 1초에 100m를 이동할 수 있고, 성능 나쁜 컴퓨터는 1초에 10m를 이동하게 됩니다. 이런 상태로 게임이 출시된다면 아무리 실력이 좋아도 성능 좋은 컴퓨터를 가진 플레이어를 따라잡기 어렵습니다. 이러한 게임 플레이에 치명적인 요소를 해결할 수 있는 것이 바로 Time.deltaTime입니다.