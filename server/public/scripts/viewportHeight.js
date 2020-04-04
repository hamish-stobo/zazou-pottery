const linksArray = ['#about', '#services', '#catalogue', '#contact']

const isInViewport = element => {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
}

const 
linksArray.map(item => {
    const sectionDiv = document.querySelector(item)
    return isInViewport(sectionDiv)
})
//   The above function could be used by adding a “scroll” event listener to the window and then calling isInViewport().