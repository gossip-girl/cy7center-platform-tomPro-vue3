<template>
  <div class="troila-table">

    <el-button
      class="mt-4"
      style="width: 100%"
      @click="onAddItem"
    >Add Item</el-button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const tableData = ref([
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]);

const deleteRow = (index) => {
  tableData.value.splice(index, 1);
};

const onAddItem = () => {
  tableData.value.push({
    date: 1,
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  });
};
</script>

<style scoped lang="scss">

</style>
