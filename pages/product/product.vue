<template>
	<view class="index-wrapper">
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>


		<view class="swiper-wrapper">
			<view class="swiper-box">
				<swiper class="swiper-content" :autoplay="true" :interval="3000" :circular="true" @change="changeSwiper">
					<swiper-item class="swiper-item" v-for="imgs in swiperList" :key="imgs.id">
						<image class="swiper-img" :src="imgs.img"></image>
					</swiper-item>
				</swiper>
				<view class="indicator">
					<view class="dots" v-for="(swiper, index) in swiperList" :class="[currentSwiper == index ? 'on' : '']" :key="index"></view>
				</view>
			</view>
		</view>
		<view style="padding: 20upx;padding-top: 0;">
			<view style="display: flex;align-items:flex-end;margin-top: 20upx;">
				<view style="color:#F03A3A;font-size: 32upx;font-weight: bold;">
					¥399.00
				</view>
				<view style="text-decoration:line-through; color:#999999;font-size: 24upx;margin-left: 33upx;">¥799.00</view>
			</view>
			<view style="font-weight: 600;color: #333333;font-size: 30upx;font-family:PingFang SC;">此处是商品标题不打点超过两行换行显示此处是商品标题
				不打点超过两行换行显示</view>
			<view style="color: #ccc;font-size: 26upx;margin-top: 10upx;">246人已购</view>

		</view>
		<view style="padding: 0 20upx; display: flex;align-items: center;
		font-size: 24upx;font-weight: bold;margin-top:10upx;padding-bottom:20upx;justify-content: space-between;
		border-bottom:10upx solid #EEEEEE;">
			<div style="display: flex;align-items: center;">
				<view style="margin-right: 60upx;color: #333333;">
					·七日包退
				</view>
				<view style="margin-right: 60upx;color: #333333;">
					·七日包退
				</view>
				<view style="margin-right: 60upx;color: #333333;">
					·七日包退
				</view>
			</div>
			<image src="../../static/img/you.png" style="width: 27upx;height: 18upx;"></image>
		</view>
		<view style="display: flex;align-items: center;border-bottom:1upx solid #E5E5E5;padding-bottom: 12upx;padding-left: 20upx;padding-top: 12upx;">
			<view style="font-size: 30upx;color:#333;margin-right: 10upx;font-weight: 600;">宝贝评价</view>
			<view style="font-size:24upx;color:#999;">(241)</view>
		</view>
		<view style="padding: 0 20upx;">
			<view style="display: flex;align-items: center;margin-top: 20upx;">
				<image src="../../static/img/success.png" style="width: 86upx;height:86upx;"></image>
				<view style="margin-left: 15upx;">
					<view style="display: flex;align-items: flex-end;">
						<view style="font-size: 29upx;color:#666666;font-size: 26upx;">
							神秘人
						</view>
						<view style="font-size: 22upx;color:#999;font-size: 26upx;margin-left: 15upx;">
							2018.5.12
						</view>
					</view>
					<view style="color:#999;font-size: 22upx;">
						某某某款式，红色L码
					</view>
				</view>
			</view>
			<view style="color:#666666;font-size: 26upx;margin-top: 22upx;margin-bottom: 21upx;">十分好看十分舒服十分好看十分舒服十分好看十分舒服 </view>
			<view style="display: flex;align-items: center;flex-wrap: wrap;">
				<image src="../../static/img/1.jpg" style="width: 22%;height: 100upx;margin-right: 3%;"></image>
				<image src="../../static/img/1.jpg" style="width: 22%;height: 100upx;margin-right: 3%;"></image>
				<image src="../../static/img/1.jpg" style="width: 22%;height: 100upx;margin-right: 3%;"></image>
				<image src="../../static/img/1.jpg" style="width: 22%;height: 100upx;margin-right: 3%;"></image>
			</view>
		</view>
		<view style="display: flex;align-items: center;margin-top: 32upx;padding: 0 20upx;padding-bottom: 20upx; border-bottom:12upx solid #EEEEEE;">
			<view style="color:#999999;font-size: 20upx;">
				查看更多评论
			</view>
			<image src="../../static/img/you.png" style="width: 27upx;height: 18upx;margin-left: 20upx;"></image>
		</view>
		<view style="font-size: 30upx;color:#333;font-weight: bold;padding: 12upx 10px ;border-bottom:1upx solid  #E5E5E5;">商品详情</view>
		<view style="padding: 19upx 23upx 0 29upx;text-align:justify;">Nam id semper purus, sit amet scelerisque justo. Proin
			in blandit ligula. Nulla auctor aliquet ipsum, pulvinar tempus dolor maximus et. Quisque at velit vel nunc dignissim
			tincidunt. Phasellus vitae tempus tortor. Etiam nisi risus, tempus sit amet magna nec, luctus pellentesque enim.
			Nulla congue augue eu odio pretium, nec consectetur orci blandit. Proin vitae malesuada purus. Nam eu ante in tortor
			condimentum tempor. Proin tincidunt facilisis lorem sed facilisis. Quisque ut semper nulla, a facilisis nibh.
		</view>

		<view style="display: flex;">
			<view style="display: flex;align-items: center;width: 30%;justify-content: space-around;">
				<view style="display: flex;flex-direction: column;align-items: center;">
					<image src="../../static/img/gou.png" style="width: 50upx;height: 50upx;"></image>
					<view>购物车</view>
				</view>
				<view style="display: flex;flex-direction: column;align-items: center;">
					<image src="../../static/img/shou.png" style="width: 50upx;height: 50upx;"></image>
					<view>收藏</view>
				</view>
			</view>
			<view style="display: flex;align-items: center;width: 70%;">
				<view style="height:100upx;background:rgba(247,151,54,1);flex:1;display: flex;align-items: center;justify-content: center;color: #fff;">放入购物车</view>
				<view @click="buy" style="height:100upx;background:#F73636;flex:1;display: flex;align-items: center;justify-content: center;color: #fff;">立即购买</view>
			</view>
		</view>
		<!-- 服务保障弹窗 -->
		<view style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: rgba(0,0,0,0.5);z-index: 100;" v-if="false">
			<view style="position: absolute;background: #fff;padding-top: 41upx;width: 100%;bottom: 0;">
				<view style="text-align: center;font-size: 32upx;font-weight: bold;">服务保障</view>
				<view style="display: flex;align-items: center;padding: 29upx 0 ;border-bottom:1upx solid #eee;padding-left: 62upx;">
					<view style="width: 44upx;height: 44upx;border-radius: 50%; color:#F73636;border:1upx solid #F73636;display: flex;align-items: center;justify-content: center;">
						7
					</view>
					<view style="margin-left: 32upx;">
						<view>
							七天包退
						</view>
						<view style="color: #999999;">
							购买后七天内无条件退款
						</view>
					</view>
				</view>
				<view style="display: flex;align-items: center;padding: 29upx 0 ;border-bottom:1upx solid #eee;padding-left: 62upx;">
					<view style="width: 44upx;height: 44upx;border-radius: 50%; color:#F73636;border:1upx solid #F73636;display: flex;align-items: center;justify-content: center;">
						7
					</view>
					<view style="margin-left: 32upx;">
						<view>
							七天包退
						</view>
						<view style="color: #999999;">
							购买后七天内无条件退款
						</view>
					</view>
				</view>
				<view style="display: flex;align-items: center; padding: 29upx 0 ;border-bottom:1upx solid #eee;padding-left: 62upx;">
					<view style="width: 44upx;height: 44upx;border-radius: 50%; color:#F73636;border:1upx solid #F73636;display: flex;align-items: center;justify-content: center;">
						7
					</view>
					<view style="margin-left: 32upx;">
						<view>
							七天包退
						</view>
						<view style="color: #999999;">
							购买后七天内无条件退款
						</view>
					</view>
				</view>
				<view style="font-size: 23upx; width: 100%;height: 100upx;background: #F73636;display: flex;align-items: center;justify-content: center;color: #fff;">
					确定
				</view>
			</view>

		</view>
		<!-- 服务保障弹窗 -->
		<view style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: rgba(0,0,0,0.5);z-index: 100;"
		 v-show="false">
			<view style="position: absolute;background: #fff;padding-top: 41upx;width: 100%;bottom: 100upx;height: 704upx;">
				<view style="display: flex;">
					<image src="../../static/img/1.jpg" style="width: 278upx;height:278upx;margin-top: -150upx;margin-left: 20upx;"></image>
					<view style="margin-left: 29upx;margin-top: -16upx;">
						<view style="color: #F73636;font-size: 36upx;font-weight: bold;">
							¥399.00
						</view>
						<view style="font-size: 18upx;color: #999999;">库存：256</view>
						<view style="font-size: 18upx;color: #999999;">已选规格：红色L号</view>
					</view>
				</view>
				<view style="padding: 40upx 20upx 0 20upx;">
					<view style="margin-bottom: 20upx;">规格</view>
					<view style="display: flex;flex-wrap: wrap;">
						<view style="margin-right: 20upx; margin-bottom: 10upx;font-size: 20upx;color: #666;border: 1upx dashed #aaa;padding: 10upx;display: inline-block;">优惠规格优惠规格优惠规格优惠规格优惠规格优惠规格优...</view>
						<view style="margin-right: 20upx;margin-bottom: 10upx;font-size: 20upx;color: #666;border: 1upx dashed #aaa;padding: 10upx;display: inline-block;">优惠规格优惠规格优惠规格优惠规格优惠规格优惠规格优...</view>
					</view>

				</view>
				<view style="padding: 40upx 20upx 0 20upx;">
					<view style="margin-bottom: 20upx;">规格</view>
					<view style="display: flex;flex-wrap: wrap;">
						<view style="margin-right: 20upx; margin-bottom: 10upx;font-size: 20upx;
						color: #666;border: 1upx dashed #aaa;padding: 10upx;display: inline-block;">优惠规格优惠规格...</view>
						<view style="margin-right: 20upx;margin-bottom: 10upx;
						font-size: 20upx;color: #666;border: 1upx dashed #aaa;padding: 10upx;display: inline-block;">优惠规格优惠...</view>
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between;padding: 40upx 20upx 0 20upx;">
					<view>数量</view>
					<view style="display: flex;align-items: center;">
						<view style="width: 40upx;height: 40upx;border:1upx solid #aaa; display: flex;align-items: center;justify-content: center;">-</view>
						<view style="margin-left: 18upx;margin-right: 18upx;">3</view>
						<view style="width: 40upx;height: 40upx;border:1upx solid #aaa; display: flex;align-items: center;justify-content: center;">+</view>
					</view>

				</view>
			</view>

		</view>
	</view>
</template>

<script>
	// import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
	import goodsList from '../../components/goodsList/goodslist.vue'
	import uniLoadMore from '../../components/uni-load-more/uni-load-more.vue'
	import url from '../../globel.js'



	//http://192.168.1.77:9096/payment/pay?orderId=4&bossId=1&Amount=1 
	export default {
		components: {
			goodsList,
			uniLoadMore

		},
		data() {
			return {
				datapay:"",
				orderId: '',
				statusHeight: 20,
				current: 0,
				mode: 'round',
				// 轮播图片
				swiperList: [{
						id: 1,
						src: 'url1',
						img: '/static/img/1.jpg'
					},
					{
						id: 2,
						src: 'url2',
						img: '/static/img/2.jpg'
					},
					{
						id: 3,
						src: 'url3',
						img: '/static/img/3.jpg'
					}
				],
				currentSwiper: 0,
				// 分类菜单
				categoryList: [{
						id: 1,
						name: '办公',
						img: '/static/img/category/1.png'
					},
					{
						id: 2,
						name: '家电',
						img: '/static/img/category/2.png'
					}

				],
				Promotion: [],
				goodsList: [{
						goods_id: 7,
						img: '/static/img/goods/p8.jpg',
						name: '商品名称商品名称商品名称商商品名称商品名称商品名称商品名',
						price: 144,
						slogan: 13526
					},
					{
						goods_id: 8,
						img: '/static/img/goods/p9.jpg',
						name: '商品名称商品名称商品名称商品名称商品名称',
						price: 123,
						slogan: 1000
					},
					{
						goods_id: 9,
						img: '/static/img/goods/p10.jpg',
						name: '商品名称商品名称商品名称商品名',
						price: 186,
						slogan: 3008
					}
				],
				goods: [{
						goods_id: 0,
						img: '/static/img/goods/p1.jpg',
						name: '商品名称',
						price: 168,
						slogan: 1558
					},
					{
						goods_id: 1,
						img: '/static/img/goods/p2.jpg',
						name: '商品名称商品名',
						price: 167,
						slogan: 1038
					}

				],
				status: 'loading',
			}
		},
		onLoad() {
			this.loadPromotion();
		},
		onPullDownRefresh() {
			console.log('下拉了');
		},
		onReachBottom() {
			this.goodsList = this.goodsList.concat(this.goodsList);
		},
		mounted() {
			uni.getLocation({
				geocode: true,
				success: (res) => {
					this.city = res.address.city;
				},
				fail: (res) => {

				}
			})
			uni.getSystemInfo({
				success: (res) => {
					this.statusHeight = res.statusBarHeight;
					console.log(res)
				}
			});
		},
		methods: {
			buy: function() {
				var main = this;
				// console.log(url.url+"order/creat");
				// let fd = new FormData();
				// fd.append('userId', 1);
				// fd.append('userAddressId', 1);
				// fd.append('logisticsOrderName','1');
				// fd.append('logisticsCompany', '1');
				// fd.append('hfDesc', "1");
				// fd.append('id', "1");				
				// fd.append('orderDetailStatus','1');
				// fd.append('hfTax',"1");
				// fd.append('purchasePrice',1);
				// fd.append('purchaseQuantity', 1);				
				// fd.append('distribution', "1");
				// fd.append('payStatusorderType', "1");
				// fd.append('amount', "1");				
				// fd.append('hfMemo', "1");
				// fd.append('hfRemark', "1");
				// fd.append('payMethodName', "1");
				// fd.append('googsId', 3);
				// fd.append('respId', 3);
				// fd.append('logisticsOrdersId', "1");				
				// fd.append('hfName', params.hfName);
				// return Axios.post("/api/product/addproduct", fd, { responseType: 'arraybuffer' });
				uni.request({
					url: url.url + "order/creat",
					method: 'get',
					dataType: "JSON",
					data: {
						userId: 1,
						userAddressId: 1,
						googsId: 3,
						logisticsOrderName: 1,
						respId: 3,
						logisticsOrdersId: 1,
						logisticsCompany: 1,
						hfDesc: 1,
						id: 169,
						// orderDetailStatus: 1,
						hfTax: 1,
						purchasePrice: 1,
						purchaseQuantity: 1,
						distribution: 1,
						payStatus: 1,
						orderType: 1,
						amount: 1,
						hfMemo: 1,
						hfRemark: 1,
						payMethodName: 1,
						ordersid: 57,
						payMethodType: 1
					},
					success: function(res) {
						console.log("提交订单1", res);
						main.orderId = res.data.data[0].ordersId;
						console.log(main.orderId)
						if (res.statusCode == 200) {
							uni.request({
								url: url.urlPay + "payment/pay",
								method: 'get',
								dataType: "JSON",
								data: {
									orderId: main.orderId,
									bossId: 1,
									Amount: 1
								},
								success: function(res) {
									console.log("提交订单2", res);
									main.datapay= res.data.data;
									
									// main.datapay= JSON.parse(main.datapay)
									// console.log(main.datapay)
									// if(res.data.status==200){

									// }
									console.log(main.datapay);
									uni.requestPayment({
									    provider: 'alipay',
									    orderInfo: main.datapay, //微信、支付宝订单数据
									    success: function (res) {
									        console.log('success:' + JSON.stringify(res));
									    },
									    fail: function (err) {
									        console.log('fail:' + JSON.stringify(err));
									    }
									});

								}

							})
						}
					}
				})
			},
			tosearch: function() {
				uni.navigateTo({
					url: '../search/search'
				})
			},
			changeSwiper(e) {
				this.currentSwiper = e.detail.current;
			},
			//加载Promotion 并设定倒计时,,实际应用中应该是ajax加载此数据。
			loadPromotion() {
				let cutTime = new Date();
				let yy = cutTime.getFullYear(),
					mm = cutTime.getMonth() + 1,
					dd = cutTime.getDate();
				let tmpcountdown = yy + '/' + mm + '/' + dd + ' 23:59:59';
				let tmpPromotion = [{
						title: '整点秒杀',
						ad: '整天秒杀专区',
						img: '/static/img/s1.jpg',
						countdown: false
					},
					{
						title: '限时抢购',
						ad: '每天23点上线',
						img: '/static/img/s2.jpg',
						countdown: tmpcountdown
					} //countdown为目标时间，程序会获取当前时间倒数
				];
				//检查倒计时
				for (let i = 0; i < tmpPromotion.length; i++) {
					let row = tmpPromotion[i];
					if (row.countdown) {
						let h = '00',
							m = '00',
							s = '00';
						let currentTime = new Date();
						let cutoffTime = new Date(tmpcountdown);
						if (!(currentTime >= cutoffTime)) {
							let countTime = parseInt(
								(cutoffTime.getTime() - currentTime.getTime()) / 1000
							);
							h = parseInt(countTime / 3600);
							m = parseInt((countTime % 3600) / 60);
							s = countTime % 60;
							h = h < 10 ? '0' + h : h;
							m = m < 10 ? '0' + m : m;
							s = s < 10 ? '0' + s : s;
						}
						tmpPromotion[i].countdown = {
							h: h,
							m: m,
							s: s
						};
					}
				}
				this.Promotion = tmpPromotion;
			},
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/css/uni.css";

	page {
		padding-bottom: 700upx;
	}

	.csp {
		font-size: 22upx;
		color: #999999;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background: #fff;
		// position: fixed;
		// top:0;

	}

	* {
		margin: 0;
		padding: 0;
	}

	.title {
		top: calc(var(--status-bar-height) + 12px);
	}

	.index-wrapper {
		font-size: 25rpx;

		.swiper-wrapper {
			width: 100%;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			// padding: 0 30rpx;
			margin-top: 10rpx;

			.swiper-box {
				width: 100%;
				height: 702upx;
				overflow: hidden;
				// border-radius: 15rpx;
				// box-shadow: 0rpx 8rpx 25rpx rgba(0, 0, 0, 0.2);
				//兼容ios，微信小程序
				position: relative;
				z-index: 1;

				.swiper-content {
					width: 100%;
					height: 702upx;
					background-color: aqua;

					.swiper-item {
						.swiper-img {
							width: 100%;
							height: 100%;
						}
					}
				}

				.indicator {
					// width: 120rpx;
					// height: 5rpx;
					display: flex;
					flex-direction: row;
					position: absolute;
					justify-content: center;
					bottom: 15upx;
					width: 100%;
					// background-color: #efefef;
					overflow: hidden;
					border-radius: 2rpx;

					.dots {
						width: 17upx;
						background: rgba(255, 255, 255, 1);
						opacity: 0.2;
						border-radius: 50%;
						opacity: 0.2;
						border-radius: 50%;
						margin-right: 20upx;
						height: 17upx;

						&.on {
							background: rgba(255, 255, 255, 1);
							opacity: 0.8;
							border-radius: 50%;
						}
					}
				}
			}
		}

		.category-wrapper {
			display: flex;
			flex-direction: row;
			flex-flow: wrap;
			padding: 20rpx;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				left: 20rpx;
				right: 20rpx;
				bottom: 0;
				// border-bottom: 1px solid #efefef;
			}

			.category-content {
				display: flex;
				width: 25%;
				height: 150rpx;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.category-img {
					width: 68rpx;
					height: 68rpx;
					margin-bottom: 5rpx;
				}

				.category-name {
					font-size: 12px;
					color: #3c3c3c;
				}
			}
		}

		.banner-wrapper {
			display: flex;
			width: 100%;
			height: 200rpx;
			align-items: center;
			justify-content: center;

			.banner {
				width: 685rpx;
				height: 150rpx;
			}
		}

		.discount-wrapper {
			padding: 0 40rpx;
			margin-bottom: 30rpx;

			.discount-title {
				margin-bottom: 10rpx;


			}

			.discount-content {
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.discount-item {
					display: flex;
					width: 48%;
					height: 200rpx;
					background-color: #ebf9f9;
					border-radius: 10rpx;
					padding: 10rpx;
					box-sizing: border-box;
					flex-direction: column;

					.item-title {
						font-size: 26rpx;
						font-weight: bold;
					}

					.item-contnet {
						flex: 1;
						display: flex;
						flex-direction: row;

						.item-left {
							flex: 1;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							color: #acb0b0;
						}

						.item-right {
							.shopImg {
								width: 140rpx;
								height: 140rpx;
							}
						}
					}
				}
			}
		}

		.goodsList-wrapper {
			padding: 0 40rpx;

			.goodsTitle {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				margin-bottom: 20rpx;

				.title {
					font-size: 35rpx;
					color: coral;
					margin: 0 20rpx;
				}

				.line {
					width: 30rpx;
					height: 1px;
					background-color: coral;
				}
			}

			.goodsBox {}
		}
	}

	.status-bar {
		background-color: #fff;
	}
</style>
