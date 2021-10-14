<template>
  <div>
    <div class="header">
      <img src="./../assets/logo_apple.png" class="logo_apple" />
    </div>

    <div class="menu">
      <router-link to="/">หน้าแรก</router-link>
      <router-link to="/products">รายการสินค้า</router-link>
      <router-link to="/contactus">ช่องทางการติดต่อ</router-link>
      <router-link to="/manage-product" style="float: right"
        >จัดการสินค้า</router-link
      >
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {};
  },
};
</script>


<style scoped>
</style>