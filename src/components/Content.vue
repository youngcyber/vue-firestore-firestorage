<template>
  <div>
    <!-- เริืิ่ม -->
    <div class="row">
      <div class="leftcolumn">
        <!-- Proouctlist -->
        <ProductList :products="productData" />
        <!-- จบ Proouctlist -->
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h3>เพิ่มสินค้าใหม่</h3>
          <form @submit.prevent="addProduct()">
            <p>
              <label>บาร์โค้ด : </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.id"
              />
            </p>
            <p>
              <label>ชื่อสินค้า : </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.name"
              />
            </p>
            <p>
              <label>รูปภาพ : </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.img"
              />
            </p>
            <p>
              <label>ราคา: </label><br /><input
                type="text"
                style="width: 100%"
                v-model="formProduct.price"
              />
            </p>
            <p>
              <label>ราคา: </label><br /><textarea
                style="width: 100%"
                v-model="formProduct.detail"
              ></textarea>
            </p>
            <p><input type="submit" value="บีันทึกรายการสินค้า" /></p>
          </form>
        </div>
        <!-- sidebar -->
        <SideBar />
        <!-- จบ sidebar -->
      </div>
    </div>
    <!-- จบ-->
  </div>
</template>


<script>
import ProductList from "./ProductList";
import SideBar from "./SideBar";
export default {
  components: {
    ProductList,
    SideBar,
  },
  data() {
    return {
      formProduct: {
        id: "",
        name: "",
        price: 0,
        detail: "",
        img: "",
      },
      productData: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    addProduct() {
      this.productData.push({
        id: this.formProduct.id,
        name: this.formProduct.name,
        detail: this.formProduct.detail,
        price: this.formProduct.price,
        img: this.formProduct.img,
      });
      alert("Ok saved");
      this.formProduct = {
        id: "",
        name: "",
        price: 0,
        detail: "",
        img: "",
      };
    },
    loadData() {
      this.productData.push(
        {
          id: 1,
          name: "iPhone 13 mini 64 GB",
          detail: "รายละเอียดสินค้า",
          price: 25000,
          img:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000",
        },
        {
          id: 2,
          name: "iPhone 13 mini 128 GB",
          detail: "รายละเอียดสินค้า",
          price: 25000,
          img:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000",
        },
        {
          id: 3,
          name: "iPhone 13  128 GB",
          detail: "รายละเอียดสินค้า",
          price: 25000,
          img:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000",
        },
        {
          id: 4,
          name: "iPhone 13  256 GB",
          detail: "รายละเอียดสินค้า",
          price: 25000,
          img:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000",
        },
        {
          id: 5,
          name: "iPhone 13 Pro 256 GB",
          detail: "รายละเอียดสินค้า",
          price: 25000,
          img:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1631220221000",
        },
        {
          id: 6,
          name: "iPhone 13 Pro Max 256GB",
          detail: "รายละเอียดสินค้า",
          price: 25000,
          img:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-mini-product-red-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1629907845000",
        }
      );
      console.log(this.productData);
    },
  },
};
</script>


<style scoped>
</style>