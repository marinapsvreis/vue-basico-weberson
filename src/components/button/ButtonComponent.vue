<template>
  <button @click="callback">{{ value }}</button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    value: { type: String, require },
    callback: { type: Function, default: () => {} },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
button {
  width: 100%;
  background-color: var(--cor-primaria);
  color: #fff;
  padding: 10px 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-block: 20px;
  font-size: 18px;
}

button:hover {
  background-color: var(--cor-secundaria);
}
</style>