<template>
	<view class="container">
		<view class="content">
			<view class="jus-spB padding_0_30  top_box">
				<view class="jus-start">
					<view class="">
						<text class="inline_block margin-right">{{posName}}</text>
					</view>
					<view class="">
						<u-icon name="arrow-down-fill"></u-icon>
					</view>

				</view>
				<view class="text-ff6f9c u-flex-1 search_input_box">
					<u-search class="search_input" placeholder="日照香炉生紫烟" v-model="keyword" :show-action="false" @change="changeInput"></u-search>
				</view>
			</view>
			<view class="padding_0_30 top_box jus-spB">
				<view class="text-tips">
					附近位置
				</view>
				<view class="" @click="relocation">
					重新定位
				</view>
			</view>
			<view class="list_box">
				<view class="list_item" v-for="(item,index) in list" :key="index" @click="choosePoi(item.location,item.name)">
					<view class="text-main">{{item.name}}</view>
					<view class="text-tips u-font-sm">{{item.district?item.district+' ' +item.address:item.address}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import http from '../../common/http.js'
	import amap from '../../common/amap-wx.js'
	export default {
		data() {
			return {
				posName: uni.getStorageSync('posName'),
				lat: uni.getStorageSync('lat'),
				lng: uni.getStorageSync('lng'),
				key: '6357e894cdbb23207ebbd23dc821232b',
				keyword: '',
				list: []
			}
		},
		onLoad: function() {
			this.amapPlugin = new amap.AMapWX({
				key: this.key
			});
			this.allRequest()
		},
		onShow: function() {
			this.posName = uni.getStorageSync('posName'),
				this.lat = uni.getStorageSync('lat'),
				this.lng = uni.getStorageSync('lng')
		},
		onPullDownRefresh: function() {

			uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {

		},
		methods: {
			allRequest: function() {
				this.getPoiAround()
			},
			getPoiAround: function() {
				let _this = this
				this.amapPlugin.getPoiAround({
					success: function(data) {
						//成功回调
						console.log(data)
						_this.list = data.poisData
						// this.$forceUpdate()

					},
					fail: function(info) {
						//失败回调
						console.log(info)
					}
				})
			},
			changeInput: function() {
				let _this = this
				// console.log(this.keyword)
				// return
				this.amapPlugin.getInputtips({
					keywords: this.keyword,
					city: '潍坊市',
					location: this.lng + ',' + this.lat,
					success: function(data) {
						console.log(data)
						if (data && data.tips) {
							_this.list = data.tips
						}

					}
				})
			},
			choosePoi: function(e, n) {
				let point = e.split(",")

				uni.setStorageSync('lat', point[1]);
				uni.setStorageSync('lng', point[0]);
				uni.setStorageSync('posName', n);
				uni.navigateBack({
					delta: 1
				});

			},
			relocation: function() {

				this.amapPlugin.getRegeo({
					success: (data) => {
						console.log(data)
						this.cityName = data[0].regeocodeData.addressComponent.city
						uni.setStorageSync('lat', data[0].latitude);
						uni.setStorageSync('lng', data[0].longitude);
						uni.setStorageSync('posName', data[0].regeocodeData.addressComponent.city);
					}
				});
			},

			// getCityCode: function() {
			// 	console.log("here")
			// 	uni.request({
			// 		url: 'https: //restapi.amap.com/v3/config/district',
			// 		data: {
			// 			keywords: '潍坊市',
			// 			subdistrict:1,
			// 			key:this.key
			// 		},
			// 		// header: {
			// 		// 	'custom-header': 'hello' //自定义请求头信息
			// 		// },
			// 		success: (res) => {
			// 			console.log('成功')
			// 			console.log(res.data);
			// 			// this.text = 'request success';
			// 		},
			// 		error: function(e) {
			// 			console.log(e)
			// 		}
			// 	})

			// }
		}
	}
</script>

<style>
	.text-ff6f9c {
		color: #ff6f9c;
	}

	.search_input_box {
		margin-left: 60upx;
	}

	.top_box {
		padding: 30upx;
		background-color: #fff;
	}

	.list_box {
		padding: 0 30upx;
		margin-top: 30upx;
		background-color: #fff;
	}

	.list_item {
		padding: 20upx 0;
		border-bottom: 1px solid #f5f5f5;
	}

	/* .content{
		padding: 30upx 0;
	} */
</style>
