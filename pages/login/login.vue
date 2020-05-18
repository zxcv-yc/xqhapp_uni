<template>

	<view class="container">
		<u-top-tips ref="uTips"></u-top-tips>
		<view class="top_bg_box" style="background-image: url(../../static/images/bg_login.png);">
			<view class="input_box">
				<view class="input_row jus-start">
					<view class="u-m-r-20">
						<u-icon name="account" color="#333" size="30"></u-icon>
					</view>
					<view class="u-flex-1">
						<input type="number" value="" maxlength="11" class="input_style" placeholder="请输入手机号" v-model="phoneNum" />
					</view>
				</view>
				<view class="input_row jus-start">
					<view class="u-m-r-20">
						<u-icon name="lock" color="#333" size="30"></u-icon>
					</view>
					<view class="u-flex-1">
						<input type="password" value="" class="input_style" placeholder="请输入密码" v-model="password" />
					</view>
				</view>
				<view class="login_btn u-text-center " @click="doLogin">
					登录
				</view>
				<navigator url="./signin" hover-class="none">
					<view class="login_btn u-text-center " style="margin-top: 40upx;">
						注册
					</view>
				</navigator>
				<image src="../../static/images/wx.png" mode="widthFix" class="wx_login_img" @click="doWxLogin"></image>
			</view>
		</view>

	</view>
</template>

<script>
	import http from '../../common/http.js'
	export default {
		data() {
			return {
				phoneNum: '',
				password: '',
				error: ''
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
			//调起微信登录
			doWxLogin: function() {
				let _this = this
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						// console.log(res.provider)
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									// console.log(JSON.stringify(loginRes));
									uni.getUserInfo({
										provider: 'weixin',
										success: function(infoRes) {
											console.log(infoRes)
											if (infoRes.errMsg == 'getUserInfo:ok') {
												let _userInfo = infoRes.userInfo
												// return
												let opts = {
													url: 'AppWx/wxLogin',
													method: 'post'
												};
												let param = {
													openid: _userInfo.openId,
													nickname: _userInfo.nickName,
													headimgurl: _userInfo.avatarUrl,
													// sex: _userInfo.sex
												};
												console.log(param)
												http.httpTokenRequest(opts, param).then(res => {
													// if (res.data.code == 200) {
													// 	_this.$refs.uTips.show({
													// 		title: res.data.msg,
													// 		type: 'success',
													// 		duration: '2300'
													// 	})
													// 	uni.setStorageSync('userInfo', res.data.data);
													// 	uni.setStorageSync('city_id', 370700);
													// 	uni.navigateBack({
													// 		delta: 1
													// 	})
													// } else {
													// 	_this.$refs.uTips.show({
													// 		title: res.data.msg,
													// 		type: 'error',
													// 		duration: '2300'
													// 	})
													// }
													console.log(res.data);

												}, error => {
													console.log(error);
												})
											} else {
												uni.showModal({
													title: '提示',
													content: '获取微信信息失败,请稍后再试',
													showCancel: false,
												})
											}
											// console.log('用户昵称为：' + infoRes.userInfo.nickName);
										}
									});
								},
								fail: function(e) {
									console.log(e)
								},
								complete: function(e) {
									console.log(e)
								}
							});
						}
					}
				});
			},
			//执行登录
			doLogin: function() {

				// uni.setStorageSync('test', {id:1,name:'aaa'});
				let _this = this
				if (!_this.validation()) {
					_this.$refs.uTips.show({
						title: _this.error,
						type: 'warning',
						duration: '2300'
					})
					return false
				}
				let opts = {
					url: 'AppWx/login',
					method: 'post'
				};
				let param = {
					username: _this.phoneNum,
					password: _this.password
				};
				http.httpTokenRequest(opts, param).then(res => {
					if (res.data.code == 200) {
						_this.$refs.uTips.show({
							title: res.data.msg,
							type: 'success',
							duration: '2300'
						})
						uni.setStorageSync('userInfo', res.data.data);
						uni.setStorageSync('city_id', 370700);
						uni.navigateBack({
							delta: 1
						})
					} else {
						_this.$refs.uTips.show({
							title: res.data.msg,
							type: 'error',
							duration: '2300'
						})
					}
					console.log(res.data);

				}, error => {
					console.log(error);
				})
			},
			// 表单验证
			validation: function(v) {
				let _this = this
				let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if (!reg.test(_this.phoneNum)) {
					this.error = '请填写正确的手机号';
					return false;
				}

				if (_this.password === '') {
					this.error = '请输入您的密码';
					return false;
				}
				return true;
			}
		}
	}
</script>

<style>
	.top_bg_box {
		background-image: url(../../static/images/bg_login.png);
		width: 750upx;
		height: 1266upx;
		background-size: 100% 100%;
	}

	.input_box {
		padding: 120upx;
		padding-top: 520upx;
	}

	.input_style {
		border: none;


	}

	.input_row {
		border-bottom: 2upx solid #333;
		padding: 20upx 0;
		margin: 20upx 0;
	}

	.login_btn {
		line-height: 80upx;
		border-radius: 999px;
		background-image: linear-gradient(46deg, #FF6F9C, #FFC993);
		color: #fff;
		font-weight: bold;
		margin-top: 100upx;
	}

	.wx_login_img {
		width: 100upx;
		margin: 30upx auto;
	}
</style>
