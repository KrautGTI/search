let PROJECTS = [
{
  id: 1,
  name: 'Crews',
  projectidNumber: '0938073320',
  image: 'https://img.icons8.com/external-line-adri-ansyah/2x/external-construction-real-estate-line-adri-ansyah-2.png' },

{
  id: 2,
  name: 'Equipment',
  projectidNumber: '0945565655',
  image: 'https://img.icons8.com/ios/2x/foundation.png' },


{
  id: 3,
  name: 'Manufacturing',
  projectidNumber: '0975149873',
  image: 'https://img.icons8.com/external-line-adri-ansyah/2x/external-construction-real-estate-line-adri-ansyah.png' },

{
  id: 4,
  name: 'Projects',
  projectidNumber: '0638546385',
  image: 'https://img.icons8.com/external-wanicon-lineal-wanicon/344/external-construction-construction-wanicon-lineal-wanicon.png' },

{
  id: 5,
  name: 'Subcontractor',
  projectidNumber: '0506549879',
  image: 'https://img.icons8.com/ios/72/road-worker.png' }];



let Contact = React.createClass({ displayName: "Contact",
  render() {
    return /*#__PURE__*/(
      React.createElement("li", null, /*#__PURE__*/
      React.createElement("img", { src: this.props.image, alt: "img" }), /*#__PURE__*/
      React.createElement("span", null, this.props.name), /*#__PURE__*/
      React.createElement("span", { className: "projectid" }, this.props.projectid)));


  } });


let ContactList = React.createClass({ displayName: "ContactList",
  getInitialState() {
    return {
      displayedprojects: PROJECTS };

  },
  searchHandler(event) {
    let searcjQery = event.target.value.toLowerCase(),
    displayedprojects = PROJECTS.filter(el => {
      let searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searcjQery) !== -1;
    });
    this.setState({
      displayedprojects: displayedprojects });

  },
  render() {
    let projects = this.state.displayedprojects;
    return /*#__PURE__*/(
      React.createElement("div", { className: "holder" }, /*#__PURE__*/
      React.createElement("input", { type: "text", placeholder: "Search for a Module", classNAme: "search", onChange: this.searchHandler }), /*#__PURE__*/
      React.createElement("ul", null,

      projects.map(el => {
        return /*#__PURE__*/React.createElement(Contact, { key: el.id,
          name: el.name,
          image: el.image,
          projectid: el.projectidNumber });

      }))));




  } });


ReactDOM.render( /*#__PURE__*/
React.createElement(ContactList, null),
document.getElementById('app'));