import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Blog from '../views/Blog.vue'
import Challenges from '../views/Challenges/'
import SoloChallenge from '../views/Challenges/SoloChallenge/'
import SoloChallengeConfirm from '../views/Challenges/SoloChallenge/SoloChallengeConfirm.vue'
import SoloChallengeExam from '../views/Challenges/SoloChallenge/SoloChallengeExam.vue'
import DualTypes from '../views/Challenges/DualChallenge/DualTypes.vue'
import DualTopics from '../views/Challenges/DualChallenge/DualTopics.vue'
import Duellers from '../views/Challenges/DualChallenge/Duellers.vue'
import Invitations from '../views/Challenges/DualChallenge/Invitations.vue'
import DualConfirm from '../views/Challenges/DualChallenge/DualConfirm.vue'
import Instructors from '../views/Instructors.vue'
import Problems from '../views/Problems.vue'
import ProblemTopics from '../views/ProblemTopics.vue'
import Problem from '../views/Problem.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/challenges',
    name: 'Challenges',
    component: Challenges
  },
  {
    path: '/challenges/soloChallenge/',
    name: 'BrowseTopics',
    component: SoloChallenge
  },
  {
    path: '/challenges/soloChallenge/confirm/:topicId',
    name: 'SoloChallengeConfirm',
    component: SoloChallengeConfirm
  },
  {
    path: '/challenges/soloChallenge/:challengeId',
    name: 'SoloChallengeExam',
    component: SoloChallengeExam
  },
  {
    path: '/challenges/dualChallenge/dualTypes/',
    name: 'DualTypes',
    component: DualTypes
  },
  {
    path: '/challenges/dualChallenge/dualTopics/',
    name: 'DualTopics',
    component: DualTopics
  },
  {
    path: '/challenges/dualChallenge/duellers/',
    name: 'Duellers',
    component: Duellers
  },
  {
    path: '/challenges/dualChallenge/invitations/',
    name: 'Invitations',
    component: Invitations
  },
  {
    path: '/challenges/dualChallenge/confirm/:topicId',
    name: 'DualConfirm',
    component: DualConfirm
  },
  {
    path: '/instructors',
    name: 'Instructors',
    component: Instructors
  },
  {
    path: '/problems',
    name: 'ProblemTopics',
    component: ProblemTopics
  },
  {
    path: '/problems/:topic',
    name: 'Problems',
    component: Problems,
    props: route => ({ ...route.params, ...route.query })
  },
  {
    path: '/problem/:id',
    name: 'Problem',
    component: Problem,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
