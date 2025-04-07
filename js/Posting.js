class Posting {
  render() {
    return `
    <div class="emojiBtn" id="emojiBtn">
      <span class="material-symbols-outlined" id="icon">add_reaction</span>
    </div>
    <input type="text" class="postingTitle" contenteditable="true" placeholder="제목" />
    <hr />
    <textarea class="postingContent" contenteditable="true" spellcheck="false" placeholder="내용을 입력하세요"></textarea> -->
    <div class="deleteBtnContainer">
      <button type="button" class="deleteBtn">삭제하기</button>
    </div>
    `;
  }
}

export default Posting;
