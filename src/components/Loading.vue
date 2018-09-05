<template>
  <div class="loading">
  	<img :src="'../../static/images/haoloading.gif'"/>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import '../assets/sass/base.scss';
	img{
		width:rem(730px);
		
	}
</style>
