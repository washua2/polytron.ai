<template>
  <div
    class="w-full fhd:h-[17.5rem] qhd:h-[17.5rem] uhd:h-[17.5rem] h-[8.125rem] overflow-hidden border-[0.125rem] border-[#E5E7EB] mt-[1.5rem]">
    <!-- header -->
    <div>
      <div class="h-[2.6875rem] flex items-center px-[1.25rem] gap-[2rem] border-b-[0.125rem] border-[#E5E7EB]">
        <div class="py-[0.75rem] cursor-pointer"
          :class="count == index ? 'border-b-[0.125rem] border-[#3F83F8] text-[#3F83F8]' : 'border-b-[0.125rem] border-white/0  text-[#09090B]'"
          v-for="(item, index) in headerList" :key="index" @click="handlerSelect(index)">
          <div class="h-[1.1875rem] justify-start  text-[1rem] font-['medium']">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <!-- main -->
    <div class="pr-[0.3125rem]">

      <div
        class="p-[1.25rem] pr-[0.9375rem] flex items-start gap-[1.25rem] fhd:h-full qhd:h-full uhd:h-full h-[5.625rem] overflow-y-auto scroll">
        <div class="w-[26rem] flex items-start border-[0.125rem] border-[#E5E7EB] rounded-[0.375rem]"
          v-for="(item, index) in sectionList" :key="index">
          <div class="w-[8.8125rem] h-[12.3125rem] pt-[0.75rem] border-r-[0.125rem] border-[#E5E7EB]">
            <div class="w-[8.8125rem] flex items-center justify-center flex-wrap">
              <!-- <SvgIcon width="1.3125rem" height="1.3125rem" icon="services" /> -->
              <!-- <div class="w-[8.8125rem] mt-[0.75rem] text-center justify-start text-[#09090B] text-[0.875rem] font-['medium']">{{ item.title }}</div> -->
              <!-- <div class="w-full mt-[0.625rem] mb-[0.625rem] border-b-[0.125rem] border-[#E5E7EB]"></div> -->
              <div class="w-[8.8125rem] h-[5rem] flex items-center justify-center flex-wrap">
                <div class="w-[8.8125rem] h-[2.5rem] flex items-center justify-center flex-wrap">
                <div class="w-[8.8125rem] text-center justify-start text-[#09090B] text-[0.875rem] font-['bold']">{{
                  item.totalVisitors }}</div>
                <div class="w-[8.8125rem] text-center justify-start text-[#606067] text-[0.75rem] font-['medium']">Total
                  visitors</div>
                  </div>
              </div>
                <div class="w-full h-[0.0625rem] bg-[#E5E7EB]"></div>
              <div class="w-[8.8125rem] h-[5.4375rem] flex items-center justify-center flex-wrap">
                <div class="w-[8.8125rem] h-[2.5rem] flex items-center justify-center flex-wrap">
                <div
                  class="w-[8.8125rem] mt-[1.125rem] text-center justify-start text-[#09090B] text-[0.875rem] font-['bold']">
                  {{ item.visitDuration }} mins</div>
                <div class="w-[8.8125rem] text-center justify-start text-[#606067] text-[0.75rem] font-['medium']">Visit
                  Duration</div>
              </div>
              </div>
            </div>
          </div>
          <div class="w-[22.875rem] h-[12.3125rem] overflow-y-auto scroll">
            <div>
              <div
                class="w-full pt-[0.8125rem] pl-[1.1875rem] pr-[1.75rem] pb-[0.6875rem] border-b-[0.125rem] border-[#E5E7EB] flex items-center"
                v-for="(v, i) in item.cameras" :key="i">
                <SvgIcon width="0.9375rem" height="0.875rem" icon="cctv" />
                <div
                  class="h-[1rem] justify-start text-[#09090B] text-[0.875rem] font-['medium'] ml-[0.5625rem] leading-[130%]">
                  {{ v.name }}</div>
                <div class="w-[0.5rem] h-[0.5rem] rounded-full  ml-[2rem]"
                  :class="v.status === 'online' ? 'bg-[#1EA262]' : 'bg-[#DF872E]'"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const count = ref(0)

const headerList = ref([
  { title: "Section A" },
  { title: "Section B" },
  { title: "Section C" }
])

// 所有 section 的总数据
const allSectionData = {
  0: [
    {
      title: "Medical Services",
      totalVisitors: 365,
      visitDuration: 25,
      cameras: [
        { name: "B001-192.168.128.51", status: "online" },
        { name: "B002-192.168.128.52", status: "online" },
        { name: "B003-192.168.128.53", status: "online" },
        { name: "B003-192.168.128.54", status: "online" },
        { name: "B003-192.168.128.55", status: "online" },
        { name: "B003-192.168.128.56", status: "online" },
        { name: "B003-192.168.128.57", status: "online" },
        { name: "B003-192.168.128.58", status: "online" },
        { name: "B003-192.168.128.59", status: "online" },
      ]
    },
    // {
    //   title: "Wellness",
    //   totalVisitors: 280,
    //   visitDuration: 65,
    //   cameras: [
    //     { name: "B004-192.168.128.60", status: "online" },
    //     { name: "B005-192.168.128.68", status: "warning" }
    //   ]
    // },
    // {
    //   title: "Services",
    //   totalVisitors: 190,
    //   visitDuration: 16,
    //   cameras: [
    //     { name: "B006-192.168.128.69", status: "online" }
    //   ]
    // }
  ],
  1: [
    {
      title: "F&B",
      totalVisitors: 450,
      visitDuration: 30,
      cameras: [
        { name: "B006-192.168.128.60", status: "warning" },
        { name: "B006-192.168.128.61", status: "online" },
        { name: "B006-192.168.128.62", status: "online" },
        { name: "B006-192.168.128.63", status: "online" },
        { name: "B006-192.168.128.64", status: "online" },
        { name: "B006-192.168.128.65", status: "online" },
      ]
    }
  ],
  2: [
    {
      title: "Medical Centre",
      totalVisitors: 210,
      visitDuration: 22,
      cameras: [
        { name: "B006-192.168.128.66", status: "online" },
        { name: "B006-192.168.128.67", status: "online" },
        { name: "B006-192.168.128.68", status: "online" },
        { name: "B006-192.168.128.69", status: "online" },
        { name: "B006-192.168.128.70", status: "online" },
        { name: "B006-192.168.128.71", status: "online" },
        { name: "B006-192.168.128.72", status: "online" },
        { name: "B006-192.168.128.73", status: "online" },
        { name: "B006-192.168.128.74", status: "online" },
        { name: "B006-192.168.128.75", status: "online" },
      ]
    }
  ]
}

// 当前展示的数据
const sectionList = ref(allSectionData[count.value])

// 监听 count，自动切换 sectionList
watch(count, (val) => {
  sectionList.value = allSectionData[val]
})

const handlerSelect = (index) => {
  if (index === count.value) return
  count.value = index
}
</script>
