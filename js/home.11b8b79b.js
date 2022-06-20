"use strict";(self["webpackChunkproxy_vue"]=self["webpackChunkproxy_vue"]||[]).push([[177],{8383:function(t,s,i){i.r(s),i.d(s,{default:function(){return g}});var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("Bg")],1)},a=[],h=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"bg"},[i("canvas",{ref:"canvas",staticClass:"canvas"})])},n=[],r=function(t,s){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if("number"!=typeof t||"number"!=typeof s||"number"!=typeof i)return null;if(i>1){for(var e=[],a=0;a<i;a++)e.push(Math.floor(Math.random()*(s-t+1)+t));return e}return Math.floor(Math.random()*(s-t+1)+t)},o={data:function(){return{ctx:null,height:300,time:0,index:0,colors:[[0,"#814CB6"],[.7,"#4B0082"],[.32,"#191970"],[.42,"#123597"],[.82,"#4169E1"],[.9,"#814CB6"],[1,"#814CB6"]],stop:0,stopNum:.01,start:0,offset:0,palette:[],fillRgba:"",stars:[],starTime:0,img:null}},mounted:function(){this.init()},beforeDestroy:function(){},methods:{init:function(){this.setWH(),this.ctx=this.$refs.canvas.getContext("2d"),this.palette=this.colorPalette(),this.img=new Image,this.img.src="/images/silhouette.png",this.start=Date.now(),this.time=Date.now(),this.offset=Math.floor((Date.now()-this.start)/(3300/256))%256,requestAnimationFrame(this.frame);for(var t=0;t<30;t++)this.stars.push({size:r(1,2),speed:.1,x:r(0,this.$refs.canvas.width),y:r(0,this.height),alpha:(.2*Math.random()+.3).toFixed(2)})},frame:function(){this.setWH(),this.draw(),this.createStar(),this.drawImg(),requestAnimationFrame(this.frame)},colorPalette:function(){var t=this.ctx.createLinearGradient(0,0,0,this.height);return this.colors.forEach((function(s){t.addColorStop(s[0],s[1])})),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.$refs.canvas.width,this.height),this.ctx.getImageData(0,0,1,256).data},draw:function(){(Date.now()-this.time)%20==0&&(this.stop>=.1&&(this.stopNum=-.01),this.stop<=.01&&(this.stopNum=.01),this.stop+=this.stopNum),Date.now()-this.time>=1e3&&(this.time=Date.now()),this.offset=Math.floor((Date.now()-this.start)/128.90625)%256;var t=this.ctx.createLinearGradient(0,0,0,this.height),s="rgba("+[this.palette[4*this.offset+0],this.palette[4*this.offset+1],this.palette[4*this.offset+2],this.palette[4*this.offset+3]]+")";"rgba(0,0,0,0)"===s&&(s=this.fillRgba,this.palette=this.colorPalette()),this.ctx.beginPath(),this.fillRgba=s,t.addColorStop(0,"#000"),t.addColorStop(this.stop,"#000"),t.addColorStop(1,s),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.$refs.canvas.width,this.height),this.ctx.closePath(),this.drawStar()},drawStar:function(){var t=this;this.stars.forEach((function(s,i){s.y<=-10&&t.stars.splice(i,1),t.ctx.beginPath(),s.y-=s.speed,t.ctx.fillStyle="rgba(255,255,255,".concat(s.alpha,")"),t.ctx.arc(s.x,s.y,s.size,0,2*Math.PI),t.ctx.fill(),t.ctx.closePath()}))},createStar:function(){(Date.now()-this.starTime>=1e3||0==this.starTime)&&(this.starTime=Date.now(),this.stars.push({size:r(1,2),speed:.1,x:r(0,this.$refs.canvas.width),y:this.height,alpha:(.2*Math.random()+.3).toFixed(2)}))},drawImg:function(){this.ctx.drawImage(this.img,this.$refs.canvas.width/2-50,this.height-130,100,200)},setWH:function(){this.$refs.canvas.width=window.innerWidth,this.$refs.canvas.height=this.height}}},c=o,l=i(1001),f=(0,l.Z)(c,h,n,!1,null,null,null),u=f.exports,d={name:"Home",components:{Bg:u},data:function(){return{}},mounted:function(){var t=this;this.getToken(),this.$nextTick((function(){t.display=!0}))},methods:{getToken:function(){var t=this.$store.state.userOptions.token;""===t&&this.$router.push({name:"login"})}}},m=d,p=(0,l.Z)(m,e,a,!1,null,"6fa170b2",null),g=p.exports}}]);
//# sourceMappingURL=home.11b8b79b.js.map