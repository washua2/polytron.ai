<template>
    <div>
        <!-- cctv -->
        <div class="w-full mt-[1.25rem]">
            <div class="video-grid h-[35.875rem]" :style="{
                gridTemplateColumns: `repeat(${cols}, 1fr)`
            }">

                <div class="rounded-[0.5rem] overflow-hidden border-[0.0625rem] relative "
                    :class="layout == index ? '' : ''" v-for="(item, index) in showList" :key="index">
                    <div v-if="item.empty">
                    </div>
                    <div v-else>
                        <!-- header -->
                        <div class="w-full flex items-center justify-between px-[0.75rem] mt-[0.625rem] absolute">
                            <div
                                class="w-[2.25rem] h-[1rem] box-border relative opacity-90 bg-white rounded-full flex items-center justify-center gap-[0.25rem]">
                                <div class="w-[0.5rem] h-[0.5rem]  bg-red-600 rounded-full">
                                </div>
                                <div class="justify-center text-red-600 text-[0.5rem] font-['bold'] tracking-tight">
                                    REC</div>
                            </div>
                            <div
                                class="justify-start text-white text-[0.75rem] font-['medium']tracking-tight [text-shadow:_0rem_0.25rem_0.75rem_rgb(0_0_0_/_0.60)]">
                                {{ timeStr}}</div>
                        </div>
                        <!-- live 3D -->
                        <div class=" absolute bottom-[3.125rem] left-[0.75rem]">
                            <div class="w-[2.25rem] h-[1rem] relative bg-zinc-700/90 rounded-[4.8125rem]">
                                <div
                                    class="left-[0.2275rem] top-[0.0994rem] absolute justify-start text-white text-[0.5rem] font-['Roboto']">
                                    LIVE 3D</div>
                            </div>
                        </div>
                        <!-- title -->
                        <div class=" absolute bottom-[0.4375rem] left-[0.75rem] z-10">
                            <div
                                class="justify-start text-white text-[0.875rem] font-['medium'] [text-shadow:_0rem_0.25rem_0.75rem_rgb(0_0_0_/_0.60)]">
                                {{ item.name }}</div>
                            <div
                                class="w-[6.375rem] justify-start text-white text-[0.75rem] font-['medium']  [text-shadow:_0rem_0.25rem_0.75rem_rgb(0_0_0_/_0.60)] text-ellipsis overflow-hidden whitespace-nowrap">
                                Section A Health 1111</div>
                        </div>
                        <!-- control -->
                        <div class="flex items-center absolute right-[0.75rem] bottom-[0.75rem] gap-[0.5rem] z-10">
                            <div class="w-[1.375rem] h-[1.4375rem] flex items-center justify-center cursor-pointer">
                                <SvgIcon width="1.5625rem" height="1.625rem" icon="control-1" />
                            </div>
                            <div class="w-[1.375rem] h-[1.4375rem] flex items-center justify-center cursor-pointer">
                                <SvgIcon width="1.5625rem" height="1.625rem" icon="control-2" />
                            </div>
                            <div class="w-[1.375rem] h-[1.4375rem] flex items-center justify-center cursor-pointer">
                                <SvgIcon width="1.5625rem" height="1.625rem" icon="control-3" />
                            </div>
                            <div class="w-[1.375rem] h-[1.4375rem] flex items-center justify-center cursor-pointer">
                                <SvgIcon width="1.5625rem" height="1.625rem" icon="control-4" />
                            </div>
                            <div class="w-[1.375rem] h-[1.4375rem] flex items-center justify-center cursor-pointer">
                                <SvgIcon width="1.5625rem" height="1.625rem" icon="control-5" />
                            </div>
                            <div class="w-[1.375rem] h-[1.4375rem] flex items-center justify-center cursor-pointer">
                                <SvgIcon width="1.5625rem" height="1.625rem" icon="control-6" />
                            </div>
                            <div class="w-[1.375rem] h-[1.4375rem] flex items-center justify-center cursor-pointer">
                                <SvgIcon width="1.5625rem" height="1.625rem" icon="control-7" />
                            </div>
                        </div>
                        <!--  -->
                        <div
                            class="w-full h-[4.125rem] bg-gradient-to-b from-black/0 to-zinc-900 rounded-bl-[0.125rem] rounded-br-[0.125rem] absolute right-0 bottom-0">
                        </div>
                        <!-- video -->
                        <div class="w-full h-full">
                            <img src="@/assets/images/test.png" class="w-full h-full inline-block" alt="">
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import {formatCctvTime} from '@/utils/utils'
import { ref, computed, defineProps, toRefs, watch, defineEmits,onMounted ,onUnmounted } from 'vue'
const emit = defineEmits(['updatePageType'])
const props = defineProps({
    layout: {
        type: Number,
        default: 1
    },
    pageType: {
        type: Number,
        default: 1
    }
})
const { layout, pageType } = toRefs(props)
const timeStr = ref(formatCctvTime());
  let timer = null;
// 模拟接口返回的摄像头列表
const cameraList = ref(
    Array.from({ length: 16 }).map((_, i) => ({
        id: i + 1,
        name: `Camera${132 + i}`,
        desc: 'Section A Health & Wellness'
    }))
)

// 根据布局计算列数
const cols = computed(() => {
    const map = {
        1: 1,  // 1 路 1x1
        4: 2,  // 4 路 2x2
        9: 3,  // 9 路 3x3
        12: 4  // 12 路 4x3
    }
    return map[layout.value] || 4
})

// 当前页显示的摄像头列表
const showList = computed(() => {
    const start = (pageType.value - 1) * layout.value;
    const end = start + layout.value;

    const list = cameraList.value.slice(start, end);

    // 补齐空位
    while (list.length < layout.value) {
        list.push({ empty: true });
    }

    return list;
});
// 总页数
const totalPage = computed(() => {
    return Math.ceil(cameraList.value.length / layout.value);
});
// 页码越界自动修正（比如 layout 变化）
watch(pageType, () => {
    if (pageType.value > totalPage.value) {
        emit('updatePageType', 1);
    }
    if (pageType.value < 1) {
        emit('updatePageType', 1);
    }
})

watch(layout, () => {
    if (pageType.value > totalPage.value) {
        emit('updatePageType', 1);
    }
});

onMounted(() => {
    timer = setInterval(() => {
      timeStr.value = formatCctvTime();
    }, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });
</script>
<style lang="scss" scoped>
.video-grid {
    display: grid;
    grid-auto-rows: 1fr;
    gap: 0.25rem;
}
</style>