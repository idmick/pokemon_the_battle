<template>
  <div class="toolbar__wrapper">
    <div class="toolbar p-row">
      <div class="toolbar__instructions p-col">
        <span>What will PIKACHU do?</span>
      </div>
      <div class="toolbar__menu">
        <div class="p-row half-height">
          <div class="p-col p-col--6 justfied-center aligned-center menu__button">FIGHT</div>
          <div class="p-col p-col--6 justfied-center aligned-center menu__button">BAG</div>
        </div>
        <div class="p-row half-height">
          <div class="p-col p-col--6 justfied-center aligned-center menu__button">PKMN</div>
          <div class="p-col p-col--6 justfied-center aligned-center menu__button">RUN</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style scoped lang="scss">
.toolbar__wrapper {
  position: fixed;
  margin: 0 20px 20px 20px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background-color: #4b4b4b;
  .toolbar {
    position: relative;
    height: 100%;
    border: 1rem solid #c7a245;
    border-radius: 5px;
    outline: 0.5rem solid #fff;
    outline-offset: -1.5rem;
    background-color: #345b83;
    padding: 1rem 0.5rem;
    .toolbar__instructions {
      color: #fff;
      font-size: 1.5rem;
      padding: 1rem 0.5rem;
    }
    .toolbar__menu {
      position: absolute;
      z-index: 4;
      right: 0;
      bottom: 0;
      top: 0;
      margin: -1rem;
      width: 50%;
      background-color: #f9f9f9;
      border: 1rem solid #d9d9d9;
      font-size: 1.5rem;
      .menu__button {
        transition: background-color 0.4s ease-in-out;
        cursor: pointer;
      }
      .menu__button:hover {
        background-color: #e9e9e9;
      }
    }
  }
}
</style>
