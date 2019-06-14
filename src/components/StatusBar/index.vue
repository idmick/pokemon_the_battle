<template>
  <div class="status_bar">
    <div class="p-row space_between">
      <div class="status_bar__name">
        <span>{{ name }}</span>
        <span v-if="this.gender === 'female'" class="gender--female">&#9792</span>
        <span v-else-if="this.gender === 'male'" class="gender--male">&#9794</span>
      </div>
      <div class="status_bar__level">Lv {{ level }}</div>
    </div>
    <div class="p-row end">
      <div class="status_bar__health">
        <span class="status_bar__health--hp">HP</span>
        <span class="status_bar__health_bar">
          <span
            class="status_bar__health_meter"
            :style="{'width': health + '%'}"
            :class="healthClass"
          ></span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "status-bar",
  props: {
    name: {
      type: String
    },
    level: {
      type: Number
    },
    health: {
      type: Number
    },
    gender: {
      type: String
    }
  },
  computed: {
    healthClass() {
      if (this.health >= 75) {
        return "status_bar__health_meter--healthy";
      } else if (this.health < 75 && this.health >= 25) {
        return "status_bar__health_meter--danger";
      } else if (this.health < 25 && this.health >= 1) {
        return "status_bar__health_meter--fainting";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.status_bar {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #f8faf1;
  border: 2px solid black;
  padding: 0.5rem 1rem;
  border-radius: 15px 5px 15px;
  .status_bar__name {
    text-transform: uppercase;
    .gender--female {
      color: #ffc0cb;
    }
    .gender--male {
      color: #89cff0;
    }
  }
  .status_bar__health {
    display: flex;
    width: 70%;
    align-items: stretch;
    .status_bar__health--hp {
      background-color: #363636;
      padding: 1px 4px;
      font-size: 0.9rem;
      font-weight: 700;
      color: #c7a245;
    }
    .status_bar__health_bar {
      display: flex;
      width: 100%;
      position: relative;
      background-color: #4b4b4b;
      border: 1px solid #4b4b4b;
      border-radius: 0 10px 10px 0;
      box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
      .status_bar__health_meter {
        display: block;
        border: 1px solid #fff;
        border-radius: 10px;
        transition: width ease 1.5s;
      }
      .status_bar__health_meter--healthy {
        background-color: #7bebb0;
      }
      .status_bar__health_meter--danger {
        background-color: orange;
      }
      .status_bar__health_meter--fainting {
        background-color: red;
      }
    }
  }
}
</style>
