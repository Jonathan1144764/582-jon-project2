<template>
  <ParkForm @refetchParks="fetchParks" :allParks="allParks" />
</template>

<script>
import ParkForm from "../components/ParkForm.vue";

export default {
  name: "NewParkFormView",
  data() {
    return {
      allParks: [],
    };
  },
  components: {
    ParkForm,
  },
  methods: {
    fetchParks() {
      this.allParks = [];
      fetch("https://special-doodle-r949xwgp9jpf5w56-3000.app.github.dev/admin")
        .then((response) => response.json())
        .then((json) => {
          for (let park of json) {
            this.allParks.push(park);
          }
        });
    },
  },
  created() {
    this.fetchParks();
  },
};
</script>
