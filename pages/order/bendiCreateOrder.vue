<template>
	<view class="container u-p-30">
		<view class="bgc_fff border_radius_10 u-p-30">
			<view class="jus-start u-m-b-30">
				<image src="../../static/images/cbd.jpg" mode="aspectFill" style="width: 40upx;height: 40upx;" class="border_radius_20"></image>
				<view class="text-bold u-m-l-15">
					店铺名称
				</view>
			</view>
			<view class="jus-spB u-m-b-30">
				<view class="">
					<image src="../../static/images/cbd.jpg" mode="aspectFill" style="width: 150upx; height: 150upx;" class="border_radius_10"></image>
				</view>
				<view class="">
					菜品2选一，提供免费WIFI
				</view>
			</view>
			<view class="u-p-b-20 u-p-t-20 u-border-bottom jus-spB">
				<view class="">
					数量
				</view>
				<view class="">
					<u-number-box :min="1" :max="3" color="#FF6F9C" @plus="numBoxPlus" @change="numBoxChange"></u-number-box>
				</view>
			</view>
			<view class="u-p-b-20 u-p-t-20 u-border-bottom jus-spB">
				<view class="">
					小计
				</view>
				<view class="">
					¥15
				</view>
			</view>
			<view class="u-p-b-20 u-p-t-20 u-border-bottom jus-spB">
				<view class="">
					店铺优惠
				</view>
				<view class="">
					-¥0
				</view>
			</view>
			<view class="u-p-t-20  jus-spB">
				<view class="">
					实付金额
				</view>
				<view class="text-FF6F9C u-font-lg">
					-¥0
				</view>
			</view>
		</view>
		<view class="bgc_fff bottom_box jus-end">
			<view class="">
				应付金额：
			</view>
			<view class="text-FF6F9C u-font-xl text-bold">
				¥15
			</view>
			<view class="buy_btn text-fff" @click="goBuy">
				去支付
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
			}
		},
		onLoad: function() {

			this.allRequest()
		},
		onShow: function() {

		},
		onPullDownRefresh: function() {

			// uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {

		},
		methods: {
			allRequest: function() {

			},
			aa: function() {
				uni.showLoading({
					title: '加载中'
				})
				let opts = {
					url: '',
					method: 'post'
				};
				let param = {
					city_id: '370700',
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					uni.hideLoading()
				}, error => {
					console.log(error);
					uni.hideLoading()
				})
			},
			numBoxPlus: function() {

			},
			numBoxChange: function() {

			},
			goBuy:function(){
				
			}

		}
	}
</script>

<style>
	
.buy_btn{
	background-image: linear-gradient(90deg,#FF94B6,#FF6F9C);
	border-radius: 999px;
	padding: 10upx 20upx;
	box-shadow: 0 6upx 12upx rgba(255, 111, 157, 0.3);
	margin-left: 30upx;
}
.bottom_box{
	width: 100%;
	padding: 20upx;
	position: fixed;
	bottom: 0;
	left: 0;
}
</style>
