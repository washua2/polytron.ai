<template>
    <div class="w-[26.125rem] h-[61rem]">
        <!-- title -->
        <div class="title px-[1.4375rem] py-[0.375rem] flex items-center justify-start relative">
                <SvgIcon width="0.1875rem" height="2.3125rem" icon="title-left" color="#1166E3" class="absolute left-0 top-[-0.375rem]"/>
                <SvgIcon width="4.75rem" height="0.625rem" icon="title-bottom" color="#278AFF" class="absolute bottom-[-0.3125rem] left-0"/>
            <div class="justify-start text-[#09090B] text-[1.125rem] font-['light']">Total Visitors</div>
        </div>
        <!-- Total Visitors -->
        <div
            class="w-full h-[57.25rem] pl-[1.5625rem] pr-[1.4375rem] pt-[1.6875rem] border-r-[0.125rem] border-b-[0.125rem] border-l-[0.125rem] border-[#E5E7EB]">
            <!-- title -->
            <div class="flex items-center gap-[0.625rem]">
                <SvgIcon width="0.75rem" height="0.625rem" icon="blue-icon" />
                <div class="w-[9.6875rem] justify-start text-[#09090B] text-[1rem] font-['light']">Total Visitors</div>
            </div>
            <!-- data total -->
            <div class="w-[22.8125rem] flex items-center gap-[1.0625rem] mt-[1rem]">
                <div class="box pt-[0.9375rem] flex items-center  flex-col">
                    <SvgIcon width="1.3125rem" height="1.5rem" icon="total-visitors" />
                    <div class="justify-start text-[#52525B] text-[0.875rem] font-['light'] mt-[0.875rem]">Total Visitors</div>
                    <div class="flex items-center gap-[0.75rem] mt-[0.5rem] mb-[0.375rem]">
                        <div class="justify-start text-[#09090B] text-[1.125rem] font-['bold']">2,540</div>
                        <div class="justify-start text-emerald-400 text-[0.75rem] font-['bold']">+ 15.5 %</div>
                    </div>
                    <div class="justify-start text-[#52525B] text-[0.875rem] font-['light'] mb-[0.25rem]">vs Yesterday
                    </div>
                    <div class="justify-start text-red-500 text-[0.75rem] font-['bold']">- 2.65 %</div>
                </div>
                <div class="box pt-[0.9375rem] flex items-center  flex-col">
                    <SvgIcon width="1.3125rem" height="1.5rem" icon="visit-duration" />
                    <div class="justify-start text-[#52525B] text-[0.875rem] font-['light'] mt-[0.875rem]">Visit Duration</div>
                    <div class="flex items-center gap-[0.75rem] mt-[0.5rem] mb-[0.375rem]">
                        <div class="justify-start"><span
                                class="text-[#09090B] text-[1.125rem] font-['bold']">20</span><span
                                class="text-[#09090B] text-[0.75rem] font-['bold']"> </span><span
                                class="text-[#52525B] text-[0.75rem] font-['bold']"> mins</span></div>
                        <div class="justify-start text-emerald-400 text-[0.75rem] font-['bold']">+ 8.85 %</div>
                    </div>
                    <div class="justify-start text-[#52525B] text-[0.875rem] font-['light'] mb-[0.25rem]">vs Yesterday
                    </div>
                    <div class="justify-start text-red-500 text-[0.75rem] font-['bold']">- 4.05 %</div>
                </div>
            </div>
            <!-- Busiest Hour -->
            <div
                class="w-[23.3125rem] h-[4rem] pl-[1.625rem] rounded-[0.375rem] border-[0.0625rem] border-[#E5E7EB] mt-[1.0625rem] bg-[#fff] flex items-center">
                <div>
                    <SvgIcon width="1.6875rem" height="1.8125rem" icon="personal" />
                </div>
                <div class="w-[6.0625rem] flex items-start flex-wrap ml-[1.625rem] mr-[3.125rem]">
                    <div class="w-[6.0625rem] h-[1.75rem] justify-start"><span
                            class="text-[#09090B] text-[1.125rem] font-['bold']">12 </span><span
                            class="text-white text-[0.75rem] font-['bold']"> </span><span
                            class="text-[#52525B] text-[0.75rem] font-['bold']">PM </span><span
                            class="text-[#09090B] text-[1.375rem] font-['bold']">- </span><span
                            class="text-[#09090B] text-[1.125rem] font-['bold']">1</span><span
                            class="text-white text-xl font-bold font-['DS-Digital']"> </span><span
                            class="text-[#52525B] text-[0.75rem] font-['bold']"> PM</span></div>
                    <div class="justify-start text-[#52525B] text-[0.875rem] font-['light']">Busiest Hour</div>
                </div>
                <div class="w-[6.1875rem] flex items-start justify-center flex-wrap">
                    <div class="w-[6.1875rem] h-[1.1875rem] mt-[0.25rem] relative">
                        <div class="left-0 top-0 absolute justify-start text-[#09090B] text-[1rem] font-['medium']">
                            15</div>
                        <div
                            class="left-[3.875rem] top-0 absolute justify-start text-[#09090B] text-[1rem] font-['medium']">
                            2025</div>
                        <div
                            class="left-[1.6875rem] top-0 absolute justify-start text-[#09090B] text-[1rem] font-['medium']">
                            Apr</div>
                    </div>
                    <div class="mt-[0.25rem] justify-start text-[#52525B] text-[0.875rem] font-['light']">Busiest Day
                    </div>
                </div>
            </div>
            <!-- Real-Time Visitor Flow -->
            <div class="mt-[1.5rem]">
                <div class="flex items-center gap-[0.375rem] mb-[1.125rem]">
                    <SvgIcon width="1.75rem" height="1.5rem" icon="dots" class="ml-[-0.375rem]" />
                    <div class="h-[1.1875rem] justify-start text-[#09090B] text-[1rem] font-['light'] leading-[140%]">
                        Real-Time Visitor Flow</div>
                </div>
                <div id="visitorFlow" class="w-[22.4375rem] h-[12.5rem]"></div>
            </div>
            <div>
                <!-- title -->
                <div class="flex items-center gap-[0.625rem]">
                    <SvgIcon width="0.75rem" height="0.625rem" icon="blue-icon" />
                    <div class="w-[9.6875rem] justify-start text-[#09090B] text-[1rem] font-['light']">Current Active
                    </div>
                </div>
                <div class="flex items-center mt-[1.25rem]">
                    <div class="w-[2.6875rem] h-[2.6875rem] relative">
                        <img src="@/assets/icons/current-active-box.png" class="w-[2.6875rem] h-[2.6875rem]" alt="">
                        <SvgIcon width="1.5rem" height="1.5rem" icon="current-active"
                            class="absolute top-[1.5rem] left-[1.5rem] transform translate-x-[-0.875rem] translate-y-[-0.875rem]" />
                    </div>
                    <div class="w-[5.5625rem] flex flex-col items-center ml-[3.0625rem] mr-[4.5625rem]">
                        <div class="justify-start text-[#09090B] text-[1.125rem] font-['bold']">2,165</div>
                        <div class="w-[5.5625rem] justify-start text-[#52525B] text-[0.875rem] font-['light']">Total
                            Capacity</div>
                    </div>
                    <div class="w-[6.5rem] flex flex-col items-center">
                        <div class="justify-start"><span
                                class="text-[#09090B] text-[1.125rem] font-['bold']">70.5</span><span
                                class="text-[#09090B] text-xl font-['bold']"> </span><span
                                class="text-[#09090B]/70 text-[0.75rem] font-['bold']"> %</span></div>
                        <div class="w-[6.5rem] justify-start text-[#52525B] text-[0.875rem] font-['light']">Current
                            Capacity</div>
                    </div>
                </div>
            </div>
            <div class="mt-[1.25rem]">
                <div class="flex items-center gap-[0.375rem] mb-[1.125rem]">
                    <SvgIcon width="1.75rem" height="1.5rem" icon="dots" class="ml-[-0.375rem]" />
                    <div class="h-[1.1875rem] justify-start text-[#09090B] text-[1rem] font-['light'] leading-[140%]">
                        Zone Occupancy Status</div>
                </div>
                <div>
                    <div class="flex items-center justify-between">
                        <div
                            class="self-stretch justify-start text-[#52525B] text-[0.875rem] font-['light'] tracking-tight">
                            Section A Health & Wellness</div>
                        <div class="justify-start text-[#52525B] text-[1rem] font-['medium']">82%</div>
                    </div>
                    <div class="flex items-center mt-[0.5625rem]">
                        <div class="w-[80%] h-[0.75rem] bg-[#11D7E3D9]"></div>
                        <div class="w-[20%] h-[0.75rem] bg-[#E5E7EB]"></div>
                    </div>
                </div>
                <div class="mt-[0.75rem]">
                    <div class="flex items-center justify-between">
                        <div
                            class="self-stretch justify-start text-[#52525B] text-[0.875rem] font-['light'] tracking-tight">
                            Section B Central Zone</div>
                        <div class="justify-start text-[#52525B] text-[1rem] font-['medium']">74%</div>
                    </div>
                    <div class="flex items-center mt-[0.5625rem]">
                        <div class="w-[74%] h-[0.75rem] bg-[#1166E3D9]"></div>
                        <div class="w-[26%] h-[0.75rem] bg-[#E5E7EB]"></div>
                    </div>
                </div>
                <div class="mt-[0.75rem]">
                    <div class="flex items-center justify-between">
                        <div
                            class="self-stretch justify-start text-[#52525B] text-[0.875rem] font-['light'] tracking-tight">
                            Section C F&B & Medical</div>
                        <div class="justify-start text-[#52525B] text-[1rem] font-['medium']">89%</div>
                    </div>
                    <div class="flex items-center mt-[0.5625rem]">
                        <div class="w-[89%] h-[0.75rem] bg-[#23CD94D9]"></div>
                        <div class="w-[11%] h-[0.75rem] bg-[#E5E7EB]"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { renderChart } from "@/utils/echarts/visitorFlow.js"
import { ref, onMounted, watch, nextTick } from 'vue'
onMounted(() => {
    renderChart('visitorFlow')
})
</script>
<style lang="scss" scoped>
.title {
    width: 26.125rem;
    height: 2.1056rem;
    flex-shrink: 0;
    border: 0.0625rem solid #E5E7EB;
}

.box {
    width: 11.125rem;
    height: 10.625rem;
    border-radius: 0.375rem;
    flex-shrink: 0;
    border: 0.0625rem solid #E5E7EB;
    background: #fff;
}
</style>