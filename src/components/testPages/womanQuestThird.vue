<template>
  <div>
    <img class="mt-2 mb-2" alt="I love you" src="../../assets/man.jpg" width="600" height="400">
    <Card class="ml-8 mr-8 mt-8 border-round-2xl p-card-shadoww">
      <template #title> {{ question }}</template>
      <template #subtitle><i v-if="details"
                             class="text-wrapper">{{ details }}</i></template>
      <template #content>
        <div class="grid ">
          <div class="col-8 col-offset-2">
            <div class="text-center p-3 border-round-sm border-primary border-3 font-bold shadow-2">Ответ:
              {{ $store.state.womanName }}
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
        <Button icon="pi pi-check" :label="successBtnText" @click="textChanger" :disabled="!womanAnswer"/>
      </template>
    </Card>

    <Dialog v-model:visible="finalVisible" modal :draggable="false" :closable="false"
            :style="{ width: '50vw', height: '30vw'}"
            :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
            class="border-round-2xl p-card-shadoww-final">

      <div class="flex flex-column">
        <div v-show="dialogState === 1" class="justify-content-center align-items-center h-30rem mb-3">
          <h2>Результаты нашего теста на совместимость готовы. Возьмитесь за руки, приготовьтесь к откровению...</h2>
          <ProgressSpinner v-if="dialogState < 4" class="align-items-center flex" style="width: 50px; height: 50px"
                           strokeWidth="5"
                           fill="var(--surface-ground)"
                           animationDuration=".5s" aria-label="Custom ProgressSpinner"/>
        </div>

        <div v-show="dialogState === 2" class="justify-content-center align-items-center h-30rem mb-3">
          <h2>Наши сердца уже знают ответ, но давайте подождём ещё немного для магии момента...</h2>
          <ProgressSpinner v-if="dialogState < 4" class="align-items-center flex" style="width: 50px; height: 50px"
                           strokeWidth="5"
                           fill="var(--surface-ground)"
                           animationDuration=".5s" aria-label="Custom ProgressSpinner"/>
        </div>

        <div v-show="dialogState === 3" class="justify-content-center align-items-center h-30rem mb-3">
          <h2>Это больше, чем просто тест, это начало чего-то великолепного. Готовы ли вы взглянуть в будущее?</h2>
          <ProgressSpinner v-if="dialogState < 4" class="align-items-center flex" style="width: 50px; height: 50px"
                           strokeWidth="5"
                           fill="var(--surface-ground)"
                           animationDuration=".5s" aria-label="Custom ProgressSpinner"/>
        </div>


        <div v-show="dialogState === 4">
          <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
               class="flex justify-content-center align-items-center h-30rem animation-duration-1000">
            <p class="mb-5 final-text">
              С каждым ответом, с каждым щелчком мы шли по пути,который <i class="text-wrapper-final">наша судьба
              наметила давно</i>. Мы искали
              совместимость, но нашли кое-что глубже — истинное понимание и единение душ. С момента нашей первой встречи
              до этой самой секунды мое сердце знало одно: <i class="text-wrapper-final">ты — самый ценный человек в
              моей жизни</i>.
            </p>

          </div>

          <div v-animateonscroll="{ enterClass: 'fadein xmax', leaveClass: 'fadeout', }"
               class="flex justify-content-center align-items-center h-30rem animation-duration-1000"
          >
            <p class="mb-5 final-text">
              Перед нами простирался мир вопросов, но ответ всегда был одинаков — <i
                class="text-wrapper-final">"вместе"</i>. Неважно, какие преграды
              встали на нашем пути, потому что мы проходили их рука об руку, улыбаясь жизни и радуясь каждому мгновению,
              проведенному вместе.
            </p>
          </div>

          <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
               class="flex justify-content-center align-items-center h-30rem animation-duration-1000">
            <p class="mb-5 final-text">
              Теперь, передо мной встал <i class="text-wrapper-final">самый важный вопрос</i>, ответить на который я
              могу только сердцем. Я молчу, но
              огонь в моих глазах горит ярче тысячи слов. Они ищут твой взгляд, требуя <i class="text-wrapper-final">разделить
              со мной этот миг
              навсегда</i>.
            </p>
          </div>

          <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
               class="flex justify-content-center align-items-center h-30rem  animation-duration-1000">
            <p class="mb-5 final-text">
              <i class="text-wrapper-final"><b>Владочка</b>, ты - мое самое большое счастье, мой дом, моя любовь.</i>
            </p>
          </div>

          <div v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
               class="flex justify-content-center align-items-center h-30rem animation-duration-1000">
            <p class="mb-5 final-text">
              Позволь мне сделать <i class="text-wrapper-final">следующий шаг в нашем совместном пути</i>, вопрос,
              который я задам, требует лишь одного
              слова, но это слово станет <i class="text-wrapper-final">началом обета и началом нашей новой истории</i>.
            </p>
          </div>

          <div ref="observerItem" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
               class="flex justify-content-center align-items-center h-30rem animation-duration-1000">
            <p class="mb-5 final-text">
              <i class="text-wrapper-final">Согласишь ли ты стать моей женой?</i>

            </p>
          </div>
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script>
import * as confetti from 'confettis'

export default {
  name: "secondPage",
  data() {
    return {
      question: 'Как вы считаете, какой должна быть роль мужчины в отношениях?',
      details: '', womanName: '', manName: '',
      successBtnText: 'Узнать результат',
      prevBtnText: 'Назад',
      manAnswer: '',
      womanAnswer: '',
      dialogState: 4,
      answers: [
        {name: 'Это опора, защитник и глава семьи', key: '1'},
        {name: 'Партнёр по равенству во всех аспектах жизни', key: '2'},
        {name: 'Мотиватор и поддержка в моих начинаниях', key: '3'},
        {name: 'Провайдер, берущий на себя финансы и крупные решения', key: '4'}
      ],
      finalVisible: false,
      observer: null,
      animationShown: false
    }
  },
  methods: {
    async createObserver() {
      await this.$nextTick()
      this.observer = new MutationObserver((mutationList) => {
        mutationList.forEach(mutation => {
          console.log(mutation)
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (!this.animationShown)
              this.finalAnimation()
          }
        })
      })

      this.observer.observe(this.$refs.observerItem, {attributes: true})
    },
    onClassChange(classAttrValue) {
      const classList = classAttrValue.split(' ');
      if (classList.includes('fully-in-viewport')) {
        console.log('has fully-in-viewport');
      }
    },
    nextPage() {
      this.$emit('nextPage')
    },
    prevPage() {
      this.$emit('prevPage')
    },
    async textChanger() {
      this.finalVisible = true
      this.dialogState = 1
      await this.createObserver()
      setTimeout(() => this.dialogState = 2, 4000);
      setTimeout(() => this.dialogState = 3, 8000);
      setTimeout(() => this.dialogState = 4, 12000);
    },
    async finalAnimation() {
      this.animationShown = true
      this.startConf()
      await new Promise(r => setTimeout(r, 800));
      this.startConf()
      await new Promise(r => setTimeout(r, 800));
      this.startConf()
      await new Promise(r => setTimeout(r, 800));
      this.startConf()
      await new Promise(r => setTimeout(r, 800));
      this.startConf()
      await new Promise(r => setTimeout(r, 800));
      this.startConf()
      await new Promise(r => setTimeout(r, 800));
      this.animationShown = false
    },
    startConf() {
      const minEmojiCount = 30
      const maxEmojiCount = 60

      const minEmojiSize = 0.2
      const maxEmojiSize = 0.5

      const minDisappear = 700
      const maxDisappear = 2000

      const minPos = 0.1
      const maxPos = 0.9
      const xPos = this.randomNumber(minPos, maxPos)
      const yPos = this.randomNumber(minPos, maxPos)

      const emojisList = [
        ['❤️', '🤵', '💍', '👰‍♀️', '🥰', '😘', '💋', '😍', '🎉'],
      ]

      const emojiStack = parseInt(this.randomNumber(0, emojisList.length - 1).toFixed(0))
      const emojis = emojisList[emojiStack]

      console.log(11)
      // Emojis
      confetti.create({
        x: xPos,
        y: yPos,
        count: this.randomNumber(minEmojiCount, maxEmojiCount),
        gravity: 1.5,
        ticks: this.randomNumber(minDisappear, maxDisappear),
        scale: [
          this.randomNumber(minEmojiSize, maxEmojiSize),
          this.randomNumber(minEmojiSize, maxEmojiSize),
          this.randomNumber(minEmojiSize, maxEmojiSize)
        ],
        speed: 31,
        decay: 0.96,
        spread: 360,
        shapes: ['emoji'],
        emojis: emojis
      })

      // Particles
      confetti.create({
        x: xPos,
        y: yPos,
        count: this.randomNumber(20, 60),
        gravity: 1.7,
        ticks: this.randomNumber(minDisappear, maxDisappear),
        scale: 0.1,
        speed: 20,
        decay: 0.93,
        spread: 360,
        shapes: ['circle'],
        colors: ['#da6d43', '#6816cc', '#ddf10f']
      })
    },
    randomNumber(min, max) {
      return Math.random() * (max - min) + min
    },

  },
}
</script>

<style scoped>

</style>