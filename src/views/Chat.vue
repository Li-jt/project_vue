<template>
  <div>
    <h1>本地</h1>
    <el-input v-model="ma1" placeholder="请输入内容" clearable></el-input>
    <el-button @click="setMa(ma1)">提交</el-button>
    <el-input v-model="candidates" placeholder="请输入candidate"></el-input>
    <el-button @click="setCandidate(candidates)">提交candidate</el-button>
    <p>本地：{{ localData }}</p>
    <el-input v-model="input1" placeholder="请输入内容" clearable></el-input>
    <el-button @click="sendMessage(1, input1)">发送信息</el-button>
    <h2>远程</h2>
    <el-input v-model="input2" placeholder="请输入内容" clearable></el-input>
    <p>远程：{{ remoteData }}</p>
    <p>{{ ma }}</p>
    <h2>candidate:</h2>
    <p>{{ candidate1 }}</p>
    <el-button @click="sendMessage(2, input2)">发送信息</el-button>
  </div>
</template>

<script>
export default {
  name: 'chat',
  data() {
    return {
      localConnection: null, //本地节点
      remoteConnection: null, // 建立远程节点
      sendChannel: null,
      receiveChannel: null,
      localData: '',
      remoteData: '',
      input1: '',
      input2: '',
      ma: '',
      ma1: '',
      candidates: '',
      candidate1: ''
    }
  },
  mounted() {
    this.initIocal();
    this.initRemote();
    this.onicecandidate();
  },
  methods: {
    //初始化本地节点
    initIocal() {
      this.localConnection = new RTCPeerConnection();
      this.sendChannel = this.localConnection.createDataChannel("sendChannel");
      this.sendChannel.onmessage = this.handleSendChannelMessage;
      this.sendChannel.onopen = this.handleSendChannelStatusChange;
      this.sendChannel.onclose = this.handleSendChannelStatusChange;

    },
    //初始化远程节点
    initRemote() {
      this.remoteConnection = new RTCPeerConnection();
      this.remoteConnection.ondatachannel = this.receiveChannelCallback;
    },
    onicecandidate() {
      this.localConnection.onicecandidate = e => {
        console.log('初始化本地节点', e);
        !e.candidate
          || this.remoteConnection.addIceCandidate(e.candidate)
            .catch(this.handleAddCandidateError)
      }
      this.remoteConnection.onicecandidate = e => {
        console.log('初始化远程节点', e);
        !e.candidate
          || this.localConnection.addIceCandidate(e.candidate)
            .catch(this.handleAddCandidateError)
      }
      // this.localConnection.onicecandidate = e => {
      //   this.remoteConnection.addIceCandidate(e.candidate).catch(this.handleAddCandidateError)
      //   console.log(e);
      //   try {
      //     this.candidate1 = JSON.stringify(e.candidate);
      //   } catch (error) {
      //   }
      // }
    },
    setCandidate(v) {
      v = JSON.parse(v);
      // this.remoteConnection.onicecandidate = e => {
      //   console.log('初始化远程节点', e);
      //   this.localConnection.addIceCandidate(e.candidate)
      //     .catch(this.handleAddCandidateError)
      // }
      this.localConnection.addIceCandidate(v)
        .catch(this.handleAddCandidateError)
      this.createOffer();
    },
    createOffer() {
      this.localConnection.createOffer().then(offer => {
        console.log('offer', offer);
        return this.localConnection.setLocalDescription(offer)
      }).then(() => {
        console.log('localConnection.localDescription', this.localConnection.localDescription);
        return this.remoteConnection.setRemoteDescription(this.localConnection.localDescription)
      }).then(() => {
        console.log('3',);
        return this.remoteConnection.createAnswer()
      }).then(answer => {
        return this.remoteConnection.setLocalDescription(answer)
      })
        .then(() => {
          this.ma = JSON.stringify(this.remoteConnection.localDescription)
          // console.log('5', this.remoteConnection.localDescription);
          // this.localConnection.setRemoteDescription(this.remoteConnection.localDescription)
        }).catch(this.handleCreateDescriptionError)
    },
    setMa(v) {
      v = JSON.parse(v);
      console.log('5', v);
      console.log('6', v);
      this.localConnection.setRemoteDescription(v)
    },
    // 本地节点处理方法
    handleSendChannelStatusChange(event) {
      console.log('本地节点处理方法', event);
    },

    receiveChannelCallback(event) {
      console.log('远程处理方法', event);
      this.receiveChannel = event.channel;
      this.receiveChannel.onmessage = this.handleReceiveMessage;
      this.receiveChannel.onopen = this.handleReceiveChannelStatusChange;
      this.receiveChannel.onclose = this.handleReceiveChannelStatusChange;
    },
    // 远程处理方法
    handleReceiveMessage(event) {
      this.remoteData = event.data;
      console.log('远程响应', event);
    },
    handleSendChannelMessage(event) {
      this.localData = event.data;
      console.log('本地响应', event);
    },
    handleAddCandidateError(err) { },
    handleCreateDescriptionError(err) {
      console.error(err);
    },
    handleReceiveChannelStatusChange() { },
    sendMessage(i, v) {
      if (i === 1) {
        this.sendChannel.send(v);
      } else {
        this.receiveChannel.send(v);
      }
    }
  }
}
</script>

<style>
</style>