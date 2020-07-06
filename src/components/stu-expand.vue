<style scoped>
.expand-row {
}
.ivu-col {
}
</style>
<template>
  <div>
    <Row class="expand-row">
      <Col span="6">
        <span class="expand-key">1号床:</span>
        <span class="expand-value">{{ row.bde1 }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">2号床:</span>
        <span class="expand-value">{{ row.bde2 }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">3号床:</span>
        <span class="expand-value">{{ row.bde3 }}</span>
      </Col>
      <Col span="6">
        <span class="expand-key">4号床:</span>
        <span class="expand-value">{{ row.bde4 }}</span>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  props: {
    row: Object
  }
};
</script>
