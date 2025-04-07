class List {
  #open;
  #depth;
  #title;
  #id;

  constructor(doc) {
    this.#depth = 0;
    this.#title = doc.title;
    this.#id = doc.id;
  }

  render() {
    return `<li data-id="${this.#id} class="depth${this.#depth}"><div class="documentArea"><button><i class="arrow right"></i></button><a><img/>${this.#title}</a><button class="addDocumentBtn"><span class="material-symbols-outlined">add</span></button></div><ul></ul></li>`;
  }
}

export default List;
