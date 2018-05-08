<template>
  <div class="welcome">
    <h1>Welcome to the Goban</h1>
    <img src="../assets/goban.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'go-ban',
  data: function() {
    return {
      msg: 'A goban for Go written in Vue.js 2 and Go',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
