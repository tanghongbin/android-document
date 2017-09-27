/* eslint-disable no-trailing-spaces */
class MenuItemData {

  constructor (title, subMenus) {
    this.menuTitle = title
    this.subMenus = subMenus
  }
  getSubMenus () {
    return this.subMenus
  }
}
