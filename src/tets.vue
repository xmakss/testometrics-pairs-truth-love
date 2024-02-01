<template>
  <div class="layout-container">
    <div class="layout-topbar">
      <div class="flex overflow-hidden">
    <div class="flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">PrimeFlex</div>
    <div class="flex-grow-1 flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">PrimeFlex</div>
    <div class="flex-none flex align-items-center justify-content-center bg-primary font-bold m-2 px-5 py-3 border-round">PrimeFlex</div>
</div>

    </div>
    <div class="layout-sidebar">

      <Card style="width: 18em" class="ml-3 shadow-4 mt-2">
        <template #header>
          <img alt="user header" src="/images/usercard.png"/>
        </template>
        <template #title> Advanced Card</template>
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
    <div class="layout-content-wrapper">
      <div class="layout-content">

      </div>
    </div>
  </div>

  <!--  <div class="grid wrapped-content">-->
  <!--    <div class="col-8 col-offset-2">-->
  <!--      <div class="border-round h-4rem bg-primary font-bold flex align-items-center justify-content-center">-->
  <!--        border-round-->
  <!--      </div>-->
  <!--    </div>-->
  <!--    <div class="col-8 col-offset-2">-->
  <!--      <Fieldset>-->
  <!--        <template #legend>-->
  <!--          <div class="flex align-items-center gap-2 px-2">-->
  <!--            <Avatar image="/images/avatar/amyelsner.png" shape="circle"/>-->
  <!--            <span class="font-bold">Amy Elsner</span>-->
  <!--          </div>-->
  <!--        </template>-->
  <!--        <p class="m-0">-->
  <!--          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore-->
  <!--          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo-->
  <!--          consequat.-->
  <!--          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.-->
  <!--          Excepteur-->
  <!--          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.-->
  <!--        </p>-->
  <!--      </Fieldset>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      value: null
    }
  }
}
</script>

<style>
body {
  margin: 0;
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
  border-top: 1px solid #dfe7ef;
  overflow: auto;
  height: calc(100vh - 5rem);
  padding: 2rem;
  background-color: #eff3f8;
  border-top-left-radius: 30px;
  box-shadow: inset 0 3px 4px #0000001a;
}
</style>
