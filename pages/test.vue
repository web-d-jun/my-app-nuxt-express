<template>
  <v-card>
    <v-card-title>hello??</v-card-title>
    <v-card-text>
      <v-textarea :value="txt" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="test">test</v-btn>
      <v-btn @click="hello">hello</v-btn>
      <v-btn @click="moment">moment</v-btn>
      <v-btn @click="dialogOpen">dialog</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Vue, Emit, Component } from 'nuxt-property-decorator'

@Component
export default class Test extends Vue {
  public txt: string = ''

  @Emit()
  async test() {
    const r3 = await (this as any).$axios.get('/api')

    this.txt = r3.data
  }

  @Emit()
  async hello() {
    const r4 = await (this as any).$axios.get('/api/hello')
    this.txt = r4.data
  }
  @Emit()
  moment() {
    this.txt = (this as any)
      .$moment()
      .toDate()
      .toLocaleTimeString()
  }
  @Emit()
  async dialogOpen() {
    const r5 = await (this as any).$dialog.error({
      title: 'hello?',
      text: 'okok??'
    })
  }
}
</script>