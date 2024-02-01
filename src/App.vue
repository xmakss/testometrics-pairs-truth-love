<template>
  <div class="grid grid-nogutter">
    <div class="col-2">
      <img class="mt-2 mb-2" alt="I love you" src="./assets/logo.png">
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

  <div class="grid grid-nogutter">
    <div class="col-2 layout-left-block align-self-center">
      <Carousel :value="products" :numVisible="1" :numScroll="1" circular :autoplayInterval="10000" :showIndicators="false">
        <template #item="slotProps">
          <img :src="getImgUrl(slotProps.data.name)" class="border-round w-full" />
        </template>
      </Carousel>
    </div>
    <div class="col-10 layout-content">
      <Card class="ml-8 mr-8 mt-8 border-round-2xl">
        <template #title> Сам тест на совместимость</template>
        <template #subtitle> Card subtitle</template>
        <template #content>
          <p class="m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque
            quas!
          </p>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Save"/>
          <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em"/>
        </template>
      </Card>

    </div>
  </div>

</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      searchValue: "",
      products: [],
      value: null,
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
  },
  created() {
    for (let i = 1; i < 61; i++) {
      this.products.push({name: i})
    }
  },
  methods: {
    getImgUrl(imgNumber) {
      return require(`./assets/loveimg/${imgNumber}.jpg`)
    }
  }
}
</script>

<style>
body {
  margin: 0;
background: rgb(200,168,192);
background: linear-gradient(27deg, rgb(236, 177, 224) 10%, rgb(208, 168, 198) 18%, rgb(232, 191, 224) 30%, rgb(210, 149, 209) 77%, rgb(187, 149, 194) 100%);
}

.p-breadcrumb {
  padding-left: 5px;
}

.p-menuitem-text {
  font-weight: 550;
  color: #072e42 !important;
}

.p-menuitem-icon {
  font-weight: 580 !important;
  color: #072e42 !important;
}

.p-menuitem-separator {
  color: #072e42 !important;
}

.p-card {
  box-shadow: -1px -1px 8px rgb(222 197 216), 0px 2px 4px rgb(246 223 246), -1px -1px 4px -1px rgb(154 120 147) !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.layout-container {
  background: #ffffff;
  min-height: 100vh;
}

.layout-left-block {

}

.layout-topbar {
  height: 5rem;
  padding: 0 2rem 0 1rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  padding-left: 21rem;
}

.layout-sidebar {
  width: 20rem;
  overflow: visible;
  position: fixed;
  display: flex;
  flex-direction: column;
  height: calc(100% - 5rem);
  left: 0;
  top: 5rem;
  -webkit-user-select: none;
  user-select: none;
  background: #ffffff;
  z-index: 999;
}

.layout-content-wrapper {
  margin-left: 20rem;
  padding-top: 5rem;
}

.layout-content {
  border-top: 1px solid #dba7d7;
  overflow: auto;
  height: calc(100vh - 5rem);
  padding: 2rem;
  background-color: #fcfcfd;
  border-top-left-radius: 30px;
  box-shadow: inset 2px 2px 4px #e5bade;
}
</style>
