<template>
	<view class="container">
		<view class="address">
			<view class="address-block" v-for="(item,index) in addressList" :key="index" :class="index+1 == addressList.length?'noborder':''">
				<view class="address-content">
					<view class="address-content-top">
						<view class="address-name">{{item.realname}}</view>
						<view class="address-phone">{{item.mobile}}</view>
					</view>
					<view class="address-content-button">{{item.address}}</view>
				</view>
				<view class="view-line"></view>
				<view class="address-caozuo" @click="goAddressInfo(item.id)">
					<view class="address-right2">编辑</view>
				</view>
			</view>
		</view>
		<view class="createAddress" @click="goAddressInfo(false)">
			<image :src="imgUrl+'/images/onecity/add.png'" class="create"></image>新建收货地址
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				imgUrl: http.imgUrl,
				addressList: []
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
				this.getUserReceives()
			},
			getUserReceives: function() {
				uni.showLoading({
					title: '加载中'
				})
				let opts = {
					url: 'Members/userReceives',
					method: 'post'
				};
				let param = {
					user_id: '1829',
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					this.addressList = res.data.data
					uni.hideLoading()
				}, error => {
					console.log(error);
					uni.hideLoading()
				})
			},
			goAddressInfo: function(e) {
				uni.navigateTo({
					url: "./addressInfo?address_id=" + e
				})
				console.log(e)
			}
		}
	}
</script>

<style>
	page {
		background: #F5EFEF;
	}

	.address {
		padding: 0 40rpx;
		background: #fff;
	}

	.address-block {
		padding-bottom: 20rpx;
		border-bottom: 1rpx solid #efefef;
		display: flex;
		align-items: center;
	}

	.address-caozuo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.address-right {
		width: 60rpx;
		padding: 10rpx;
		margin-top: 20rpx;
		background-color: #F01308;
		color: #fff;
		text-align: center;
		font-size: 30rpx;
		border-radius: 10rpx;
	}

	.address-phone {
		font-size: 28rpx;
		color: #666;
	}

	.address-right2 {
		width: 80rpx;
		color: #FF6F9C;
		text-align: right;
		font-size: 30rpx;
	}

	.address-content {
		width: 560rpx;
		height: 150rpx;
	}

	.address-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.address-content-top {
		display: flex;
		align-items: flex-end;
		margin-bottom: 15rpx;
	}

	.noborder {
		border: 0upx !important;
	}

	.address-name {
		font-size: 32rpx;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-right: 20rpx;
	}

	.address-mobile {
		font-size: 24rpx;
	}

	.address-content-button {
		font-size: 28rpx;
		color: #666666;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}

	.createAddress {
		width: calc(90% - 40rpx);
		margin-left: 5%;
		position: fixed;
		bottom: 30rpx;
		padding: 20rpx;
		border-radius: 50rpx;
		background: #FF6F9C;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.view-line {
		height: 100rpx;
		width: 1rpx;
		margin-right: 20rpx;
		background: #dbdbdb;
	}

	.create {
		width: 35rpx;
		height: 35rpx;
		margin-right: 10rpx;
	}
</style>
