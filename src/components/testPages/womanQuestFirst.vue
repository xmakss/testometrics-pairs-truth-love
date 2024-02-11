<template>
  <div>
    <img class="mt-2 mb-2" alt="I love you" src="../../assets/think.jpg" width="600" height="400">
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
      question: 'Как бы вы реагировали, если б ваш партнёр предложил совместное хобби?',
      details: '', womanName: '', manName: '',
      successBtnText: 'Далее',
      prevBtnText: 'Назад',
      manAnswer: '',
      womanAnswer: '',
      answers: [
        {name: 'Была бы рада разделить его интересы', key: '1'},
        {name: 'Сначала попробую, а там видно будет', key: '2'},
        {name: 'Мне важно, чтобы у каждого было своё пространство и интересы', key: '3'},
        {name: 'Пока это не мешает моим интересам, я не против', key: '4'}
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