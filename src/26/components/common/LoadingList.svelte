<script>
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
      navigation: true,
      slidesPerView: 7.2,
      spaceBetween: 10,
      injectStyles: [
        `
        .swiper {
            padding-top: 20px;
        }
        .swiper-button-next.swiper-button-disabled,
        .swiper-button-prev.swiper-button-disabled {
            opacity: 0;
        }
        .swiper-button-next,
        .swiper-button-prev {
            color: #fff;
            transition: 0.2s;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #01b4e4;
        }
        `,
      ],
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
  });
  //~swiper 관련 설정 끝

  let loadingArray = [];
  for (let i = 0; i < 20; i++) {
    loadingArray.push("");
  }
</script>

<section class="list_box">
  <h2 class="ex">예시 타이틀</h2>
  <swiper-container init="false" bind:this={swiperEl}>
    {#each loadingArray as loading, i}
      <swiper-slide class="swiper-slide">
        <figure class="ex">
          <div class="img_wrap"></div>
          <figcaption></figcaption>
        </figure>
      </swiper-slide>
    {/each}
  </swiper-container>
</section>
