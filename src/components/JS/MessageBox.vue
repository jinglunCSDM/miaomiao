<template>
  <div class="messageBox">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <div>
          <div @click='handleCencel'>{{ cancel }}</div>
          <div @click='handleOk'>{{ ok }}</div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MessageBox'
}
</script>

<style scoped>
.messageBox{ width: 200px;height: 140px;border: #ccc 1px solid;border-radius: 4px;background-color: #fff;box-shadow: 3px 3px 3px 3px #ccc;position: absolute;top: 50%;left: 50%;margin: -70px 0 0 -100px;}
.messageBox h2{ text-align: center;line-height: 40px;font-size: 18px;}
.messageBox p{ text-align: center;line-height: 40px;}
.messageBox > div{ display: flex;position: absolute;bottom: 0;width: 100%;border-top: 1px #ccc solid;}
.messageBox > div div{ flex: 1; text-align: center; line-height: 30px; border-right: 1px solid #ccc;}
.messageBox > div div:last-child{ border: none;}
</style>>

</style>
