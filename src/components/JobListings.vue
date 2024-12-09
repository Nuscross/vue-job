<script setup>

import { RouterLink } from "vue-router";
import { ref, onMounted, reactive } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import JobCard from "./JobCard.vue";

defineProps({
  limit: {
    type: Number
  },
  showButton: {
    type: Boolean,
    default: false
  }
});

/* const jobs = ref([]); */
const state = reactive({
  jobs: [],
  isLoading: true
});

onMounted(async () => {
  try {
    const response = await fetch("/api/jobs");
    const data = await response.json();
    // jobs.value = data;
    state.jobs = data;
  }
  catch {
    console.error("Error fetching jobs", error);
  }
  finally {
    state.isLoading = false;
  }
});

</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container:m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div v-if="state.isLoading" class="text-center text-grey-500 py-6">
        <PulseLoader />
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <JobCard v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
      </div>
    </div>
  </section>
  <section class="m-auto max-w-lg my-10 px-6" v-if="showButton">
    <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">
      View All Jobs
    </RouterLink>
  </section>
</template>