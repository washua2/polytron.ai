<template>
    <div class="py-[1.125rem] px-[1.625rem] border-[0.0625rem] border-[##E4E4E7]">
        <div class="flex items-center">
            <div class="flex items-center gap-[1.8125rem]">
                <SvgIcon width="1.25rem" height="1.25rem" icon="menu" color="#9CA3AF" />
                <SvgIcon width="10.125rem" height="1.1875rem" icon="logo" class=" cursor-pointer" @click="handlerJump('logo')"/>
            </div>
            <div class="flex items-center gap-[0.6875rem] ml-[4.5rem] cursor-pointer" @click="handlerJump('live-view')">
                <SvgIcon width="0.75rem" height="0.875rem" icon="live-view" />
                <div
                    class="h-[1.6875rem] text-center justify-start text-zinc-950 text-[1.125rem] font-['Roboto'] font-[400] leading-[1.75rem]">
                    LIVE View</div>
            </div>
            <div class="flex items-center gap-[0.625rem] ml-[2.5rem] cursor-pointer" @click="handlerJump('cameras')">
                <SvgIcon width="1rem" height="0.75rem" icon="cameras" color="#71717A" />
                <div
                    class="h-[1.6875rem] text-center justify-start text-[#09090B] text-[1.125rem] font-['Roboto'] font-[400] leading-[1.75rem]">
                    Cameras</div>
            </div>
            <div class="flex items-center gap-[0.875rem] ml-[2.6875rem] cursor-pointer"
                @click="handlerJump('playback')">
                <SvgIcon width="0.8125rem" height="0.9375rem" icon="playback" color="#71717A" />
                <div
                    class="h-[1.6875rem] text-center justify-start text-[#09090B] text-[1.125rem] font-['Roboto'] font-[400] leading-[1.75rem]">
                    Playback</div>
            </div>
            <div class="flex items-center gap-[0.625rem] ml-[2.5rem] cursor-pointer"
                @click="handlerJump('notification')">
                <SvgIcon width="0.875rem" height="0.875rem" icon="notification" color="#71717A" />
                <div class="flex items-center gap-[0.75rem]">
                    <div
                        class="h-[1.6875rem] text-center justify-start text-[#09090B] text-[1.125rem] font-['Roboto'] font-[400] leading-[1.75rem]">
                        Notification
                    </div>
                    <!-- <div class="w-[2.1875rem] h-[1.0625rem] relative bg-[#FF3A3A] rounded-3xl flex items-center justify-center">
                        <div
                            class="text-center justify-center text-white text-[0.75rem] font-[400] font-['Roboto'] tracking-tight">
                            99+</div>
                    </div> -->
                </div>
            </div>
            <!-- <div class="flex items-center gap-[0.625rem] ml-[2.75rem]">
                <SvgIcon width="1.25rem" height="1.25rem" icon="ai-code" color="#71717A" />
                <div
                    class="h-[1.6875rem] text-center justify-start text-[#71717A] text-[1.125rem] font-['Roboto'] font-[400] leading-[1.75rem]">
                    AI Code</div>
            </div> -->
            <div
                class="w-[9.4375rem] h-[2.1875rem] flex items-center justify-center gap-[0.625rem] ml-[2.75rem] bg-gradient-to-r from-[#4187FD] to-[#1967ED] rounded-[0.375rem]">
                <SvgIcon width="1.25rem" height="1.25rem" icon="dashboard" color="#fff" />
                <div class="h-[1.6875rem] justify-start text-white text-[1.125rem] font-['light'] leading-[160%]">
                    Dashboard</div>
            </div>
        </div>

    </div>
</template>
<script setup>

const handlerJump = (val) => {
    switch (val) {
        case 'live-view':
            window.open('https://www.baidu.com', '_self')
            break;
        case 'cameras':
            window.open("https://www.baidu.com", "_self");
            break;
        case 'playback':
            window.open("https://www.baidu.com", "_self");
            break;
        case 'notification':
            window.open("https://www.baidu.com", "_self");
            break;
        default:
            break;
    }
}
</script>
<style lang="scss" scoped></style>