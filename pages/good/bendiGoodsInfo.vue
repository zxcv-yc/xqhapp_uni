<template>
	<view class="container">
		<view class="swiper_box">
			<u-swiper :list="list" indicator-pos="bottomRight" mode="number" height="600"></u-swiper>
		</view>
		<view class="swiper_bottom_title jus-spB u-p-l-40 u-p-r-40 text-fff">
			<view class="">
				<text class="u-font-xs inline_block u-m-r-10">¥</text>
				<text class="u-font-xl text-bold">{{goods.price}}</text>
			</view>
			<view class="jus-start">
				<image src="../../static/images/hot.png" mode="aspectFit" class="hot_img"></image>
				<view class="">
					热卖
				</view>
			</view>
		</view>
		<view class="block_box">
			<view class=" bgc_fff u-m-b-20 u-p-b-20 u-p-t-20">

				<view class="u-line-2 u-font-lg jus-spB u-p-l-30">
					<view class="">
						{{goods.goods_name}}
					</view>
					<view class="share_btn jus-center">
						<view class="u-m-r-10">
							<u-icon name="share" color="#fff" size="30"></u-icon>
						</view>
						<view class="text-fff">
							分享
						</view>
					</view>
				</view>
				<view class="padding_0_30 ">
					<view class="jus-spB u-p-12 bg_f5 u-m-t-15 u-m-b-20">
						<view class="jus-start">
							<image src="../../static/images/vip.png" mode="widthFix" class="vip_img u-m-r-15"></image>
							<view class="u-font-sm">
								星球卡下单可享优惠价￥{{goods.member_price}}
							</view>
						</view>
						<view class="open_card_btn jus-center">
							<view class="text-F9DE8F u-font-24">
								立即开卡
							</view>
							<view class="">
								<u-icon name="arrow-right" color="#F9DE8F" size="22"></u-icon>
							</view>
						</view>
					</view>
					<view class="jus-spB ">
						<view class="">
							<u-tag text="雪月夜" shape="circle" bg-color="#FFECD1" color="#FF9F10" border-color="#FFECD1" class="u-m-r-12" size="mini" />
							<u-tag text="雪月夜" shape="circle" bg-color="#FFECD1" color="#FF9F10" border-color="#FFECD1" class="u-m-r-12" size="mini" />
						</view>
						<view class="jus-start">
							<view class="u-font-xs" style="color: #FF9F10;">
								领券
							</view>
							<view class="u-m-l-12">
								<u-icon name="arrow-right" color="#FF9F10" size="22"></u-icon>
							</view>
						</view>
					</view>
				</view>

			</view>
			<!-- <view class="block_item bgc_fff">
				<view class="row_ jus-spB u-border-bottom">
					<view class="jus-start">
						<view class="">
							配送
						</view>
						<view class="text-bold">
							包邮
						</view>
					</view>
					<view class="">
						<u-icon name="arrow-right" color="#333" size="22"></u-icon>
					</view>
				</view>
			</view> -->
			<view class="block_item bgc_fff">
				<view class="jus-start">
					<view style="width: 50upx;" class="u-m-r-15">
						<image :src="imgUrl+shop.pic" mode="aspectFill" style="width: 50upx;height: 50upx;border-radius: 50%;"></image>
					</view>
					<view class="text-bold">
						{{shop.shop_name}}
					</view>
				</view>
				<view class="jus-spB u-m-t-15 u-m-b-15">
					<view class="text-tips">
						营业时间
					</view>
					<view class="u-m-l-15 u-line-2 u-flex-1">
						{{shop.business_work_time}}
					</view>
				</view>
				<view class="jus-spB u-m-t-15 u-m-b-15">
					<view class="jus-start u-flex-1">
						<view class="text-tips">
							商家地址
						</view>
						<view class="u-m-l-15 u-line-1 u-flex-1" style="max-width: 500upx;">
							{{shop.address}}
						</view>
					</view>
					<view class="u-m-l-15">
						<u-icon name="map-fill" color="#FF6F9C" size="30"></u-icon>
					</view>
				</view>
			</view>
			<view class="block_item bgc_fff">
				<view class="u-font-30 text-bold ">详情内容</view>
				<view class="" v-for="(item,index) in goods.goods_option" :key="index">
					<view class="u-font-28 text-bold u-m-b-20 u-m-t-20">{{index}}</view>
					<view class="" v-if="item.length">
						<view class="jus-spB u-font-26 text-tips u-m-t-10 u-m-b-10" v-for="(item1,index1) in item" :key="index1">
							<view class="u-font-26 text-tips">·{{item1.name}}</view>
							<view class="">¥{{item1.price}}</view>
						</view>
					</view>
					<view class="text-tips" v-else>
						暂无数据
					</view>
				</view>

			</view>
			<view class="block_item bgc_fff">
				<view class="u-font-30 text-bold ">购买须知</view>
				<view class="">
					<view class="u-font-28 text-bold u-m-b-20 u-m-t-20">有效期</view>
					<view class="jus-spB u-font-26 text-tips u-m-t-10 u-m-b-10">
						<view class="u-font-26 text-tips">·购买后{{goods.expiry}}天有效</view>
						<!-- <view class="">¥44</view> -->
					</view>
				</view>
				<view class="">
					<view class="u-font-28 text-bold u-m-b-20 u-m-t-20">使用规则</view>
					<view class="jus-spB u-font-26 text-tips u-m-t-10 u-m-b-10" v-for="(item,index) in goods.rule_use" :key="index">
						<view class="u-font-26 text-tips">·{{item}}</view>
						<!-- <view class="">¥44</view> -->
					</view>
				</view>
			</view>
		</view>
		<view class="navigation">
			<view class="left">
				<view class="item" @click="goIndex">
					<u-icon name="home" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">首页</view>
				</view>
				<view class="item" @click="callPhone">
					<u-icon name="phone" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1">电话</view>
				</view>
				<view class="item car">
					<!-- <u-badge class="car-num" :count="9" type="error" :offset="[-3, -6]"></u-badge> -->
					<u-icon name="star" :size="40" :color="$u.color['contentColor']"></u-icon>
					<view class="text u-line-1 u-text-center">收藏</view>
				</view>
			</view>
			<view class="right">
				<!-- <view class="cart btn u-line-1">加入购物车</view> -->
				<view class="buy btn u-line-1" @click="toBuy">立即购买</view>
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
				list: [],
				goods_id: null,
				goods: '',
				shop: {},
			}
		},
		onLoad: function(e) {
			console.log(e)
			this.goods_id = e.goods_id

		},
		onShow: function() {
			this.allRequest()
		},
		onPullDownRefresh: function() {

			// uni.stopPullDownRefresh(); //停止下拉刷新动画
		},
		onReachBottom: function() {

		},
		methods: {
			allRequest: function() {
				this.getGoodsDetail()
			},
			//获取商品详情
			getGoodsDetail: function() {
				let _this = this
				let opts = {
					url: 'shop/getGoodsDetail',
					method: 'post'
				};
				let param = {
					city_id: '370700',
					user_id: '1629',
					// goods_id: 1566
					goods_id: _this.goods_id
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					_this.goods = res.data.data.goods
					_this.shop = res.data.data.goods.shop
					let picArr = res.data.data.goods.many_pic
					let list = []
					for (let i in picArr) {
						let itemObj = {
							image: _this.imgUrl + picArr[i]
						}
						list.push(itemObj)
					}
					_this.list = list
					console.log(list)
					console.log(Boolean(_this.goods.goods_option))
					console.log(_this.goods.goods_option)

				}, error => {
					console.log(error);
				})
			},
			goIndex: function() {
				uni.switchTab({
					url: '../index/index'
				})
			},
			//拨打电话
			callPhone: function() {
				let _this = this
				uni.showModal({
					title: '提示',
					content: "您确定要拨打" + _this.shop.mobile + "吗",
					success: function(res) {
						if (res.confirm) {
							uni.makePhoneCall({
								phoneNumber: _this.shop.mobile
							});
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}

				})
			},
			toBuy:function(){
				uni.navigateTo({
					url:'../order/bendiCreateOrder'
				})
			}




		}
	}
</script>

<style>
	.container {
		padding-bottom: 120upx;
	}

	.swiper_bottom_title {
		background-image: url(../../static/images/title_bg.png);
		background-size: 100% 100%;
		height: 94upx;
	}

	.hot_img {
		width: 24upx;
		margin-right: 10upx;
		height: 36upx;
	}

	.open_card_btn {
		background-image: url(../../static/images/openCardBg.png);
		background-size: 100% 100%;
		width: 140upx;
		height: 70upx;
	}

	.block_item {
		padding: 20upx 30upx;
		margin-bottom: 20upx;
	}

	.vip_img {
		width: 60upx;
		height: 35.6upx;
	}

	.text-F9DE8F {
		color: #f9de8f;
	}

	.bg_f5 {
		background-color: #f5f5f5;
		border-radius: 10upx;
	}

	.row_ {
		padding: 20upx 0;
	}

	.share_btn {
		background-color: #FF6F9C;
		padding: 10upx 0upx;
		border-radius: 999px 0 0 999px;
		font-size: 22upx;
		width: 140upx;
	}
</style>
<style lang="scss" scoped>
	.navigation {
		display: flex;
		margin-top: 100rpx;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 16rpx 0;
		padding-bottom: 36upx;
		position: fixed;
		width: 100%;
		bottom: 0;

		.left {
			display: flex;
			font-size: 20rpx;

			.item {
				margin: 0 30rpx;

				&.car {
					text-align: center;
					position: relative;

					.car-num {
						position: absolute;
						top: -10rpx;
						right: -10rpx;
					}
				}
			}
		}

		.right {
			display: flex;
			font-size: 28rpx;
			align-items: center;
			flex: 1;
			text-align: center;
			margin-right: 20upx;

			.btn {
				line-height: 66rpx;
				padding: 0 100rpx;
				width: 100%;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #ed3f14;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F94E74;
			}
		}
	}
</style>
