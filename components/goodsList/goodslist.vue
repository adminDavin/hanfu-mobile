<template>
	<view class="goods-wrapper" >
		<view class="goods-item" v-for="(goods_item,index) in goodsList" :key="index" @click="godetail(index)">
			<view class="goodsImg">
				<!-- <image class="goods-img" :src="goods_item.img"></image> -->
				<image class="goods-img" :src="goods_item.img"></image>
			</view>
			<view class="goodsTitle">{{goods_item.goodName}}</view>
			<view class="goodsPrice">
				<text class="price">¥ {{goods_item.sellPrice}}</text>
				<text class="buyNum">{{goods_item.slogan}}人付款</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsList: {
				type: Array,
				required: true
			}
		},
		data() {
			return {
				// goods: [1, 2, 3, 4, 5]
			};
		},
		methods:{
			godetail:function(index){
				console.log(index);
				uni.navigateTo({
					url:'../goods/goods?id='+this.goodsList[index].id
				})
			},
		}
	}
</script>

<style lang="less" scoped>
	.goods-wrapper {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-flow: wrap;

		.goods-item {
			width: 48%;
			// height: 420rpx;
			// border-radius: 20rpx;
			background-color: #fff;
			overflow: hidden;
			// box-shadow: 0px 2rpx 24rpx rgba(0, 0, 0, 0.1);
			margin-bottom: 30rpx;

			&:nth-last-child(1),
			&:nth-last-child(2) {
				margin-bottom: 0;
			}

			.goodsImg {
				height: 300rpx;

				.goods-img {
					width: 100%;
					height: 300rpx;
				}
			}


			.goodsTitle {
				color:#333;
				display: -webkit-box;
				// height: 70rpx;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				padding: 0 20rpx;
				overflow: hidden;
				font-size: 26rpx;
				line-height: 35rpx;
				margin-top: 21upx;
				/*  #ifdef APP-PLUS  */
				margin: 0; //这是一个坑
				/*  #endif  */

			}

			.goodsPrice {
				margin-top: 10upx;
				height: 50rpx;
				margin-bottom: 30upx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				padding: 0 26rpx;

				.price {
					color: #e65339;
					font-size: 30rpx;
					font-weight: bold;
				}

				.buyNum {
					color: #807c87;
					font-size: 24rpx;
				}
			}
		}
	}
</style>
