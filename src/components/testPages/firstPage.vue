<template>
  <div>
    <Card class="ml-8 mr-8 mt-8 border-round-2xl p-card-shadoww">
      <template #title> {{ question }}</template>
      <template #subtitle><i v-if="details"
                             class="text-wrapper">{{ details }}</i></template>
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
        <div class="mt-6 -mb-4">
          <span class="p-input-icon-left w-20rem pr-1">
            <i class="pi pi-user text-blue-600"/>
            <InputText v-model="$store.state.manName" placeholder="Введите имя партнера" class="w-20rem border-blue-600 border-2"/>
          </span>
          <span class="p-input-icon-left w-20rem pr-1">
            <i class="pi pi-user text-primary"/>
            <InputText v-model="$store.state.womanName" placeholder="Введите имя партнерши" class="w-20rem border-primary border-2"/>
          </span>
        </div>
      </template>
      <template #footer>
        <Button icon="pi pi-check" :label="successBtnText" @click="nextPage" :disabled="!$store.state.womanName || !$store.state.manName"/>
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
</template>

<script>
export default {
  name: "firstPage",
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
      question: 'Совместима ли ваша пара?',
      details: 'Каждый партнер отвечает на вопрос по очереди',
      successBtnText: 'Начнем же наше путешествие по волнам длительной любви!'
    }
  },
  methods: {
    nextPage() {
      this.$emit('nextPage')
    }
  }
}
</script>

<style scoped>

</style>