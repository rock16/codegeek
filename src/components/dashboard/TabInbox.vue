<template>
  <div id="inbox">
    <section v-if="hasMessage">
      <div class="message" v-for="(itm, ibx) in items" :key="ibx">
        message
      </div>
    </section>
    <section>
      <div id="noMessage">
        <h4>
          You do not have any message at the momemt. Message sent to you would
          be available in this space
        </h4>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7],
      hasMessage: false,
    };
  },
};
</script>
<style scoped>
#inbox {
  margin: 24px;
}
#inbox .message,
#inbox #noMessage {
  padding: 24px;
  margin-bottom: 24px;
  background: #ffffffee;
  border-radius: 2px;
  cursor: pointer;
  -webkit-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  -moz-box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
  box-shadow: 4px 6px 39px -8px rgba(0, 135, 207, 0.1);
}
#inbox #noMessage {
  display: flex;
  flex-wrap: wrap;
}
#inbox #noMessage h4 {
  color: rgb(187, 63, 54);
}
@media (max-width: 577px) {
  #inbox {
    margin: 12px;
  }
  #inbox .message {
    padding: 12px;
  }
}
</style>
