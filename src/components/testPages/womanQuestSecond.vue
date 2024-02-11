<template>
  <div>
    <img class="mt-2 mb-2" alt="I love you" src="../../assets/finansi.jpg" width="600" height="400">
    <Card class="ml-8 mr-8 mt-8 border-round-2xl p-card-shadoww">
      <template #title> {{ question }}</template>
      <template #subtitle><i v-if="details"
                             class="text-wrapper">{{ details }}</i></template>
      <template #content>
        <div class="grid ">
          <div class="col-8 col-offset-2">
            <div class="text-center p-3 border-round-sm border-primary border-3 font-bold shadow-2">Ответ: {{ $store.state.womanName }}
            </div>
          </div>
          <div class="col-8 col-offset-2">
            <div class="text-center p-3 border-round-sm border-primary border-2 font-bold">
              <div v-for="question in answers" :key="`woman-${question.key}`" class="flex align-items-center">
                <RadioButton v-model="womanAnswer" :inputId="`woman-${question.key}`" name="dynamic"
                             :value="question.name"
                             class="mb-2"/>
                <label :for="`woman-${question.key}`" class="ml-2 mb-2">{{ question.name }}</label>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <Button icon="pi pi-times" class="mr-2" :label="prevBtnText" outlined @click="prevPage"/>
        <Button icon="pi pi-check" :label="successBtnText" @click="nextPage" :disabled="!womanAnswer"/>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "secondPage",
  data() {
    return {
      question: 'Если ваш мужчина захотел бы обсудить семейные финансы, какой подход бы для вас был предпочтительнее?',
      details: '', womanName: '', manName: '',
      successBtnText: 'Далее',
      prevBtnText: 'Назад',
      manAnswer: '',
      womanAnswer: '',
      answers: [
        {name: 'Открытый разговор с чётким распределением обязанностей и бюджета', key: '1'},
        {name: 'Обсуждение широких рамок с возможностью корректировки в будущем', key: '2'},
        {name: 'Доверяю его мнению и принимаю решения', key: '3'},
        {name: 'Мне удобнее, когда каждый занимается своими финансами', key: '4'}
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