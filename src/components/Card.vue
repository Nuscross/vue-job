<script setup>

defineProps({
  bgCard: {
    type: String,
    default: "bg-gray-100"
  }
});

</script>

<template>
  <div :class="`${bgCard} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>