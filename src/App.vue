<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prompt:wght@200&display=swap");

* {
  box-sizing: border-box;
  font-family: "Prompt";
}

body {
  font-family: Arial;
  padding: 10px;
  background: #f1f1f1;
}

.header {
  background: white;
  background-image: url("https://www.patternb.com/wp-content/uploads/2021/09/iphone-13-big-banner.jpg");
  height: 350px;
  background-position: center;
}

.header h1 {
  font-size: 50px;
}

.menu {
  overflow: hidden;
  background-color: #333;
  background: #000046; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #1CB5E0,
    #000046
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #1CB5E0,
    #000046
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.menu a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.menu a:hover {
  background-color: #ddd;
  color: black;
}

.leftcolumn {
  float: left;
  width: 75%;
}

.rightcolumn {
  float: left;
  width: 25%;
  background-color: #f1f1f1;
  padding-left: 20px;
}

.img {
  background-color: #aaa;
  width: 100%;
  height: auto;
  padding: 10px;
}

.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
}

.column1 {
  float: left;
  width: 200px;
  padding: 10px;
}

.column2 {
  float: left;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

.logo_apple {
  width: 100px;
  height: auto;
  top: 0px;
  left: 30%;
  position: relative;
}

@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

@media screen and (max-width: 400px) {
  .menu a {
    float: none;
    width: 100%;
  }
}
</style>
