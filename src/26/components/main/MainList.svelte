<script>
  import { link } from "svelte-routing";

  //swiper 관련 설정
  import { register } from "swiper/element/bundle";

  import "swiper/css";
  import "swiper/css/effect-fade";
  import "swiper/css/pagination";

  let swiperEl;

  $effect(() => {
    // 1. Swiper 커스텀 엘리먼트 등록
    register();

    // 2. 파라미터 전달 (속성으로 직접 넘겨도 되고 객체로 할당 가능)
    const swiperParams = {
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        clickable: true,
      },
      injectStyles: [
        `
          .swiper-horizontal > .swiper-pagination-bullets,
          .swiper-pagination-bullets.swiper-pagination-horizontal,
          .swiper-pagination-custom,
          .swiper-pagination-fraction {
            width: auto;
            left: 105px;
            right: auto;
            bottom: 150px;
          }

          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            transition: 0.2s;
            background-color: #fff;
            opacity: 0.2;
          }

          .swiper-pagination-bullet:hover,
          .swiper-pagination-bullet-active {
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background-color: #01b4e4;
          }
        `,
      ],
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  });
  //~swiper 관련 설정 끝

  let { datas } = $props();

  let mains = $state([]);
  const random = Math.floor(Math.random() * 15);
  datas.then((value) => {
    mains = value.slice(random, random + 5);
  });

  let btnPause = $state();
  let btnPlay = $state();
  let cnt = $state(false);

  const onHandleClick = () => {
    if (cnt) {
      btnPause.classList.remove("active");
      btnPlay.classList.add("active");
      swiperEl.swiper.autoplay.start();
    } else {
      btnPause.classList.add("active");
      btnPlay.classList.remove("active");
      swiperEl.swiper.autoplay.stop();
    }
    cnt = !cnt;
  };
</script>

<main>
  <swiper-container init="false" bind:this={swiperEl}>
    {#each mains as main, index (main.id)}
      <swiper-slide class="swiper-slide">
        <img
          src={`https://image.tmdb.org/t/p/original/${main.backdrop_path}`}
          alt={main.title}
        /><br />
        <h3>{main.title}</h3>
        <p>
          {#if main.overview === ""}
            새롭게 개봉한 [{main.title}]를 만나볼까요?
          {:else}
            {main.overview}
          {/if}
        </p>
        <a href={`/now/${main.id}`} use:link>자세히보기</a>
      </swiper-slide>
    {/each}
  </swiper-container>
  <div class="swiper-playpause">
    <button class="btn_pause" bind:this={btnPause} onclick={onHandleClick}
    ></button>
    <button class="btn_play active" bind:this={btnPlay} onclick={onHandleClick}
    ></button>
  </div>
</main>
