<template>
	<view >
		<view style="background: #fff;height: 380upx;">
			<view  class="title">
				<view style="color: #fff;text-align: center;padding-top: 25upx;">提现</view>
				<view class="tit" style="padding-top: 40upx;height: 500upx; z-index: 100;">
					<view style="display: flex;justify-content: space-around;" >
						<view style="display: flex;flex-direction: column;align-items: center;">
							<view style="font-size: 24upx;color: #333;">
								今日收入(元)
							</view>
							<view style="font-size:36upx;color: #333;">
								500.00
							</view>
						</view>
						<view style="display: flex;flex-direction: column;align-items: center;">
							<view style="font-size: 24upx;color: #333;">
								累计提现(元)
							</view>
							<view style="font-size: 36upx;color: #333;">
								500.00
							</view>
						</view>
					</view>
					<view style="display: flex;justify-content: space-around;margin-top: 30upx;" >
						<view style="display: flex;flex-direction: column;align-items: center;">
							<view style="font-size: 20upx;color: #666;">
								今日收入(元)
							</view>
							<view style="font-size:27upx;color: #333;margin-top: 3upx;">
								500.00
							</view>
						</view>
						<view style="display: flex;flex-direction: column;align-items: center;">
							<view style="font-size: 20upx;color: #666;">
								今日收入(元)
							</view>
							<view style="font-size:27upx;color: #333;margin-top: 3upx;">
								500.00
							</view>
						</view>
						<view style="display: flex;flex-direction: column;align-items: center;">
							<view style="font-size: 20upx;color: #666;">
								累计提现(元)
							</view>
							<view style="font-size: 27upx;color: #333;margin-top: 3upx;">
								500.00
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
		
		
		<view style="background: #fff;">
			<view>
				<view style=" display: flex;align-items: center;justify-content: space-between; padding:32upx 24upx 32upx 28upx ;border-bottom: 1upx solid #eee;">
					<view style="display: flex;align-items: center;">
						<image src="../../static/img/2.jpg" style="width: 60upx;height: 60upx;border-radius: 50%;"></image>
						<view style="margin-left: 23upx;">
							<view style="display: flex;align-items: center;">
								<view style="font-size: 24upx;">可爱多 </view>
								<view style="color: #999999;font-size: 20upx;margin-left: 5upx;">2017-11-16 11:57</view>
							</view>
							<view style="font-size: 20upx;color: #666;margin-top: 5upx;">
								订单来源
							</view>
							<view style="font-size: 20upx;color: #666;margin-top: 5upx;">
								订单号：003214568745
							</view>
						</view>
					</view>
					<view style="font-size: 36upx;color: #333;">
						+¥399
					</view>
				</view>
				<view style=" display: flex;align-items: center;justify-content: space-between; padding:32upx 24upx 32upx 28upx ;border-bottom: 1upx solid #eee;">
					<view style="display: flex;align-items: center;">
						<image src="../../static/img/2.jpg" style="width: 60upx;height: 60upx;border-radius: 50%;"></image>
						<view style="margin-left: 23upx;">
							<view style="display: flex;align-items: center;">
								<view style="font-size: 24upx;">可爱多 </view>
								<view style="color: #999999;font-size: 20upx;margin-left: 5upx;">2017-11-16 11:57</view>
							</view>
							<view style="font-size: 20upx;color: #666;margin-top: 5upx;">
								订单来源
							</view>
							<view style="font-size: 20upx;color: #666;margin-top: 5upx;">
								订单号：003214568745
							</view>
						</view>
					</view>
					<view style="font-size: 36upx;color: #333;">
						+¥399
					</view>
				</view>
			</view>
			
		</view>
		<view style="display: flex;align-items: center;">
			<view style="flex: 1;background: #F79736;height: 100upx;display: flex;align-items: center;justify-content: center;color: #fff;">
				提现记录
			</view>
			<view style="flex: 1;background: #F73636;height: 100upx;display: flex;align-items: center;justify-content: center;color: #fff;">
				提现
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
	page{
		background: #F0F0F0;
	}
.tit{
	background:url(../../static/img/zhan.png) no-repeat ;
	background-size:100% auto ;
	margin-top: 20upx;
}
.title{
	padding: 0 10upx;
	/* overflow: hidden; */
	/* width: 100%; */
	height: 240upx;
	background: linear-gradient(left,#F75F36,#F73B36);
}
*{
	margin: 0;
	padding: 0;
}
</style>
