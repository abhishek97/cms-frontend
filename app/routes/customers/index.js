import Route from '@ember/routing/route';

let pending = 0
const resolveAfter = (ms) => new Promise((resolve, reject) => {
  pending ++;
  setTimeout(() => pending-- == 1 ? resolve() : reject(), ms)
})

export default Route.extend({
  queryParams: {
    q: {
      refreshModel: true
    }
  },
  model ({ q }) {
    const getCustomer = () => this.get('store').query('customer', {
      filter: {
        CID: q
      }
    })
    return resolveAfter(500).then(getCustomer).catch(() => [])
  }
});
