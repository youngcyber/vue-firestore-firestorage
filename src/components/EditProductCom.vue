<template>
  <div>
    <form @submit.prevent="EditProduct()">
      <p>
        <label>ชื่อสินค้า : </label><br /><input
          type="text"
          style="width: 100%"
          v-model="formProduct.name"
        />
      </p>

      <p>
        <label>รูปภาพ : </label><br />

        <input
          type="file"
          @change="previewImage"
          style="width: 100%"
          accept="image/*"
        />
      </p>
      <p v-if="uploadValue > 0 && uploadValue < 100">
        รอซักครู กำลังอับโหลดไฟล์ {{ uploadValue }} %
      </p>
      <p v-if="formProduct.photo">
        <img :src="formProduct.photo" class="preview" />
      </p>
      <p>
        <label>รายฃะเอียดสินค้า: </label><br /><textarea
          style="width: 100%"
          v-model="formProduct.detail"
        ></textarea>
      </p>
      <p>สินค้าแนะนำ</p>
      <p>
        <input
          type="radio"
          id="isRecommand"
          v-model="formProduct.isRecommand"
          value="true"
        />เป็นสินค้าแนะนำ
      </p>

      <p>
        <input
          type="radio"
          id="isRecommand"
          v-model="formProduct.isRecommand"
          value="false"
        />ไม่เป็นสินค้าแนะนำ
      </p>
      <p><input type="submit" value="บีันทึกรายการสินค้า" /></p>
    </form>
  </div>
</template>


<script>
import { db } from "../firebase";
import { storage } from "../firebase";
export default {
  data() {
    return {
      formProduct: {
        id: "",
        name: "",
        price: 0,
        detail: "",
        photo: "",
      },
      uploadValue: 0,
      imageData: null,
    };
  },
  mounted() {
    this.formProduct = this.$route.params.product;
  },
  methods: {
    EditProduct() {
      const ref = db.collection("products").doc(this.formProduct.id);
      ref.update({
        name: this.formProduct.name,
        price: this.formProduct.price,
        detail: this.formProduct.detail,
        photo: this.formProduct.photo,
        isRecommand: this.formProduct.isRecommand,
      });
      this.$router.push({ name: "ManageProduct" });
    },
    previewImage(event) {
      this.imageData = event.target.files[0];
      const storageRef = storage.ref(this.imageData.name).put(this.imageData);
      storageRef.on(
        "state_changed",
        (snapShot) => {
          this.uploadValue = (
            (snapShot.bytesTransferred / snapShot.totalBytes) *
            100
          ).toFixed(0);
        },
        (error) => {
          alert("Error");
        },
        () => {
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.formProduct.photo = url;
          });
        }
      );
    },
  },
};
</script>



<style scoped>
.preview {
  width: 200px;
  border: 1px solid gray;
  padding: 10px;
}
</style>