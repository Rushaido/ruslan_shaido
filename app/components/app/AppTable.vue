<template>
  <table class="app-table">
    <thead class="app-table__head">
      <tr class="app-table__head-tr">
        <th class="app-table__th"></th>
        <th v-for="col in headers" :key="col" class="app-table__th">{{ col }}</th>
      </tr>
    </thead>
    <tbody class="app-table__body">
      <tr v-for="row in data" :key="row.header" class="app-table__tr">
        <th class="app-table__body-th">{{ row.header }}</th>
        <td v-for="(val, i) in row.values" :key="i" class="app-table__td">
          <span v-if="val === true" class="app-table__ok"></span>
          <template v-else>{{ val }}</template>
        </td>
      </tr>
    </tbody>
    <tfoot class="app-table__footer">
      <tr class="app-table__footer-tr">
        <th class="app-table__footer-th"></th>
        <th v-for="col in headers" :key="col" class="app-table__footer-th">{{ col }}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    required: true
  },
  data: {
    type: Array,
    required: true
  }
})
</script>

<style lang="less">
.app-table {
  width: 100%;
  border-collapse: collapse;
  color: @black;
  text-align: center;

  &__th {
    height: 85px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
  }

  &__footer-th {
    height: 60px;
    font-size: 0;
  }

  &__th,
  &__footer-th {
    box-sizing: border-box;
    padding: 10px;
    border-right: 1px solid #BFBFBF;
    text-transform: uppercase;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      border-right: none;
      padding-right: 0;
    }
  }

  &__body-th {
    box-sizing: border-box;
    height: 50px;
    padding: 10px 10px 10px 0;
    border-top: 1px solid #BFBFBF;
    border-bottom: 1px solid #BFBFBF;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    text-align: left;
  }

  &__td {
    box-sizing: border-box;
    height: 50px;
    padding: 10px;
    border: 1px solid #BFBFBF;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    &:last-child {
      border-right: none;
      padding-right: 0;
    }
  }

  &__tr:nth-child(2n-1) {
    background-color: fade(@black, 3%);
  }

  &__ok {
    display: block;
    position: relative;
    width: 26px;
    height: 26px;
    margin: auto;
    border-radius: 50%;
    background-color: @black;

    &::after {
      content: "";
      box-sizing: border-box;
      display: block;
      position: absolute;
      top: 4px;
      left: 9px;
      width: 8px;
      height: 14px;
      border-right: 2px solid #ffffff;
      border-bottom: 2px solid #ffffff;
      transform: rotate(45deg);
    }
  }
}
</style>
