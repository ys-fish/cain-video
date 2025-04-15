<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import Play from "../components/play/play.vue";
import Banner from "../components/banner/banner.vue";
// props 传输值
const props = withDefaults(
  defineProps<{
    autoplay: boolean;
    src: string;
    loop: boolean;
    muted: boolean;
    width: string;
    height: string;
    current: number;
  }>(),
  {
    autoplay: false,
    src: "",
    loop: false,
    muted: false,
    width: "900px",
    height: "500px",
    current: 0,
  }
);

const videoRef = ref<any>(null);

const { autoplay, src, muted, width, height, loop, current } = toRefs(props);

// 视频播放状态
const playState = ref<boolean>(false);

// 鼠标移入
const videoMouseenter = () => {
  // console.log("鼠标移入");
};

const videoMouseleave = () => {
  // console.log("鼠标移出");
};

const videoClick = (e) => {
  console.log(videoRef.value.contains(e.target));
  if (videoRef.value.contains(e.target)) {
    playState.value = true;
  } else {
    playState.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", videoClick);
});

defineOptions({
  name: "CVideo",
});
</script>

<template>
  <div
    class="video-box"
    ref="videoRef"
    @mouseenter="videoMouseenter()"
    @mouseleave="videoMouseleave()"
    :style="{ width: width, height: height }"
  >
    <div class="video-mask" :class="{ playSwith: playState }"></div>
    <div class="video-pause"></div>
    <div class="video-play">
      <Play :play="playState"></Play>
    </div>
    <video class="video" src="../assets/925550595-1-16.mp4"></video>
    <Banner></Banner>
  </div>
</template>

<style scoped lang="scss">
.video-box {
  position: relative;
  .video {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .video-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
    opacity: 0;
  }
  .playSwith {
    opacity: 1;
  }
  .video-play {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
}
</style>
