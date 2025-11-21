<template>
    <div class="w-full h-[17.5rem] border-[0.125rem] border-[#E5E7EB] mt-[1.5rem]">
        <!-- header -->
        <div>
            <div class="h-[2.6875rem] flex items-center px-[1.25rem] gap-[2rem] border-b-[0.125rem] border-[#E5E7EB]">
                <div class="py-[0.75rem] cursor-pointer"
                    :class="count == index ? 'border-b-[0.125rem] border-[#3F83F8] text-[#3F83F8]' : 'border-b-[0.125rem] border-white/0  text-[#09090B]'"
                    v-for="(item, index) in headerList" :key="index" @click="handlerSelect(index)">
                    <div class="h-[1.1875rem] justify-start  text-[1rem] font-['light']">{{ item.title }}</div>
                </div>
            </div>
        </div>
        <!-- main -->
        <div class="p-[1.25rem] flex items-start gap-[1.25rem]">
            <div class="w-[20.8125rem] flex items-start border-[0.125rem] border-[#E5E7EB] rounded-[0.375rem]" v-for="(item,index) in sectionList" :key="index">
                <div class="w-[8.8125rem] h-[12.3125rem] pt-[0.75rem] border-r-[0.125rem] border-[#E5E7EB]">
                    <div class="w-[8.8125rem] flex justify-center flex-wrap">
                        <SvgIcon width="1.3125rem" height="1.3125rem" icon="services" />
                        <div class="w-[8.8125rem] mt-[0.75rem] text-center justify-start text-[#09090B] text-[0.875rem] font-['light']">{{ item.title }}</div>
                        <div class="w-full mt-[0.625rem] mb-[0.625rem] border-b-[0.125rem] border-[#E5E7EB]"></div>
                        <div class="w-[8.8125rem] text-center justify-start text-[#09090B] text-[0.875rem] font-['bold']">{{ item.totalVisitors }}</div>
                        <div class="w-[8.8125rem] text-center justify-start text-[#606067] text-[0.75rem] font-['light']">Total visitors</div>
                        <div class="w-[8.8125rem] mt-[1.125rem] text-center justify-start text-[#09090B] text-[0.875rem] font-['bold']">{{ item.visitDuration }} mins</div>
                        <div class="w-[8.8125rem] text-center justify-start text-[#606067] text-[0.75rem] font-['light']">Visit Duration</div>
                    </div>
                </div>
                <div class="w-[11.9375rem] h-[12.3125rem]">
                    <div>
                        <div class="pt-[0.8125rem] pl-[1.1875rem] pr-[1.75rem] pb-[0.6875rem] border-b-[0.125rem] border-[#E5E7EB] flex items-center" v-for="(v,i) in item.cameras" :key="i">
                            <SvgIcon width="0.9375rem" height="0.875rem" icon="cctv" />
                            <div class="h-[1rem] justify-start text-[#09090B] text-[0.875rem] font-['light'] ml-[0.5625rem] leading-[130%]">{{ v.name }}</div>
                            <div class="w-[0.5rem] h-[0.5rem] rounded-full  ml-[2.375rem]" :class="v.status === 'online' ? 'bg-[#1EA262]' : 'bg-[#DF872E]'"></div>
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
  { title: "Section A Health & Wellness" },
  { title: "Section B Central Zone" },
  { title: "Section C F&B & Medical" }
])

// 所有 section 的总数据
const allSectionData = {
  0: [
    {
      title: "Medical Services",
      totalVisitors: 365,
      visitDuration: 25,
      cameras: [
        { name: "Camera139", status: "online" },
        { name: "Camera138", status: "online" },
        { name: "Camera137", status: "online" }
      ]
    },
    {
      title: "Wellness",
      totalVisitors: 280,
      visitDuration: 65,
      cameras: [
        { name: "Camera133", status: "online" },
        { name: "Camera132", status: "warning" }
      ]
    },
    {
      title: "Services",
      totalVisitors: 190,
      visitDuration: 16,
      cameras: [
        { name: "Camera134", status: "online" }
      ]
    }
  ],
  1: [
    {
      title: "F&B",
      totalVisitors: 450,
      visitDuration: 30,
      cameras: [
        { name: "Camera121", status: "online" },
        { name: "Camera122", status: "warning" }
      ]
    }
  ],
  2: [
    {
      title: "Medical Centre",
      totalVisitors: 210,
      visitDuration: 22,
      cameras: [
        { name: "Camera150", status: "online" }
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
