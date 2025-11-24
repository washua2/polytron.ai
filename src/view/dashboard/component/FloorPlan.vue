<template>
    <div class="h-[37.125rem]">
        <div class="flex item-center justify-between">
            <div class="w-[8.5rem] h-[4.25rem]">
                <img src="@/assets/images/logo.png" class="w-full h-full" alt="">
            </div>
            <div class="w-[31.375rem] h-[3.125rem] mt-[0.75rem] flex items-center flex-wrap">
                <div class="w-[26.375rem] flex items-center gap-[0.125rem]">
                    <div class="w-[6.5rem] text-center justify-start text-zinc-600/80 text-[0.75rem] font-['light'] ">
                        Very Low</div>
                    <div class="w-[6.5rem] text-center justify-start text-zinc-600/80 text-[0.75rem] font-['light'] ">
                        Low</div>
                    <div class="w-[6.5rem] text-center justify-start text-zinc-600/80 text-[0.75rem] font-['light'] ">
                        Moderate</div>
                    <div class="w-[6.5rem] text-center justify-start text-zinc-600/80 text-[0.75rem] font-['light'] ">
                        High</div>
                </div>
                <div class="flex items-center gap-[0.75rem]">
                    <div class="w-[26.375rem] flex items-center gap-[0.125rem]">
                        <div class="w-[6.5rem] h-[0.4375rem] bg-gradient-to-l from-teal-600 to-blue-900">
                        </div>
                        <div class="w-[6.5rem] h-[0.4375rem] bg-gradient-to-l from-green-700 to-teal-600">
                        </div>
                        <div
                            class="w-[6.5rem] h-[0.4375rem] bg-gradient-to-l from-yellow-600 via-yellow-600 to-green-700">
                        </div>
                        <div class="w-[6.5rem] h-[0.4375rem] bg-gradient-to-l from-red-800 to-yellow-600">
                        </div>
                    </div>
                    <div class="w-[4.75rem] justify-start text-[#09090B] text-[0.75rem] font-normal font-['medium']">
                        Total Visitors</div>
                </div>

            </div>
        </div>

        <div class="w-full h-[32.875rem] flex items-center justify-center relative">
            <img src="@/assets/images/base.png" class="w-[83.5625rem] h-[27.5rem] relative z-10" alt="">
            <img src="@/assets/images/base1.png" class="w-[83.5625rem] h-[27.5rem] absolute z-10" alt="">

            <div class="w-[78.125rem] h-[25rem] absolute left-[3.5rem] top-[2.9375rem] z-[1]">
                <Wayfinding :isSwitch="isSwitch" />
            </div>
            <!-- cctv item -->
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[16.25rem] left-[17.5rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[15.625rem] left-[23.125rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[14.375rem] left-[26.875rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[15.625rem] left-[30.625rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[15.625rem] left-[33.75rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[13.75rem] left-[36.25rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[13.75rem] left-[40rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[13.75rem] left-[45rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[13.75rem] left-[51.25rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[13.75rem] left-[57.5rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[15.625rem] left-[41.25rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[15.625rem] left-[47.5rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[15.625rem] left-[53.125rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute  bottom-[15.625rem] left-[59.375rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[15.625rem] left-[67.5rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[17.5rem] left-[39.375rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[20rem] left-[39.375rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[22.5rem] left-[39.375rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[22.5rem] left-[41.875rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[22.5rem] left-[44.375rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[22.5rem] left-[46.25rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[22.5rem] left-[48.75rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[20rem] left-[46.25rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[20rem] left-[48.75rem] z-10" />
            <SvgIcon width="2.1875rem" height="2.1875rem" color="#1166E3" icon="cctv-floor"
                class="absolute bottom-[18.125rem] left-[47.5rem]  z-10" />
        </div>
    </div>
</template>
<script setup>
import Wayfinding from '@/components/wayfinding/index.vue'
import { ref, defineProps } from 'vue'
const props = defineProps({
    isSwitch: {
        type: Boolean,
        default: true
    }
})
</script>