<template>
	<view>
		<view class="out" style="background: #fff;box-shadow:0px 0px 7px 0px rgba(0, 0, 0, 0.04);">
			<view style="display: flex;align-items: center;background: #fff;">
				<view class="inout" style="border:1px solid rgba(229,229,229,1);">
					<input type="text" placeholder="搜索" style="margin-left: 82upx;">
				</view>
				<view class="add" style="margin-left: 4%;">+添加优惠券</view>
			</view>
		</view>
		<view style="display: flex;align-items: center;padding:0 10%;justify-content: space-between;margin-top: 30upx;">
			<view><text style="color:#666666;font-size: 27upx;color:#666;">总优惠券数量：</text><text style="color:#F79736;font-size: 27upx;">600</text></view>
			<view><text style="color:#666666;font-size: 27upx;color:#666;">上架中：</text><text style="color:#F79736;font-size: 27upx;">600</text></view>
			<view><text style="color:#666666;font-size: 27upx;color:#666;">未上架：</text><text style="color:#F79736;font-size: 27upx;">600</text></view>
		</view>
		<view style="padding: 0 20upx;">
			<view class="item" >
				<view class="youout">
					<view class="you">
						【优惠券标题】
					</view>
					<view class="kao" style="color:#DC3A2D;font-size: 22upx;display: flex;align-items: center;justify-content: center;padding-left: 10px;">2天后到期</view>
				</view>
				<view style="display: flex;align-items: center;padding: 0upx 0 0 49upx;">
					<view style="padding-right: 41upx;">
						<view>
							<text style="font-size: 68upx;color:#fff;">50</text><text style="margin-left: 20upx; font-size: 26upx;color:#fff;">元</text>
						</view>
						<view style="font-size: 28upx;color:#fff;">
							满200立减
						</view>
					</view>
					<view style="font-size: 27upx;color:#fff;border-left: 1upx solid #fff;height: 70upx;line-height: 70upx;padding-left: 31upx;">
						优惠券简介
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between; margin-top: 50upx;padding-right: 20upx;">
					
					<view style=" color:red;border: 1upx solid red;width: 105upx;height: 44upx;font-size: 20upx;display: flex;align-items: center;justify-content: center;
					padding: 5upx 5upx; border-radius:10upx ;margin-left: 16upx;">未上架</view>
					<view style="display: flex;align-items: center;">
						<view style="display: flex;align-items: center;flex-direction: column;align-items:center;">
							<image src="../../static/img/shang.png" style="width: 36upx;height: 36upx;"></image>
							<view  style="font-size: 17upx;color:#999;margin-top: 5upx;">上架</view>
						</view>
						<view style="display: flex;align-items: center;flex-direction: column;align-items:center;margin-left: 50upx;">
							<image src="../../static/img/bian.png" style="width: 36upx;height: 36upx;"></image>
							<view  style="font-size: 20upx;color:#999;margin-top: 5upx;">修改</view>
						</view>
						<view style="display: flex;align-items: center;flex-direction: column;align-items:center;margin-left: 50upx;">
							<image src="../../static/img/cha.png" style="width: 36upx;height: 36upx;"></image>
							<view style="font-size: 20upx;color:#999;margin-top: 5upx;">删除</view>
						</view>
					</view>
				</view>
				<view style="height: 10upx;background: #fff;"></view>
			</view>
			
			<view class="item" >
				<view class="youout">
					<view class="you">
						【优惠券标题】
					</view>
					<view class="kao" style="color:#DC3A2D;font-size: 22upx;display: flex;align-items: center;justify-content: center;padding-left: 10px;">2天后到期</view>
				</view>
				<view style="display: flex;align-items: center;padding: 0upx 0 0 49upx;">
					<view style="padding-right: 41upx;">
						<view>
							<text style="font-size: 68upx;color:#fff;">50</text><text style="margin-left: 20upx; font-size: 26upx;color:#fff;">元</text>
						</view>
						<view style="font-size: 28upx;color:#fff;">
							满200立减
						</view>
					</view>
					<view style="font-size: 27upx;color:#fff;border-left: 1upx solid #fff;height: 70upx;line-height: 70upx;padding-left: 31upx;">
						优惠券简介
					</view>
				</view>
				<view style="display: flex;align-items: center;justify-content: space-between; margin-top: 50upx;padding-right: 20upx;">
					
					<view style=" color:red;border: 1upx solid red;width: 105upx;height: 44upx;font-size: 20upx;display: flex;align-items: center;justify-content: center;
					padding: 5upx 5upx; border-radius:10upx ;margin-left: 16upx;">未上架</view>
					<view style="display: flex;align-items: center;">
						<view style="display: flex;align-items: center;flex-direction: column;align-items:center;">
							<image src="../../static/img/shang.png" style="width: 36upx;height: 36upx;"></image>
							<view  style="font-size: 15upx;color:#999;margin-top: 5upx;">上架</view>
						</view>
						<view style="display: flex;align-items: center;flex-direction: column;align-items:center;margin-left: 50upx;">
							<image src="../../static/img/bian.png" style="width: 36upx;height: 36upx;"></image>
							<view  style="font-size: 15upx;color:#999;margin-top: 5upx;">修改</view>
						</view>
						<view style="display: flex;align-items: center;flex-direction: column;align-items:center;margin-left: 50upx;">
							<image src="../../static/img/cha.png" style="width: 36upx;height: 36upx;"></image>
							<view style="font-size: 8px;color:#999;margin-top: 5upx;">删除</view>
						</view>
					</view>
				</view>
				<view style="height: 10upx;background: #fff;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>

	
	
	.youout {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 18upx 0 0 49upx;

	}

	.kao {
		background:  url(../../static/img/kao.png) no-repeat;
		width: 168upx;
		height: 57upx;
		background-size: 100%;
		margin-right: -8upx;
	}

	* {
		padding: 0;
		margin: 0;
	}

	.you {
		font-size: 30upx;
		color: #fff;

		font-weight: 400;
	}

	.item {
		    /* height: 146px; */
		overflow: hidden;
		margin-top: 28upx;
		/* height: 322upx; */
		background:#fff url(../../static/img/zu.png) no-repeat;
		background-size: 100%;
	}

	page {
		/* background: #179B16; */
		background: #F5F5F6;
		/* background-size: 100%; */
	}

	.out {
		padding: 76upx 20upx 24upx 20upx;
	}

	.add {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		color: #fff;
		width: 30%;
		height: 70upx;
		background: red;
		border-radius: 8upx;

	}

	.inout {
		/* border: 1upx solid #E5E5E5; */
		border-radius: 35upx;
		background: #F5F5F6;
		width: 75%;
		height: 70upx;
		display: flex;
		align-items: center;
	}
</style>
