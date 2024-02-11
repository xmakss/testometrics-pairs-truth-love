<template>
  <div>
    <img class="mt-2 mb-2" alt="I love you" src="../../assets/plans.jpg" width="600" height="400">
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
        <Button v-tooltip="{ value: 'Confirm to proceed', disabled: true, hideDelay: 300 }" icon="pi pi-check" :label="successBtnText" @click="nextPage" :disabled="!manAnswer"/>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "secondPage",
  data() {
    return {
      question: 'Как вы относитесь к планированию будущего в вашей паре?',
      details: '', womanName: '', manName: '',
      successBtnText: 'Далее',
      prevBtnText: 'Назад',
      manAnswer: '',
      womanAnswer: '',
      answers: [
        {name: 'Я предпочитаю все планировать заранее', key: '1'},
        {name: 'Мы планируем важные моменты, но оставляем место для импровизации', key: '2'},
        {name: 'Я предоставляю планирование своей партнёрше', key: '3'},
        {name: 'Планируем только самое необходимое, остальное на ходу', key: '4'}
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