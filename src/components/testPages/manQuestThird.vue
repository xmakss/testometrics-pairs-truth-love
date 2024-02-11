<template>
  <div>
    <img class="mt-2 mb-2" alt="I love you" src="../../assets/time.jpeg" width="600" height="400">
    <Card class="ml-8 mr-8 mt-8 border-round-2xl p-card-shadoww">
      <template #title> {{ question }}</template>
      <template #subtitle><i v-if="details"
                             class="text-wrapper">{{ details }}</i></template>
      <template #content>
        <div class="grid ">
          <div class="col-8 col-offset-2">
            <div class="text-center p-3 border-round-sm border-blue-600 border-3 font-bold shadow-2">Ответ: {{ $store.state.manName }}</div>
          </div>
          <div class="col-8 col-offset-2">
            <div class="text-center p-3 border-round-sm border-blue-600 border-2 font-bold">
              <div v-for="question in answers" :key="`man-${question.key}`" class="flex align-items-center">
                <RadioButton v-model="manAnswer" :inputId="`man-${question.key}`" name="dynamic" :value="question.name"
                             class="mb-2 man-style-radiobutton"/>
                <label :for="`man-${question.key}`" class="ml-2 mb-2">{{ question.name }}</label>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <Button icon="pi pi-times" class="mr-2" :label="prevBtnText" outlined @click="prevPage"/>
        <Button icon="pi pi-check" :label="successBtnText" @click="nextPage" :disabled="!manAnswer"/>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "secondPage",
  data() {
    return {
      question: 'Если ваша партнёрша хотела бы больше времени проводить только вдвоём, как бы вы отреагировали?',
      details: '', womanName: '', manName: '',
      successBtnText: 'Далее',
      prevBtnText: 'Назад',
      manAnswer: '',
      womanAnswer: '',
      answers: [
        {name: 'С радостью соглашусь на больше общего времени', key: '1'},
        {name: 'Найдём баланс между личным пространством и временем вдвоём', key: '2'},
        {name: 'Дам понять, что мне тоже нужно личное время', key: '3'},
        {name: 'Посчитаю это чрезмерным и отстою свои границы', key: '4'}
    ]
    }
  },
  methods: {
    nextPage() {
      this.$emit('nextPage')
    },
    prevPage() {
      this.$emit('prevPage')
    },
  }
}
</script>

<style scoped>

</style>