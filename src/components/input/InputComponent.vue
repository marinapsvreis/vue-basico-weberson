<template>
  <div class="box-input">
    <label for="">{{ label }}</label> <br />
    <input :type="type" :placeholder="placeHolder" v-model="valor" />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  model: {
    prop: "value",
    event: "onChange",
  },
  props: {
    label: { type: String, require },
    placeHolder: { type: String },
    type: { type: String, default: "text" },
    value: { type: String, default: "" },
  },
  data() {
    return {
      valor: this.value,
    };
  },
  watch: {
    valor() {
      this.$emit("onChange", this.valor);
    },
  },
};
</script>

<style scoped>
label {
  font-size: 18px;
  font-weight: 700;

  color: #999;
}

input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;

  font-size: 18px;
  margin-top: 5px;
}

.box-input {
  padding-block: 10px;
}
</style>