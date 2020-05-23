import Vuex from 'vuex'
import mutations from '@/store/mutations.js'
import {
  shallowMount,
  createLocalVue
} from "@vue/test-utils";


import Logo from "@/components/Logo.vue";
import Index from "@/pages/index.vue";
describe("Index.vue", () => {


  test("바디 백그라운드 색상 변경", () => {
    const state = {
      bgColor: 'white'
    }
    mutations.bgColor_change(state)
    expect(state.bgColor).toBe('red');
  });
});
