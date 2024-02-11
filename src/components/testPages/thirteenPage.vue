<template>
  <div>
    <img class="mt-2 mb-2" alt="I love you" src="../../assets/serial.jpg" width="600" height="400">
    <Card class="ml-8 mr-8 mt-2 border-round-2xl p-card-shadoww">
      <template #title> {{ question }}</template>
      <template #subtitle><i v-if="details"
                             class="text-wrapper">{{ details }}</i></template>
      <template #content>
        <div class="grid ">
          <div class="col-6">
            <div class="text-center p-3 border-round-sm border-blue-600 border-3 font-bold shadow-2">Ответ: {{ $store.state.manName }}</div>
          </div>
          <div class="col-6">
            <div class="text-center p-3 border-round-sm border-primary border-3 font-bold shadow-2">Ответ: {{ $store.state.womanName }}
            </div>
          </div>
          <div class="col-6">
            <div class="text-center p-3 border-round-sm border-blue-600 border-2 font-bold">
              <div v-for="question in answers" :key="`man-${question.key}`" class="flex align-items-center">
                <RadioButton v-model="manAnswer" :inputId="`man-${question.key}`" name="dynamic" :value="question.name"
                             class="mb-2 man-style-radiobutton"/>
                <label :for="`man-${question.key}`" class="ml-2 mb-2">{{ question.name }}</label>
              </div>
            </div>
          </div>
          <div class="col-6">
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
        <Button icon="pi pi-check" :label="successBtnText" @click="nextPage" :disabled="!manAnswer || !womanAnswer"/>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "secondPage",
  data() {
    return {
      question: 'Какой фильм или сериал вам обоим нравится и почему?',
      details: '', womanName: '', manName: '',
      successBtnText: 'Далее',
      prevBtnText: 'Назад',
      manAnswer: '',
      womanAnswer: '',
      answers: [
        {name: 'Любим захватывающие истории с глубоким смыслом', key: '1'},
        {name: 'Предпочитаем легкие комедии, которые поднимают настроение', key: '2'},
        {name: 'Тяготеем к драмам и фильмам, которые заставляют задуматься', key: '3'},
        {name: 'Отдаем предпочтение научной фантастике и фэнтези – любим открытия и приключения', key: '4'}
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