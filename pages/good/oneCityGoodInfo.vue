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
								星球卡下单可享优惠价￥{{goods.member_oprice}}
							</view>
						</view>
						<view class="open_card_btn jus-center">
							<navigator url="../member/memberCenter">
								<view class="text-F9DE8F u-font-24">
									立即开卡
								</view>
							</navigator>Ï
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

			<view class="padding_0_30 bgc_fff u-m-b-20">
				<view class="row_item jus-spB">
					<view class="jus-start u-flex-1">
						<view class="text-tips u-m-r-30">
							运费
						</view>
						<view class="u-line-1 u-flex-1" style="max-width: 546upx;">
							包邮
						</view>
					</view>
					<view class="u-m-l-30">
						<!-- <u-icon name="arrow-right" color="#666" size="28"></u-icon> -->
					</view>
				</view>
				<view class="row_item jus-spB" @click="_show(1)">
					<view class="jus-start u-flex-1">
						<view class="text-tips u-m-r-30">
							保障
						</view>
						<view class="u-line-1 u-flex-1" style="max-width: 546upx;">
							<text v-for="(item,index) in goods.service" :key="index">
								<text v-if="index!=0">·</text> <text>{{item.peculiar_name}}</text>
							</text>
						</view>
					</view>
					<view class="u-m-l-30">
						<u-icon name="arrow-right" color="#666" size="28"></u-icon>
					</view>
				</view>
			</view>
			<view class="padding_0_30 bgc_fff u-m-b-20">
				<view class="row_item jus-spB" @click="_show(2)">
					<view class="jus-start u-flex-1">
						<view class="text-tips u-m-r-30">
							规格
						</view>
						<view class="u-line-1 u-flex-1" style="max-width: 546upx;">
							{{spec_obj.name?spec_obj.name:'请选择规格/数量'}}
						</view>
					</view>
					<view class="u-m-l-30">
						<u-icon name="arrow-right" color="#666" size="28"></u-icon>
					</view>
				</view>
				<view class="row_item jus-spB" @click="_show(3)">
					<view class="jus-start u-flex-1">
						<view class="text-tips u-m-r-30">
							参数
						</view>
						<view class="u-line-1 u-flex-1" style="max-width: 546upx;">
							<text v-for="(item,index) in goods.goods_paramter" :key="index">{{item.key}}</text>
						</view>
					</view>
					<view class="u-m-l-30">
						<u-icon name="arrow-right" color="#666" size="28"></u-icon>
					</view>
				</view>
			</view>
			<view class="block_item bgc_fff">
				<view class="u-font-30 text-bold u-m-b-20">商家信息</view>
				<view class="jus-spB">
					<view class="jus-start">
						<view class="shop_img">
							<image :src="imgUrl+shop.shoppic" mode="aspectFill"></image>
						</view>
						<view class="shop_info">
							<view class="">
								{{shop.shopname}}
							</view>
							<view class="text-tips u-font-sm">
								{{shop.judege_count}}评价 {{shop.goods_count}}商品
							</view>
						</view>
					</view>
					<view class="u-m-l-30">
						<u-icon name="arrow-right" color="#666" size="28"></u-icon>
					</view>
				</view>


			</view>
			<view class="block_item bgc_fff">
				<view class="u-font-30 text-bold ">商品详情</view>
				<view class=""  >
					<rich-text :nodes="goods_option"></rich-text>
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
				<view class="item car" @click="collectGoods">
					<!-- <u-badge class="car-num" :count="9" type="error" :offset="[-3, -6]"></u-badge> -->
					<u-icon :name="collect?'star-fill':'star'" :size="40" :color="collect?'#FF6F9C':$u.color['contentColor']"></u-icon>
					<view class="text u-line-1 u-text-center">收藏</view>
				</view>
			</view>
			<view class="right">
				<view class="cart btn u-line-1" @click="cart">加入购物车</view>
				<view class="buy btn u-line-1" @click="_buy">立即购买</view>
			</view>
		</view>
		<u-popup v-model="show1" border-radius="24" mode="bottom">
			<view class="u-p-30">
				<view class="text-bold u-font-lg text-main u-m-t-40 u-m-b-40 u-text-center">保障</view>
				<view class="show1_item u-m-b-10" v-for="(item,index) in goods.service" :key="index">
					<view class="jus-start u-m-b-15">
						<view class="u-m-r-20">
							<image src="../../static/images/xuanzhong.png" mode="widthFix" style="width: 30upx;"></image>
						</view>
						<view class="">
							{{item.peculiar_name}}
						</view>
					</view>
					<view class="text-tips u-font-sm u-m-b-15">
						{{item.peculiar_desc}}
					</view>
				</view>
				<view class="show_modal_btn text-fff u-text-center" @click="_close">
					确定
				</view>
			</view>
		</u-popup>
		<u-popup v-model="show2" border-radius="24" mode="bottom">
			<view class="u-p-30">
				<view class="jus-spB u-p-b-30 u-border-bottom">
					<view class="spec_modal_img">
						<image :src="imgUrl+goods.pic" mode="aspectFill"></image>
					</view>
					<view class="spec_modal_info ">
						<view class="text-bold u-line-2">
							{{goods.goods_name}}
						</view>
						<view class="jus-spB">
							<view class="text-ff6f9c">
								¥{{totalPrices?totalPrices:goods.price}}
							</view>
							<view class="text-tips">
								库存：{{spec_obj.count?spec_obj.count:''}}件
							</view>
						</view>
						<view class="text-tips">
							{{spec_obj.name?spec_obj.name:'请选择规格/数量'}}
						</view>
					</view>
				</view>
				<view class="u-p-b-20 u-p-t-20 u-border-bottom">
					<view class="">
						请选择规格：
					</view>
					<view class="jus-start flex_warp">
						<view class="spec_item" v-for="(item,index) in goods.spec" :key="index" @click="chooseSpec(item)" :class="spec_obj.id==item.id?'spec_active':''">
							{{item.name}}
						</view>
					</view>
				</view>
				<view class="u-p-b-20 u-p-t-20 jus-spB">
					<view class="">
						购买数量：
					</view>
					<view class="">
						<u-number-box :min="1" :max="spec_obj.count?spec_obj.count:1" color="#FF6F9C" @plus="numBoxPlus" @change="numBoxChange"></u-number-box>
					</view>
				</view>
				<view class="show_modal_btn text-fff u-text-center" @click="" v-if="isbuy">
					立即购买
				</view>
				<view class="show_modal_btn text-fff u-text-center" @click="" v-else>
					加入购物车
				</view>
			</view>
		</u-popup>
		<u-popup v-model="show3" border-radius="24" mode="bottom">
			<view class="u-p-30">
				<view class="text-bold u-font-lg text-main u-m-t-40 u-m-b-40 u-text-center">参数</view>
				<view class="show3_item jus-spB u-p-b-15 u-p-t-15" v-for="(item,index) in goods.goods_paramter" :key="index">
					<view class="text-tips" style="width: 300upx;">
						{{item.key}}
					</view>
					<view class="">
						{{item.value}}
					</view>
				</view>
				<view class="show_modal_btn text-fff u-text-center" @click="_close">
					确定
				</view>
			</view>
		</u-popup>
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
				isMember: true,
				shop: {},
				show1: false,
				show2: false,
				show3: false,
				goods_option:'',
				collect: null,
				totalPrices: null,
				unitPrice: null, //单价，用于步进器改变计算总价
				num: 1,
				isbuy: 1,
				spec_obj: {}, //选中的规格对象
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
					url: 'Partner/goodDetail',
					method: 'post'
				};
				let param = {
					city_id: '370700',
					user_id: '1629',
					// goods_id: 1840
					goods_id: _this.goods_id
				};
				http.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					_this.goods = res.data.data
					_this.goods_option = res.data.data.goods_option.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');
					_this.shop = res.data.data.shop
					_this.collect = res.data.collect
					let picArr = res.data.data.many_pic
					let list = []
					for (let i in picArr) {
						let itemObj = {
							image: _this.imgUrl + picArr[i]
						}
						list.push(itemObj)
					}
					_this.list = list


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
			_show: function(e) {
				e == 1 ? this.show1 = 1 : e == 2 ? this.show2 = 1 : this.show3 = 1,
					this.isbuy = 1
			},
			_close: function() {
				this.show1 = this.show2 = this.show3 = 0
			},
			cart: function() {
				this.isbuy = false
				this.show2 = 1
			},
			_buy: function() {
				this.isbuy = 1
				this.show2 = 1
			},
			collectGoods: function() {

			},
			chooseSpec: function(e) {
				console.log(e)
				this.spec_obj = e
				this.totalPrices = this.isMember ? e.member_price : e.price
				this.unitPrice = this.isMember ? e.member_price : e.price //单价，用于步进器改变计算总价
			},
			numBoxPlus: function(e) {
				console.log(e)
			},
			numBoxChange: function(e) {
				console.log(e)
				this.num = e.value
				this.totalPrices = this.accMul(this.unitPrice, this.num)
			},
			accMul: function(arg1, arg2) {
				var m = 0,
					s1 = arg1.toString(),
					s2 = arg2.toString();
				try {
					m += s1.split(".")[1].length
				} catch (e) {}
				try {
					m += s2.split(".")[1].length
				} catch (e) {}

				return (Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)).toFixed(2);
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

	.spec_modal_img {
		width: 160upx;
		height: 160upx;
	}

	.spec_modal_img image {
		height: 160upx;
		border-radius: 10upx;
	}

	.spec_modal_info {
		width: calc(100% - 180upx);
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

	.shop_img {
		width: 80upx;
		height: 80upx;
		margin-right: 30upx;
	}

	.shop_img image {
		height: 80upx;
		border-radius: 50%;
	}

	.row_item {
		padding: 30upx 0;
	}

	.share_btn {
		background-color: #FF6F9C;
		padding: 10upx 0upx;
		border-radius: 999px 0 0 999px;
		font-size: 22upx;
		width: 140upx;
	}

	.show_modal_btn {
		line-height: 70upx;
		background-color: #FF6F9C;
		border-radius: 999px;
		margin-top: 20upx;
	}

	.spec_item {
		padding: 10upx 20upx;
		background-color: #DBDBDB;
		border-radius: 6upx;
		margin-bottom: 15upx;
		margin-right: 15upx;
	}

	.spec_active {
		border: 1upx solid #FF6F9C;
		box-sizing: border-box;
		color: #FF6F9C;
		background-color: #Fff !important;
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
			justify-content: center;
			flex: 1;
			text-align: center;
			// margin-right: 20upx;

			.btn {
				line-height: 66rpx;
				padding: 0 30rpx;
				border-radius: 36rpx;
				color: #ffffff;
			}

			.cart {
				background-color: #FF9F10;
				margin-right: 30rpx;
			}

			.buy {
				background-color: #F94E74;
			}

		}
	}
</style>
