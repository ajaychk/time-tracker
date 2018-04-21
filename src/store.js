import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    timeEntries: [
      {
        user: {
          firstName: 'Ryan',
          lastName: 'Chenkie',
          email: 'ryanchenkie@gmail.com',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'
        },
        comment: 'You are a good teacher',
        totalTime: 2.6,
        date: '2018-04-21'
      }
    ],
    totalTime: 5.8
  },
  mutations: {
    DELETE (state, timeEntry) {
      let index = this.state.timeEntries.indexOf(timeEntry)
      state.timeEntries.splice(index, 1)
    },
    ADD (state, timeEntry) {
      state.timeEntries.push(timeEntry)
      state.totalTime += parseFloat(timeEntry.totalTime)
      console.log('added')
    }
  },
  strict: true
})

export default store
