<template>
    <div class="w-full flex-1 pl-[1.5rem] pt-[0.375rem] pr-[1.9375rem] max-h-screen select-none">
        <!-- header -->
        <div class="w-full flex items-center justify-between">
            <div class="text-center justify-start text-[#09090B] text-[1.25rem] font-['medium']">DHOBY GHAUT STATION -
                LIFESTYLE CENTRE MONITORING AREA</div>

            <!--cctv control -->
            <div class="flex items-center">
                <div class="h-[3.5rem] flex items-center" v-if="!isTarget">

                    <div class="flex items-center border-[0.0625rem] border-[#E5E7EB] rounded-[0.25rem]">
                        <div class="py-[0.625rem] px-[0.75rem] cursor-pointer" @click="handlerClick('left')"
                            @mouseenter="isLeft = true" @mouseleave="isLeft = false">
                            <SvgIcon width="0.75rem" height="0.75rem" icon="chevron-left" v-show="!isLeft" />
                            <SvgIcon width="0.75rem" height="0.75rem" icon="chevron-left-active" v-show="isLeft" />

                        </div>
                        <div class="py-[0.625rem] px-[0.75rem] cursor-pointer" @click="handlerClick('right')"
                            @mouseenter="isRight = true" @mouseleave="isRight = false">
                            <SvgIcon width="0.75rem" height="0.75rem" icon="chevron-right" v-show="!isRight" />
                            <SvgIcon width="0.75rem" height="0.75rem" icon="chevron-right-active" v-show="isRight" />
                        </div>
                    </div>
                    <div class="flex items-center gap-[1rem] mx-[1.5rem]">
                        <div class="p-[0.5rem] cursor-pointer " :class="layout == 1 ? 'rounded-[0.5rem] bg-[#F4F4F5]' : ''" @click="handlerGrid(1)">
                            <!-- <SvgIcon width="1.375rem" height="1.375rem" icon="one-grid"
                                :color="layout == 1 ? '#1D232B' : '#999EA4'" /> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4375rem" height="1.4375rem"
                                viewBox="0 0 23 23" fill="none">
                                <path
                                    d="M22.8571 3.09321C22.8571 1.38583 21.4744 0 19.7671 0H3.09321C1.38276 0 0 1.38276 0 3.09321V19.7671C0 21.4745 1.38276 22.8571 3.09321 22.8571H19.764C21.4714 22.8571 22.8541 21.4744 22.8541 19.7671L22.8571 3.09321Z"
                                    :fill="layout == 1 ? '#1D232B' : '#999EA4'" />
                            </svg>
                        </div>
                        <div class="p-[0.5rem] cursor-pointer" :class="layout == 4 ? 'rounded-[0.5rem] bg-[#F4F4F5]' : ''" @click="handlerGrid(4)">
                            <!-- <SvgIcon width="1.375rem" height="1.375rem" icon="four-grid"
                                :color="layout == 4 ? '#1D232B' : '#999EA4'" /> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4375rem" height="1.4375rem"
                                viewBox="0 0 23 23" fill="none">
                                <path
                                    d="M10.126 1.38796C10.126 0.62184 9.51341 0 8.75706 0H1.37033C0.612582 0 0 0.620464 0 1.38796V8.86974C0 9.63586 0.612582 10.2563 1.37033 10.2563H8.7557C9.51209 10.2563 10.1246 9.63582 10.1246 8.86974L10.126 1.38796ZM22.8571 1.38796C22.8571 0.62184 22.2446 0 21.4868 0H14.0987C13.3437 0 12.7298 0.620464 12.7298 1.38796V8.86974C12.7298 9.63586 13.3437 10.2563 14.0987 10.2563H21.4868C22.2446 10.2563 22.8571 9.63582 22.8571 8.86974V1.38796ZM10.126 13.9874C10.126 13.2213 9.51341 12.6009 8.75706 12.6009H1.37033C0.612582 12.6009 0 13.2213 0 13.9874V21.4706C0 22.2395 0.612582 22.8571 1.37033 22.8571H8.7557C9.51209 22.8571 10.1246 22.2395 10.1246 21.4706L10.126 13.9874ZM22.8571 13.9874C22.8571 13.2213 22.2446 12.6009 21.4868 12.6009H14.0987C13.3437 12.6009 12.7298 13.2213 12.7298 13.9874V21.4706C12.7298 22.2395 13.3437 22.8571 14.0987 22.8571H21.4868C22.2446 22.8571 22.8571 22.2395 22.8571 21.4706V13.9874Z"
                                    :fill="layout == 4 ? '#1D232B' : '#999EA4'" />
                            </svg>
                        </div>
                        <div class="p-[0.5rem] cursor-pointer" :class="layout == 9 ? 'rounded-[0.5rem] bg-[#F4F4F5]' : ''" @click="handlerGrid(9)">
                            <!-- <SvgIcon width="1.375rem" height="1.375rem" icon="nine-grid"
                                :color="layout == 9 ? '#1D232B' : '#999EA4'" /> -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.4375rem" height="1.4375rem"
                                viewBox="0 0 23 23" fill="none">
                                <path
                                    d="M6.45144 0.887355C6.45144 0.397556 6.06115 0 5.57927 0H0.87306C0.390286 0 0 0.396676 0 0.887355V5.67062C0 6.16042 0.390286 6.55707 0.87306 6.55707H5.5784C6.06031 6.55707 6.45057 6.16039 6.45057 5.67062V0.887355H6.45144ZM14.5627 0.887355C14.5627 0.397556 14.1724 0 13.6896 0H8.98251C8.50149 0 8.11034 0.396676 8.11034 0.887355V5.67062C8.11034 6.16042 8.50149 6.55707 8.98251 6.55707H13.6896C14.1724 6.55707 14.5627 6.16039 14.5627 5.67062V0.887355ZM22.8571 0.887355C22.8571 0.397556 22.4669 0 21.985 0H17.2788C16.796 0 16.4057 0.396676 16.4057 0.887355V5.67062C16.4057 6.16042 16.796 6.55707 17.2788 6.55707H21.985C22.4669 6.55707 22.8571 6.16039 22.8571 5.67062V0.887355ZM6.45144 8.94246C6.45144 8.45266 6.06115 8.05601 5.57927 8.05601H0.87306C0.390286 8.05601 0 8.45268 0 8.94246V13.7266C0 14.2182 0.390286 14.6131 0.87306 14.6131H5.5784C6.06031 14.6131 6.45057 14.2182 6.45057 13.7266V8.94246H6.45144ZM14.5627 8.94246C14.5627 8.45266 14.1724 8.05601 13.6896 8.05601H8.98251C8.50149 8.05601 8.11034 8.45268 8.11034 8.94246V13.7266C8.11034 14.2182 8.50149 14.6131 8.98251 14.6131H13.6896C14.1724 14.6131 14.5627 14.2182 14.5627 13.7266V8.94246ZM22.8571 8.94246C22.8571 8.45266 22.4669 8.05601 21.985 8.05601H17.2788C16.796 8.05601 16.4057 8.45268 16.4057 8.94246V13.7266C16.4057 14.2182 16.796 14.6131 17.2788 14.6131H21.985C22.4669 14.6131 22.8571 14.2182 22.8571 13.7266V8.94246ZM6.45144 17.1856C6.45144 16.6976 6.06115 16.2992 5.57927 16.2992H0.87306C0.390286 16.2992 0 16.6976 0 17.1856V21.9707C0 22.4605 0.390286 22.8571 0.87306 22.8571H5.5784C6.06031 22.8571 6.45057 22.4605 6.45057 21.9707V17.1856H6.45144ZM14.5627 17.1856C14.5627 16.6976 14.1724 16.2992 13.6896 16.2992H8.98251C8.50149 16.2992 8.11034 16.6976 8.11034 17.1856V21.9707C8.11034 22.4605 8.50149 22.8571 8.98251 22.8571H13.6896C14.1724 22.8571 14.5627 22.4605 14.5627 21.9707V17.1856ZM22.8571 17.1856C22.8571 16.6976 22.4669 16.2992 21.985 16.2992H17.2788C16.796 16.2992 16.4057 16.6976 16.4057 17.1856V21.9707C16.4057 22.4605 16.796 22.8571 17.2788 22.8571H21.985C22.4669 22.8571 22.8571 22.4605 22.8571 21.9707V17.1856Z"
                                    :fill="layout == 9 ? '#1D232B' : '#999EA4'" />
                            </svg>
                        </div>
                        <div class="p-[0.5rem] cursor-pointer" :class="layout == 12 ? 'rounded-[0.5rem] bg-[#F4F4F5]' : ''" @click="handlerGrid(12)">
                            <!-- <SvgIcon width="1.375rem" height="1.375rem" icon="twelve-grid"
                                :color="layout == 12 ? '#1D232B' : '#999EA4'" /> -->
<svg xmlns="http://www.w3.org/2000/svg" width="1.9375rem" height="1.4375rem" viewBox="0 0 31 23" fill="none">
  <path d="M6.45144 0.887355C6.45144 0.397556 6.06115 0 5.57927 0H0.87306C0.390286 0 0 0.396676 0 0.887355V5.67062C0 6.16042 0.390286 6.55707 0.87306 6.55707H5.5784C6.06031 6.55707 6.45057 6.16039 6.45057 5.67062L6.45144 0.887355ZM14.5627 0.887355C14.5627 0.397556 14.1724 0 13.6896 0H8.98251C8.50149 0 8.11034 0.396676 8.11034 0.887355V5.67062C8.11034 6.16042 8.50149 6.55707 8.98251 6.55707H13.6896C14.1724 6.55707 14.5627 6.16039 14.5627 5.67062V0.887355ZM6.45144 8.94246C6.45144 8.45266 6.06115 8.05601 5.57927 8.05601H0.87306C0.390286 8.05601 0 8.45269 0 8.94246V13.7266C0 14.2182 0.390286 14.6131 0.87306 14.6131H5.5784C6.06031 14.6131 6.45057 14.2182 6.45057 13.7266L6.45144 8.94246ZM14.5627 8.94246C14.5627 8.45266 14.1724 8.05601 13.6896 8.05601H8.98251C8.50149 8.05601 8.11034 8.45269 8.11034 8.94246V13.7266C8.11034 14.2182 8.50149 14.6131 8.98251 14.6131H13.6896C14.1724 14.6131 14.5627 14.2182 14.5627 13.7266V8.94246ZM6.45144 17.1856C6.45144 16.6976 6.06115 16.2992 5.57927 16.2992H0.87306C0.390286 16.2992 0 16.6976 0 17.1856V21.9707C0 22.4605 0.390286 22.8571 0.87306 22.8571H5.5784C6.06031 22.8571 6.45057 22.4605 6.45057 21.9707L6.45144 17.1856ZM14.5627 17.1856C14.5627 16.6976 14.1724 16.2992 13.6896 16.2992H8.98251C8.50149 16.2992 8.11034 16.6976 8.11034 17.1856V21.9707C8.11034 22.4605 8.50149 22.8571 8.98251 22.8571H13.6896C14.1724 22.8571 14.5627 22.4605 14.5627 21.9707V17.1856Z" :fill="layout == 12 ? '#1D232B' : '#999EA4'"/>
  <path d="M22.4514 0.887355C22.4514 0.397556 22.0612 0 21.5793 0H16.8731C16.3903 0 16 0.396676 16 0.887355V5.67062C16 6.16042 16.3903 6.55707 16.8731 6.55707H21.5784C22.0603 6.55707 22.4506 6.16039 22.4506 5.67062L22.4514 0.887355ZM30.5627 0.887355C30.5627 0.397556 30.1724 0 29.6896 0H24.9825C24.5015 0 24.1103 0.396676 24.1103 0.887355V5.67062C24.1103 6.16042 24.5015 6.55707 24.9825 6.55707H29.6896C30.1724 6.55707 30.5627 6.16039 30.5627 5.67062V0.887355ZM22.4514 8.94246C22.4514 8.45266 22.0612 8.05601 21.5793 8.05601H16.8731C16.3903 8.05601 16 8.45269 16 8.94246V13.7266C16 14.2182 16.3903 14.6131 16.8731 14.6131H21.5784C22.0603 14.6131 22.4506 14.2182 22.4506 13.7266L22.4514 8.94246ZM30.5627 8.94246C30.5627 8.45266 30.1724 8.05601 29.6896 8.05601H24.9825C24.5015 8.05601 24.1103 8.45269 24.1103 8.94246V13.7266C24.1103 14.2182 24.5015 14.6131 24.9825 14.6131H29.6896C30.1724 14.6131 30.5627 14.2182 30.5627 13.7266V8.94246ZM22.4514 17.1856C22.4514 16.6976 22.0612 16.2992 21.5793 16.2992H16.8731C16.3903 16.2992 16 16.6976 16 17.1856V21.9707C16 22.4605 16.3903 22.8571 16.8731 22.8571H21.5784C22.0603 22.8571 22.4506 22.4605 22.4506 21.9707L22.4514 17.1856ZM30.5627 17.1856C30.5627 16.6976 30.1724 16.2992 29.6896 16.2992H24.9825C24.5015 16.2992 24.1103 16.6976 24.1103 17.1856V21.9707C24.1103 22.4605 24.5015 22.8571 24.9825 22.8571H29.6896C30.1724 22.8571 30.5627 22.4605 30.5627 21.9707V17.1856Z" :fill="layout == 12 ? '#1D232B' : '#999EA4'"/>
</svg>
                        </div>
                    </div>
                </div>
                <!--floorplan control  -->
                <div class="h-[3.5rem] flex items-center gap-[0.75rem] mr-[1.5rem]" v-if="isTarget">
                    <div class="justify-center text-[#09090B] text-[0.875rem] font-['medium']">Heat Map</div>
                    <div class="w-[2.5rem] h-[1.25rem] rounded-full  relative cursor-pointer"
                        :class="isSwitch ? 'bg-[#3F83F8]' : 'bg-[#9CA3AF]'" @click="handlerSwitch">
                        <div class="w-[1rem] h-[1rem] rounded-full bg-white absolute top-[0.125rem] transition-all duration-300 ease-in-out"
                            :class="isSwitch ? 'left-[1.375rem]' : 'left-[0.125rem]'">
                        </div>
                    </div>
                </div>
                <div
                    class="w-[12.875rem] h-[2.5rem] p-[0.25rem] rounded-[0.5rem] bg-[#F4F4F5] flex items-center gap-[0.25rem] relative">
                    <div class="w-[6.0625rem] px-[0.75rem] py-[0.375rem] flex items-center justify-center cursor-pointer relative z-[10]"
                        @click="handlerTarget">
                        <div class="justify-start  text-[0.875rem] font-['medium']"
                            :class="isTarget ? 'text-[#09090B]' : 'text-[#52525B]'">Floor Plan</div>
                    </div>
                    <div class="w-[6.0625rem] px-[0.75rem] py-[0.375rem] flex items-center justify-center cursor-pointer relative z-[10]"
                        @click="handlerTarget">
                        <div class="justify-start text-[0.875rem] font-['medium']"
                            :class="isTarget ? 'text-[#52525B]' : 'text-[#09090B]'">CCTV</div>
                    </div>
                    <div class="w-[6.0625rem] h-[2rem] px-[0.75rem] py-[0.375rem] bg-[#fff] absolute transition-all duration-300 ease-in-out"
                        :class="isTarget ? 'left-[0.25rem]' : 'left-[6.5rem]'"></div>
                </div>
            </div>

        </div>
        <div class="border-b-[0.0625rem] border-[#E5E7EB] mt-[0.625rem]">

        </div>
        <!-- cctv -->
        <div v-if="!isTarget">
            <Cctv :layout="layout" :pageType="pageType" @updatePageType="updatePageType" />
        </div>
        <div v-else>
            <FloorPlan :isSwitch="isSwitch" />
        </div>
        <!-- table -->
        <div>
            <SectionTable />
        </div>
    </div>
</template>
<script setup>
import Cctv from './component/Cctv.vue';
import FloorPlan from './component/FloorPlan.vue';
import SectionTable from './component/SectionTable.vue';
import { ref, computed } from 'vue'
const isTarget = ref(false)
const isSwitch = ref(false)
const layout = ref(1)
const pageType = ref(1)
const isLeft = ref(false)
const isRight = ref(false)

const handlerTarget = () => {
    isTarget.value = !isTarget.value
}
const handlerGrid = (val) => {
    pageType.value = 1
    layout.value = val
}
const handlerSwitch = () => {
    isSwitch.value = !isSwitch.value
}
const handlerClick = (val) => {
    if (val == 'left') {
        pageType.value--
    } else {
        pageType.value++
    }
}
const updatePageType = (val) => {
    pageType.value = val
}
</script>
<style lang="scss" scoped></style>