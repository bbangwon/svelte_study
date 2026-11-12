<script>
  import { links } from "svelte-routing";
  import H2Title from "../common/H2Title.svelte";

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

  let { datas } = $props();
  let nows = $state([]);

  datas.then((value) => {
    nows = value;
  });
</script>

<section class="list_box" use:links>
  <H2Title name="새로 개봉한 현재 상영작" />
  <swiper-container init="false" bind:this={swiperEl}>
    {#each nows as now, index (now)}
      <swiper-slide class="swiper-slide">
        <a href={`/now/${now.id}`}>
          <figure>
            <div class="img_wrap">
              <img
                src={`https://image.tmdb.org/t/p/original${now.poster_path}`}
                alt={now.title}
              />
            </div>
            <figcaption>{now.title}</figcaption>
          </figure>
        </a>
      </swiper-slide>
    {/each}
  </swiper-container>
</section>
