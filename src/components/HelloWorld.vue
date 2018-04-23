<template>
  <div class="hello">
    <img src="../assets/IMG_2160.jpg">
    <h1>{{ msg }}</h1>

    <h2><a href="/goban">The Goban</a></h2>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://en.wikipedia.org/wiki/Go_(game)"
          target="_blank"
        >
          Go on Wikipedia
        </a>
      </li>
      <li>
        <a
          href="http://www.usgo.org/"
          target="_blank"
        >
          American Go Association
        </a>
      </li>
      <li>
        <a
          href="https://senseis.xmp.net/"
          target="_blank"
        >
          Sensei's Library
        </a>
      </li>
      <li>
        <a
          href="http://eidogo.com/"
          target="_blank"
        >
          Eidogo Joseki Library
        </a>
      </li>
      <br>
    </ul>
    <h2>Authors</h2>
    <ul>
      <li>
        <a
          href="https://ccflack.github.io/"
          target="_blank"
        >
          Chris Flack
        </a>
      </li>
      <li>
        <a
          href="https://joshuastronomy.github.io/"
          target="_blank"
        >
          Joshua Flack
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'A goban for Go written in Vue.js 2 and Go'
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
