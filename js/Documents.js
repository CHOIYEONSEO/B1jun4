import List from './List.js';

class Documents {
  #lists;

  constructor(data) {
    this.#lists = this.#createLists(data); // data안에 parent생각할 것.
  }

  #createLists(arr) {
    return arr.map((doc) => new List(doc).render()); // List는 Document로 생각해보기
  }

  render() {
    return this.#lists.join('');
  }
}

export default Documents;
