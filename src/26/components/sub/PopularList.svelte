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
  let populars = $state([]);

  datas.then((value) => {
    populars = value;
  });
</script>

<section class="list_box" use:links>
  <H2Title name="현재 가장 인기 있는 영화" />
  <swiper-container init="false" bind:this={swiperEl}>
    {#each populars as popular, i}
      <swiper-slide class="swiper-slide">
        <a href={`/popular/${popular.id}`}>
          <figure>
            <div class="img_wrap">
              <img
                src={`https://image.tmdb.org/t/p/original${popular.poster_path}`}
                alt={popular.title}
              />
            </div>
            {#if i < 9}
              <figcaption class="lanking_title">{popular.title}</figcaption>
            {:else}
              <figcaption class="lanking_title2">{popular.title}</figcaption>
            {/if}
          </figure>
          <div class="hover_box">
            <h3>{popular.title}</h3>
            <p class="type">평점 : {popular.vote_average * 10}</p>
            {#if popular.overview === ""}
              <p class="explain">설명은 업데이트되면 추가하겠습니다.</p>
            {:else}
              <p class="explain">{popular.overview}</p>
            {/if}
          </div>
          <span class="lanking">{i + 1}</span>
        </a>
      </swiper-slide>
    {/each}
  </swiper-container>
</section>
