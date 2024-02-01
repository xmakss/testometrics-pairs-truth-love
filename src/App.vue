<template>
  <div class="grid grid-nogutter">
    <div class="col-2">
      <div class="clouds"></div>
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
      <Carousel :value="products" :numVisible="1" :numScroll="1" circular :autoplayInterval="10000"
                :showIndicators="false">
        <template #item="slotProps">
          <img :src="getImgUrl(slotProps.data.name)" class="border-round w-full"/>
        </template>
      </Carousel>
    </div>
    <div class="col-10 layout-content">
      <Card class="ml-8 mr-8 mt-8 border-round-2xl p-card-shadoww">
        <template #title> Совместима ли ваша пара?</template>
        <template #subtitle><i class="text-wrapper">Каждый партнер отвечает на вопрос по очереди</i></template>
        <template #content>
          <div class="text-description">
            <p class="m-0 font-normal line-height-3">
              Многие пары, проведя вместе немало лет, задаются вопросом, все ли у них в порядке в отношениях.<br>
              Чувство <i class="text-wrapper">любви</i> подобно огню, который требует <i class="text-wrapper">постоянного
              ухода</i>, чтобы не угаснуть и радовать теплом. Со
              временем, жизненные трудности и рутина могут затмить те яркие эмоции, что связывали в начале отношений.
              Появляется необходимость убедиться, что связь между партнерами все еще крепка и оба стремятся к общему
              счастью. В такие моменты очень важно найти возможность вновь взглянуть друг на друга, как на <i
                class="text-wrapper">самого
              дорогого и близкого человека.</i><br>

              Тест на длительную совместимость призван помочь в этом, предлагая взглянуть на отношения через призму
              времени. Этот тест — для тех пар, которые уже доказали свою способность преодолевать жизненные вызовы
              вместе, но хотят понять, как укрепить уже существующие узы и обрести новую гармонию в отношениях.<br>

              Вы устояли перед множеством испытаний, но все ли так хорошо в вашем союзе, как кажется на первый взгляд?
              Способны ли вы и дальше двигаться рука об руку, сохраняя и развивая любовь и взаимопонимание? Этот тест
              даст вам возможность узнать это, а также даст советы, <i class="text-wrapper">как наполнять отношения
              новыми красками и решать
              проблемы, до которых вы, возможно, раньше не доходили.</i><br>

              Для того чтобы получить полную картину ваших долгосрочных отношений, достаточно ответить на 40 вопросов.
              По итогу вы получите обширный анализ, который станет командным планом к улучшению вашего партнерства и
              подскажет, в каких аспектах вы уже находите гармонию, а какие требуют более пристального внимания.<br>
            </p>
          </div>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Начнем же наше путешествие по волнам длительной любви!"/>
        </template>
      </Card>

      <div class="flex flex-row flex-wrap mt-3 ml-8 mr-8">
        <Card class="flex overflow-hidden flex-column flex-1 mr-4">
          <template #content>
            <MeterGroup :value="meters[0]" labelPosition="start"/>
            <MeterGroup class="mt-3" :value="meters[1]" labelPosition="start"/>
            <MeterGroup class="mt-3" :value="meters[4]" labelPosition="start"/>
          </template>
        </Card>
        <Card class="flex overflow-hidden flex-column flex-1">
          <template #content>
            <MeterGroup :value="meters[2]" labelPosition="start"/>
            <MeterGroup class="mt-3" :value="meters[3]" labelPosition="start"/>
            <MeterGroup class="mt-3" :value="meters[5]" labelPosition="start"/>
          </template>
        </Card>
      </div>

    </div>
  </div>

</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'App',
  components: {
    Button
  },
  data() {
    return {
      meters: [
        [{
          label: 'Совместные планы начали строить прошедших тест',
          value: 76,
          color: '#EB9A9C',
          icon: 'pi pi-building'
        },],
        [{
          label: 'Участники, опробовавшие тест, обнаружили новые общие интересы',
          value: 65,
          color: '#FFCF91',
          icon: 'pi pi-book'
        },],
        [{
          label: 'Следуя результатам теста, многие пары улучшили коммуникацию',
          value: 75,
          color: '#93DEAC',
          icon: 'pi pi-user'
        },],
        [{
          label: 'После тестирования уровень доверия между партнерами значительно возрос',
          value: 83,
          color: '#91cff8',
          icon: 'pi pi-user-plus'
        },],
        [{
          label: 'Тест подтвердил совместимость для 83% влюбленных',
          value: 83,
          color: '#c591f8',
          icon: 'pi pi-chart-line'
        },],
        [{label: 'О чувствах партнёра узнали новое пар', value: 55, color: '#f891ea', icon: 'pi pi-heart'},],
      ],
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
  background: rgb(200, 168, 192);
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

.p-card-shadoww {
  box-shadow: -3px 1px 8px rgb(222 197 216), 6px 2px 4px rgb(246 223 246), -2px 4px 4px -1px rgb(154 120 147) !important;
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

i.text-wrapper {
  background-color: #e3badb;
  border-radius: 6px;
  color: #072e42;
  font-size: .875rem;
  font-style: normal;
  font-weight: 500;
  padding: 2px 6px;
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
