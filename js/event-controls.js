class EventControls {
  static init() {
    document.querySelector(SEARCH_BY_USER_NAME_BTN).addEventListener(
      'click',
      SearchForm.handleSearchByName
    );

    document.querySelector(USER_DESC_SEARCH_FIELD).addEventListener(
      'keyup',
      SearchForm.handleSearchByNameAndDesc
    );
  }
}

EventControls.init();
