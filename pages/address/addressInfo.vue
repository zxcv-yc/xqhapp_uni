<template>
	<view class="container">
		<view class="block_box">
			<view class="block_item u-p-30 bgc_fff border_radius_10 u-m-b-30">
				<view class="block_row_item u-border-bottom u-p-t-20 u-p-b-20">
					<input type="text" value="" placeholder="请输入收货人姓名" />
				</view>
				<view class="block_row_item u-border-bottom u-p-t-20 u-p-b-20">
					<input type="number" value="" placeholder="请输入手机号" maxlength="11" />
				</view>
				<view class="block_row_item u-border-bottom u-p-t-20 u-p-b-20 jus-spB">
					<view class="">
						所在地区
					</view>
					<view class="" @click="showRegionModal">
						<view :class="isChoose?'':'text-tips'">
							{{regionText}}
						</view>
						<u-picker v-model="show" mode="region" :params="params" :safe-area-inset-bottom="true" confirm-color="ff6f9c"
						 @confirm="chooseRegion"></u-picker>
					</view>
				</view>
				<view class="block_row_item  u-p-t-20 u-p-b-20">
					<textarea value="" placeholder="请输入详细地址" />
				</view>
			</view>
			<view class="block_item jus-spB">
				<view class="">
					
				</view>
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
				address_id: '',
				show: false,
				isChoose: 0,
				regionText: '请选择',
				regionObj: {},
				params: {
					province: true,
					city: true,
					area: true
				}
			}
		},
		onLoad: function(e) {
			console.log(e)
			if (e.address_id !== 'false') {
				uni.setNavigationBarTitle({
					title: '编辑地址'
				});
				this.address_id = e.address_id
				this.allRequest()
			}

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
				this.getReceive()
			},
			getReceive: function() {
				uni.showLoading({
					title: '加载中'
				})
				let opts = {
					url: 'Members/getReceive',
					method: 'post'
				};
				let param = {
					user_id: '1829',
					receive_id: this.address_id,
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					uni.hideLoading()
				}, error => {
					console.log(error);
					uni.hideLoading()
				})
			},
			showRegionModal: function() {
				this.show = 1
			},
			chooseRegion: function(e) {
				this.regionText = e.province.label + '-' + e.city.label + '-' + e.area.label
				this.isChoose = 1
				this.regionObj = e
				console.log(e)
			}
		}
	}
</script>

<style>
	.block_box {
		padding: 30upx;
	}
</style>
