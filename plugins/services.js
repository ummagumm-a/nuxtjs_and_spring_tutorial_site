import ToDoService from '~/assets/service/ToDoService'
import LoginService from '~/assets/service/LoginService'

export default ({ $axios }, inject) => {
  const services = {
    login: new LoginService($axios),
    todo: new ToDoService($axios)
  }
  inject('services', services)
}

// import ToDoService from '~/assets/service/ToDoService'
// import LoginService from '~/assets/service/LoginService'

// export default (ctx, inject) => {
//   const services = {
//     login: new LoginService(ctx.$axios),
//     todo: new ToDoService(ctx.$axios)
//   }
//   inject('services', services)
// }
