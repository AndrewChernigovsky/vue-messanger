<script setup>
import { useCounterStore } from '../stores/counter/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore();
const { count } = storeToRefs(store);
const { increment } = store;

</script>

<template>
	<button type="button" @click="increment">count is {{ count }}</button>
</template>
