<template>
	<view class="container">
		<view class="">
			首页
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		onShow: function() {
			uni.getStorage({
				key: 'userInfo',
				success: function(res) {
					console.log(res.data);
				},
				fail: function(e) {
					uni.navigateTo({
						url:"../login/login"
					})
					console.log(e)
				}
			});
		},
		methods: {

		}
	}
</script>

<style>

</style>
