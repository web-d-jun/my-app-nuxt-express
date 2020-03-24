<template>
  <v-card>
    <v-card-title>hello??</v-card-title>
    <v-card-text>
      <v-textarea :value="txt" />
    </v-card-text>
    <v-card-actions>
      <v-btn @click="test">test</v-btn>
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
    const r = await (this as any).$axios.get('/api')
    console.log(r)
    this.txt = '111'
  }
}
</script>