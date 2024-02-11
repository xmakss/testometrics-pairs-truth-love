<template>
  <div class="grid grid-nogutter">
    <div class="col-2">
      <div class="clouds"></div>
      <img class="mt-2 mb-2" alt="I love you" src="../assets/logo.png">
    </div>
    <div class="col-10 flex flex-column justify-content-end">
      <div>
        <span class="p-input-icon-left w-full pr-1">
          <i class="pi pi-search"/>
          <InputText v-model="searchValue" placeholder="Поиск по 1056 тестам" class="w-full"/>
        </span>
      </div>
      <div>
        <Breadcrumb :home="home" :model="items" class="bg-transparent border-transparent text-white"/>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "headerPage",
  data() {
    return {
      searchValue: "",
      home: {
        icon: 'pi pi-home'
      },
      items: [
        {label: 'Психологические тесты'},
        {label: 'Любовь и отношения'},
        {label: 'Парные тесты'},
        {label: 'Тест на совместимость'}
      ]
    }
  }
}
</script>

<style scoped>

</style>