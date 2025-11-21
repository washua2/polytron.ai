<template>
    <div class="w-full flex justify-center font-inter" style="font-family: inter !important;">
        <nav aria-label="Page navigation example">
            <ul class="inline-flex -space-x-px text-[1.5rem]">
                <li @click="goToPage(currentPage - 1)" class="flex items-center cursor-pointer justify-center w-[4.375rem] h-[3.3125rem] border-box text-[1.875rem] px-7 py-[1rem] ml-0 text-white bg-transparent border-[0.0625rem] border-r-[0px] border-[#E6B0FF] hover:bg-transparent hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <a href="javascript:;" :style="{ '--tw-bg-opacity': bgOpacity }">
                        <img src="@/assets/icon/chevron-left.svg" alt="previous" class="w-[0.75rem] h-[0.75rem]" />
                    </a>
                </li>
                <div v-for="page in visiblePages" :key="page">
                    <li>
                        <a href="javascript:;" @click="goToPage(page)" :class="{
                            'text-white': currentPage === page,
                            'bg-transparent': currentPage === page,
                        }" :style="{ '--tw-bg-opacity': bgOpacity }"
                            class="flex items-center justify-center w-[4.375rem] cursor-pointer h-[3.3125rem] border-box text-[1.875rem] px-7 py-[1rem] leading-3 text-white bg-transparent border-[0.0625rem] border-r-[0px] border-[#E6B0FF]  hover:bg-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            {{ page }}
                        </a>
                    </li>
                </div>
                <li @click="goToPage(currentPage + 1)" class="flex cursor-pointer items-center justify-center w-[4.375rem] h-[3.3125rem] border-box text-[1.875rem] px-7 py-[1rem] ml-0 text-white bg-transparent border-[0.0625rem] border-[#E6B0FF]  hover:bg-transparent hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <a href="javascript:;" :style="{ '--tw-bg-opacity': bgOpacity }">
                        <img src="@/assets/icon/chevron-right.svg" alt="next" class="w-[0.75rem] h-[0.75rem]" />
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script setup>
import { ref, computed, defineProps, toRefs,defineEmits } from "vue"
const props = defineProps({
    searchCCTVs: {
        type: String,
        default: ""
    },
    totalPages:{
        type:Number,
        default:1
    }
})
const emit = defineEmits(["currentToPage"])
const { searchCCTVs,totalPages} = toRefs(props)
const currentPage = ref(1);
const itemsPerPage = ref(16);

/**
 * 背景透明度调节功能
 */
const bgOpacity = ref(95);
const maxVisiblePages = 5; // Adjust as needed

// const totalPages = computed(() => {
//     return 10
// });


const visiblePages = computed(() => {
    const pages = [];

    if (totalPages.value <= maxVisiblePages) {
        for (let i = 1; i <= totalPages.value; i++) {
            pages.push(i);
        }
    } else {
        if (currentPage.value === 1) {
      for (let i = 1; i <= maxVisiblePages - 2; i++) {
        pages.push(i);
      }
      if (maxVisiblePages < totalPages.value) {
        pages.push("...");
      }
      pages.push(totalPages.value);
    } else if (currentPage.value <= totalPages.value - 3) {
      if (currentPage.value > 3) {
        pages.push(1);
        // if (maxVisiblePages < totalPages.value) {
        //   pages.push("...");
        // }
      }
      for (let i = currentPage.value - 1; i <= currentPage.value + 1; i++) {
        pages.push(i);
      }
      if (maxVisiblePages < totalPages.value) {
        pages.push("...");
      }
      pages.push(totalPages.value);
    } else if (
      currentPage.value > totalPages.value - 3 &&
      currentPage.value < totalPages.value
    ) {
      // if (currentPage.value > 3) {
      //   pages.push(1);
      //   if (maxVisiblePages < totalPages.value) {
      //     pages.push("...");
      //   }
      // }
      for (let i = currentPage.value - 1; i <= totalPages.value; i++) {
        pages.push(i);
      }
    } else if (currentPage.value === totalPages.value) {
      // pages.push(1);
      // if (maxVisiblePages < totalPages.value) {
      //   pages.push("...");
      // }
      for (
        let i = totalPages.value - maxVisiblePages + 3;
        i <= totalPages.value;
        i++
      ) {
        pages.push(i);
      }
    }
    }
    return pages;
});
const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
        emit("currentToPage",page)
    }
}
</script>