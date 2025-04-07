import { getAll } from './api/index.js';
import Documents from './Documents.js';

const DATA = await getAll();

class sidebar {
  #lists;

  constructor() {
    const docInstance = new Documents(DATA);
    this.#lists = docInstance.render();
    console.log(this.#lists);
  }

  render() {
    return `
    <header class="sideBarHeader">
      <img src="../image/logo.svg" alt="로고" class="logo" />
      <span class="workspace">OOO님의 작업 공간</span>
      <span class="toggleBtn">
        <img src="../image/sideBar.svg" alt="사이드바 열기/닫기" />
      </span>
    </header>

    <form action="/search" method="GET" class="search">
      <input type="text" name="query" placeholder="검색어를 입력해주세요!" required />
      <button type="submit">🔍</button>
    </form>

    <nav class="documentContainer">
      <div id="documentsLabel">
        전체 파일 보기
        <button>
          <span id="rootAdd" class="material-symbols-outlined">add</span>
        </button>
      </div>
      <ul id="showAll">
        ${this.#lists}
      </ul>
    </nav>
    `;
  }

  toggle() {}
}

export default sidebar;
