/*
 * @Author: lijt
 * @Date: 2022-08-26 09:21:11
 * @LastEditors: lijt
 * @LastEditTime: 2022-09-14 13:38:58
 * @FilePath: \proxy_vue\tests\unit\example.spec.js
 * @Description: 
 */
import Vue from 'vue'
import {
  shallowMount
} from '@vue/test-utils'
import CountBtn from '@/components/CountBtn.vue'

describe('@/components/CountBtn.vue', () => {
  //拿到当前组件的构造函数
  const Constructor = Vue.extend(CountBtn)
  //挂载，模拟渲染过程
  const vm = new Constructor().$mount()

  it('挂载countBtn组件', () => {
    console.log(cy);
    const wraper = shallowMount(CountBtn);
    const btn = wraper.find("button");
    expect(wraper.html()).toBe(`<button>点击次数0</button>`);
  })

  it('测试countBtn组件点击', (done) => {
    const wraper = shallowMount(CountBtn);
    const btn = wraper.find("button");
    expect(wraper.html()).toBe(`<button>点击次数0</button>`);
    btn.trigger('click');
    setTimeout(() => {
      expect(wraper.html()).toBe(`<button>点击次数1</button>`);
      done();
    }, 1000);
  });

  it('优雅的测试点击事件', async () => {
    const wraper = shallowMount(CountBtn);
    const btn = wraper.find("button");
    expect(wraper.html()).toBe(`<button>点击次数0</button>`);
    btn.trigger('click');
    await wraper.vm.$nextTick();
    expect(wraper.html()).toBe(`<button>点击次数1</button>`);
  });

  it('sum', () => {
    const sum = vm.sum
    expect(sum(1, 2)).toBe(3)
  })
})